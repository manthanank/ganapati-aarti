'use client';

import React, { useEffect, useState } from 'react';

export default function TopBar() {
  const [time, setTime] = useState('18:00');
  const [devoteeCount, setDevoteeCount] = useState(3842);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // 2. Devotee count subtle fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setDevoteeCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
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
