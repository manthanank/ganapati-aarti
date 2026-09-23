'use client';

import React, { useEffect, useRef } from 'react';

export default function SacredParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedY: number;
      speedX: number;
      color: string;
      pulseSpeed: number;
      angle: number;
    }

    const maxParticles = 45;
    const particles: Particle[] = [];

    // Festive Ganesha colors: Marigold Gold, Sindoor Red, Sacred Amber
    const palette = [
      'rgba(255, 184, 48, ',  // Golden Amber
      'rgba(255, 140, 0, ',   // Deep Saffron
      'rgba(255, 215, 0, ',   // Marigold Bright Gold
      'rgba(230, 57, 70, ',   // Divine Sindoor Vermilion
    ];

    const createParticle = (randomY = false): Particle => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 15,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random() * 0.65 + 0.25,
      speedY: Math.random() * 0.6 + 0.25,
      speedX: (Math.random() - 0.5) * 0.35,
      color: palette[Math.floor(Math.random() * palette.length)],
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + mouseX;
        p.angle += p.pulseSpeed;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.angle));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 184, 48, 0.6)';
        ctx.fill();

        if (p.y < -20 || p.x < -20 || p.x > width + 20) {
          particles[i] = createParticle(false);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas id="particlesCanvas" ref={canvasRef} />;
}
