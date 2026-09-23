'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FlowerShowerProps {
  triggerCount: number;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  type: 'marigold' | 'hibiscus' | 'modak' | 'goldSparkle';
  alpha: number;
}

export default function FlowerShower({ triggerCount }: FlowerShowerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const petalsRef = useRef<Petal[]>([]);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (triggerCount === 0) return;

    setIsActive(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Spawn 70 divine flower petals
    const newPetals: Petal[] = [];
    const types: ('marigold' | 'hibiscus' | 'modak' | 'goldSparkle')[] = [
      'marigold',
      'marigold',
      'hibiscus',
      'hibiscus',
      'goldSparkle',
      'modak',
    ];

    for (let i = 0; i < 70; i++) {
      newPetals.push({
        x: Math.random() * width,
        y: -Math.random() * (height * 0.5) - 20,
        size: Math.random() * 12 + 10,
        speedY: Math.random() * 3.5 + 2.0,
        speedX: (Math.random() - 0.5) * 2.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4,
        type: types[Math.floor(Math.random() * types.length)],
        alpha: 1,
      });
    }

    petalsRef.current = newPetals;

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.alpha;

      if (p.type === 'marigold') {
        // Orange-Yellow Marigold (झेंडू) petal
        ctx.fillStyle = '#ff9f1c';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.45, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd166';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.25, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'hibiscus') {
        // Red Hibiscus (जास्वंद) petal - Lord Ganesha's favorite flower
        ctx.fillStyle = '#e63946';
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.6, p.size * 0.8, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.6, p.size * 0.8, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
        ctx.fill();
      } else if (p.type === 'modak') {
        // Divine Modak silhouette / icon
        ctx.fillStyle = '#fff3b0';
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.8);
        ctx.quadraticCurveTo(p.size * 0.7, p.size * 0.5, 0, p.size * 0.7);
        ctx.quadraticCurveTo(-p.size * 0.7, p.size * 0.5, 0, -p.size * 0.8);
        ctx.fill();
      } else {
        // Golden sparkle
        ctx.fillStyle = '#ffb703';
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      let aliveCount = 0;

      for (let i = 0; i < petalsRef.current.length; i++) {
        const p = petalsRef.current[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.02) * 1.2;
        p.rotation += p.rotationSpeed;

        if (p.y > height - 60) {
          p.alpha -= 0.025;
        }

        if (p.alpha > 0 && p.y <= height + 30) {
          aliveCount++;
          drawPetal(p);
        }
      }

      if (aliveCount > 0) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsActive(false);
      }
    };

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [triggerCount]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
