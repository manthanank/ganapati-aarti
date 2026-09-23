'use client';

import React from 'react';
import { GANAPATI_AARTIS_DATA, AartiItem } from '@/data/aartis';

interface AartiSelectorProps {
  selectedAartiId: string;
  onSelectAarti: (aarti: AartiItem) => void;
}

export default function AartiSelector({
  selectedAartiId,
  onSelectAarti,
}: AartiSelectorProps) {
  return (
    <nav className="aarti-selector-container" aria-label="Ganapati Aartis and Stotras Navigation">
      <div className="aarti-scroll-track">
        {GANAPATI_AARTIS_DATA.map((item) => {
          const isSelected = item.id === selectedAartiId;
          return (
            <button
              key={item.id}
              className={`aarti-pill-btn ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectAarti(item)}
              aria-selected={isSelected}
              role="tab"
            >
              <span className="pill-badge">{item.category}</span>
              <span className="pill-title">{item.titleDevanagari}</span>
              <span className="pill-subtitle">{item.titleEnglish}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
