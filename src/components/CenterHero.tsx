'use client';

import React from 'react';

interface CenterHeroProps {
  onScrollToLyrics?: () => void;
  onRingBell?: () => void;
}

export default function CenterHero({ onScrollToLyrics, onRingBell }: CenterHeroProps) {
  return (
    <div className="hero-section">
      <div className="shloka-banner">
        <span className="shloka-symbol">ॐ</span>
        <p className="shloka-text">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
      </div>

      <div className="hero-main-group">
        <div className="hero-deity-title-wrapper">
          <span className="hero-om-badge">श्री गणेशाय नमः</span>
          <h1 className="hero-main-title notranslate" translate="no">
            गणपति आरती संग्रह
          </h1>
          <div className="hero-subtitle-english">
            SHREE GANAPATI AARTI COLLECTION
          </div>
        </div>

        <p className="hero-description">
          गणेशोत्सवाच्या पवित्र पर्वावर सुखकर्ता दुःखहर्ता, शेंदूर लाल चढायो, जय गणेश देवा, घालीन लोटांगण आणि संपूर्ण गणेश स्तोत्र-अथर्वशीर्षाचे शुद्ध, भावपूर्ण पाठ.
        </p>
      </div>
    </div>
  );
}
