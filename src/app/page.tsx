'use client';

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import CenterHero from '@/components/CenterHero';
import AartiSelector from '@/components/AartiSelector';
import LyricsReader from '@/components/LyricsReader';
import SacredParticles from '@/components/SacredParticles';
import FlowerShower from '@/components/FlowerShower';
import { GANAPATI_AARTIS_DATA, AartiItem } from '@/data/aartis';

export default function Home() {
  const [selectedAarti, setSelectedAarti] = useState<AartiItem>(GANAPATI_AARTIS_DATA[0]);
  const [flowerShowerCount, setFlowerShowerCount] = useState<number>(0);

  const handleTriggerFlowers = () => {
    setFlowerShowerCount((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      {/* Background Scenic Artwork */}
      <div className="background-wrapper">
        <img
          src="/assets/images/background.jpg"
          alt="Lord Ganesha Ganapati Bappa celebrating Ganesh Chaturthi"
          className="background-image"
        />
        <div className="background-overlay" />
      </div>

      {/* Floating Canvas Particles */}
      <SacredParticles />

      {/* Interactive Celebratory Flower Shower */}
      <FlowerShower triggerCount={flowerShowerCount} />

      {/* Pinned Top Bar */}
      <TopBar onTriggerFlowerShower={handleTriggerFlowers} />

      {/* Main Content Area */}
      <main className="content-container">
        {/* Divine Center Hero */}
        <CenterHero />

        {/* Aarti Navigation Pills */}
        <AartiSelector
          selectedAartiId={selectedAarti.id}
          onSelectAarti={(aarti) => setSelectedAarti(aarti)}
        />

        {/* Comprehensive Lyrics Reader */}
        <LyricsReader
          aarti={selectedAarti}
          onChimeBell={handleTriggerFlowers}
        />

        {/* Footer */}
        <footer className="app-footer">
          <p>
            ॥ ॐ गं गणपतये नमः ॥ <span className="footer-highlight">गणेश चतुर्थीच्या मंगलमय शुभेच्छा</span>
          </p>
          <p>Made with devotion for Ganapati Bappa devotees worldwide.</p>
        </footer>
      </main>

      {/* Complete Crawler & Screen-Reader Accessible Text for SEO */}
      <article className="sr-only" aria-label="सम्पूर्ण गणपति आरती व स्तोत्र संग्रह">
        <h2>सम्पूर्ण श्री गणपति आरती संग्रह (Ganesh Chaturthi Special)</h2>
        {GANAPATI_AARTIS_DATA.map((item) => (
          <section key={item.id}>
            <h3>{item.titleDevanagari} ({item.titleEnglish})</h3>
            <p>{item.subtitle} - {item.author}</p>
            <p>{item.context}</p>
            {item.stanzas.map((s) => (
              <div key={s.stanzaNum}>
                <h4>{s.label || `पद ${s.stanzaNum}`}</h4>
                <p>{s.lines.join(' ')}</p>
                <p>{s.translit.join(' ')}</p>
                <p>अर्थ: {s.meaningHi}</p>
                <p>Meaning: {s.meaningEn}</p>
              </div>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
