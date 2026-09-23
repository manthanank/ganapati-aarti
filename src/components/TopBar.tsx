'use client';

import React, { useEffect, useState } from 'react';
import { playTempleBell } from '@/lib/audio-bell';

interface TopBarProps {
  onTriggerFlowerShower: () => void;
}

export default function TopBar({ onTriggerFlowerShower }: TopBarProps) {
  const [time, setTime] = useState('18:00');
  const [devoteeCount, setDevoteeCount] = useState(3842);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);

  // 1. Clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hh}:${mm}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Devotee count realistic subtle fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setDevoteeCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return Math.max(3100, prev + delta);
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // 3. Fullscreen sync
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Fullscreen toggle error:', err);
    }
  };

  const handleRingBell = () => {
    setIsRinging(true);
    playTempleBell();
    setTimeout(() => setIsRinging(false), 800);
  };

  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <div className="festival-badge">
          <span className="modak-icon">🪔</span>
          <span className="festival-text">गणेशोत्सव विशेष</span>
        </div>
        <div className="live-pill" title="Live devotees chanting worldwide">
          <span className="live-dot" />
          <span className="live-count">{devoteeCount.toLocaleString()}</span>
          <span className="live-label">भक्त लीन</span>
        </div>
      </div>

      <div className="top-bar-right">
        {/* Temple Bell Interactive Sound */}
        <button
          className={`action-btn bell-btn ${isRinging ? 'ringing' : ''}`}
          onClick={handleRingBell}
          title="घंटी बजाएं (Ring Temple Bell)"
          aria-label="Ring Temple Bell"
        >
          <span className="btn-icon">🔔</span>
          <span className="btn-text">घंटी बजाएं</span>
        </button>

        {/* Flower / Modak Offering */}
        <button
          className="action-btn flower-btn"
          onClick={onTriggerFlowerShower}
          title="पुष्पवृष्टि करें (Offer Flowers & Modaks)"
          aria-label="Offer Flowers"
        >
          <span className="btn-icon">🌸</span>
          <span className="btn-text">पुष्पवृष्टि</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          className="action-btn icon-only-btn"
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? '✕' : '⛶'}
        </button>

        {/* Clock */}
        <div className="clock-badge" title="Current Time">
          {time}
        </div>
      </div>
    </header>
  );
}
