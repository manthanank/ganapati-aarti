'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AartiItem, AartiStanza } from '@/data/aartis';
import { transliterateDevanagari, SupportedScript } from '@/lib/indic-script';

interface LyricsReaderProps {
  aarti: AartiItem;
}

export default function LyricsReader({ aarti }: LyricsReaderProps) {
  const [selectedScript, setSelectedScript] = useState<SupportedScript>('devanagari');
  const [fontScale, setFontScale] = useState<number>(1.1);
  const [search, setSearch] = useState<string>('');

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Reset scroll and search on aarti change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setSearch('');
  }, [aarti.id]);

  const query = search.toLowerCase().trim();

  const filterStanza = (stanza: AartiStanza) => {
    if (!query) return true;
    const linesJoined = stanza.lines.join(' ').toLowerCase();
    const translitJoined = stanza.translit.join(' ').toLowerCase();

    return linesJoined.includes(query) || translitJoined.includes(query);
  };

  const filteredStanzas = aarti.stanzas.filter(filterStanza);

  const renderScriptLine = (devanagariLine: string, translitLine: string) => {
    if (selectedScript === 'english') {
      return translitLine;
    }
    return transliterateDevanagari(devanagariLine, selectedScript);
  };

  return (
    <section className="lyrics-card-wrapper">
      {/* Aarti Header */}
      <div className="aarti-card-header">
        <div className="aarti-header-top">
          <div className="aarti-title-group">
            <span className="aarti-category-pill">{aarti.category}</span>
            <h1 className="aarti-devanagari-title">{aarti.titleDevanagari}</h1>
            <h2 className="aarti-english-title">{aarti.titleEnglish}</h2>
            <p className="aarti-subtitle-text">{aarti.subtitle} • {aarti.author}</p>
          </div>
        </div>

        {/* Focused Toolbar */}
        <div className="reader-toolbar">
          {/* Script Switcher */}
          <div className="script-tabs-bar" role="tablist" aria-label="Select Script">
            <span className="toolbar-label">लिपि (Script):</span>
            <div className="script-buttons">
              {(
                [
                  { id: 'devanagari', label: 'देवनागरी' },
                  { id: 'english', label: 'English' },
                  { id: 'kannada', label: 'ಕನ್ನಡ' },
                  { id: 'gujarati', label: 'ગુજરાતી' },
                  { id: 'bengali', label: 'বাংলা' },
                  { id: 'telugu', label: 'తెలుగు' },
                ] as { id: SupportedScript; label: string }[]
              ).map((script) => (
                <button
                  key={script.id}
                  className={`script-pill ${selectedScript === script.id ? 'active' : ''}`}
                  onClick={() => setSelectedScript(script.id)}
                  role="tab"
                  aria-selected={selectedScript === script.id}
                >
                  {script.label}
                </button>
              ))}
            </div>
          </div>

          <div className="toolbar-actions-group">
            {/* Font Zoom Adjuster */}
            <div className="font-size-adjuster" title="अक्षर आकार (Font Size)">
              <button
                className="font-btn"
                onClick={() => setFontScale((s) => Math.max(0.9, s - 0.1))}
                disabled={fontScale <= 0.9}
                title="Decrease font size"
              >
                A-
              </button>
              <span className="font-scale-indicator">{Math.round(fontScale * 100)}%</span>
              <button
                className="font-btn"
                onClick={() => setFontScale((s) => Math.min(1.5, s + 0.1))}
                disabled={fontScale >= 1.5}
                title="Increase font size"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Simple Search Bar */}
        <div className="reader-search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder={`पद या शब्द खोजें... (उदा: 'मंगलमूर्ती', 'sindur', 'गजानन')`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="clear-search-btn"
              onClick={() => setSearch('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Pure Lyrics Scrollable Body */}
      <div
        className="lyrics-scrollable-body"
        ref={containerRef}
        style={{ fontSize: `${fontScale}rem` }}
      >
        {filteredStanzas.length === 0 ? (
          <div className="no-matches-card">
            <span className="empty-icon">🪔</span>
            <p>"{search}" से संबंधित कोई पद नहीं मिला।</p>
            <button className="reset-search-btn" onClick={() => setSearch('')}>
              सम्पूर्ण आरती देखें
            </button>
          </div>
        ) : (
          <div className="stanzas-list">
            {filteredStanzas.map((stanza) => (
              <article key={stanza.stanzaNum} className="stanza-card">
                <div className="stanza-card-header">
                  <span className="stanza-number-badge">
                    {stanza.label || `पद ${stanza.stanzaNum}`}
                  </span>
                </div>

                {/* Primary Script Lines */}
                <div className="stanza-primary-lines notranslate" translate="no">
                  {stanza.lines.map((line, lIdx) => (
                    <p key={lIdx} className="stanza-devanagari-line">
                      {renderScriptLine(line, stanza.translit[lIdx] || line)}
                    </p>
                  ))}
                </div>

                {/* Romanized Transliteration */}
                {selectedScript !== 'english' && (
                  <div className="stanza-translit-lines">
                    {stanza.translit.map((tLine, tIdx) => (
                      <p key={tIdx} className="stanza-translit-line">
                        {tLine}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            ))}

            {/* Sacred Closing Jayakara */}
            <div className="jayakara-card">
              <div className="jayakara-om">ॐ गं गणपतये नमः</div>
              <h3 className="jayakara-text">
                ॥ गणपति बप्पा मोरया, मंगलमूर्ति मोरया ॥
              </h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
