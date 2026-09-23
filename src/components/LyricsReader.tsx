'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AartiItem, AartiStanza } from '@/data/aartis';
import { transliterateDevanagari, SupportedScript } from '@/lib/indic-script';
import { playTempleBell } from '@/lib/audio-bell';

interface LyricsReaderProps {
  aarti: AartiItem;
  onChimeBell?: () => void;
}

export default function LyricsReader({ aarti, onChimeBell }: LyricsReaderProps) {
  const [selectedScript, setSelectedScript] = useState<SupportedScript>('devanagari');
  const [fontScale, setFontScale] = useState<number>(1.05);
  const [search, setSearch] = useState<string>('');
  const [showMeanings, setShowMeanings] = useState<boolean>(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false);
  const [scrollSpeed, setScrollSpeed] = useState<number>(1); // 1x, 1.5x, 2x
  const [activeStanzaIdx, setActiveStanzaIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoScrollTimerRef = useRef<number | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    if (!isAutoScrolling) {
      if (autoScrollTimerRef.current) cancelAnimationFrame(autoScrollTimerRef.current);
      return;
    }

    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let lastTimestamp = performance.now();

    const step = (timestamp: number) => {
      const elapsed = timestamp - lastTimestamp;
      if (elapsed >= 30) {
        lastTimestamp = timestamp;
        if (scrollContainer) {
          const pixelsPerSec = scrollSpeed === 1 ? 28 : scrollSpeed === 1.5 ? 42 : 60;
          scrollContainer.scrollTop += (pixelsPerSec * elapsed) / 1000;

          // Check if reached bottom
          if (
            scrollContainer.scrollTop + scrollContainer.clientHeight >=
            scrollContainer.scrollHeight - 5
          ) {
            setIsAutoScrolling(false);
            return;
          }
        }
      }
      autoScrollTimerRef.current = requestAnimationFrame(step);
    };

    autoScrollTimerRef.current = requestAnimationFrame(step);

    return () => {
      if (autoScrollTimerRef.current) cancelAnimationFrame(autoScrollTimerRef.current);
    };
  }, [isAutoScrolling, scrollSpeed]);

  // Reset scroll and search on aarti change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setSearch('');
    setIsAutoScrolling(false);
    setActiveStanzaIdx(null);
  }, [aarti.id]);

  const query = search.toLowerCase().trim();

  const filterStanza = (stanza: AartiStanza) => {
    if (!query) return true;
    const linesJoined = stanza.lines.join(' ').toLowerCase();
    const translitJoined = stanza.translit.join(' ').toLowerCase();
    const meaningEn = stanza.meaningEn.toLowerCase();
    const meaningHi = stanza.meaningHi.toLowerCase();

    return (
      linesJoined.includes(query) ||
      translitJoined.includes(query) ||
      meaningEn.includes(query) ||
      meaningHi.includes(query)
    );
  };

  const filteredStanzas = aarti.stanzas.filter(filterStanza);

  const renderScriptLine = (devanagariLine: string, translitLine: string) => {
    if (selectedScript === 'english') {
      return translitLine;
    }
    return transliterateDevanagari(devanagariLine, selectedScript);
  };

  const handleChimeStanza = (idx: number) => {
    setActiveStanzaIdx(idx);
    playTempleBell();
    if (onChimeBell) onChimeBell();
    setTimeout(() => setActiveStanzaIdx(null), 1200);
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

        {/* Global Toolbar */}
        <div className="reader-toolbar">
          {/* Script Switcher */}
          <div className="script-tabs-bar" role="tablist" aria-label="Select Script">
            <span className="toolbar-label">लिपि (Script):</span>
            <div className="script-buttons">
              {(
                [
                  { id: 'devanagari', label: 'देवनागरी' },
                  { id: 'english', label: 'English' },
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
                onClick={() => setFontScale((s) => Math.max(0.85, s - 0.1))}
                disabled={fontScale <= 0.85}
                title="Decrease font size"
              >
                A-
              </button>
              <span className="font-scale-indicator">{Math.round(fontScale * 100)}%</span>
              <button
                className="font-btn"
                onClick={() => setFontScale((s) => Math.min(1.45, s + 0.1))}
                disabled={fontScale >= 1.45}
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Meaning Toggle */}
            <button
              className={`toolbar-btn ${showMeanings ? 'active' : ''}`}
              onClick={() => setShowMeanings(!showMeanings)}
              title="भावार्थ देखें / छिपाएं"
            >
              📖 <span className="btn-label">{showMeanings ? 'अर्थ सहित' : 'केवल पद'}</span>
            </button>

            {/* Auto-Scroll / Chant Mode Toggle */}
            <div className="autoscroll-control-group">
              <button
                className={`toolbar-btn scroll-btn ${isAutoScrolling ? 'active-pulse' : ''}`}
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                title="हाथ-मुक्त पाठ मोड (Hands-free Auto-Scroll)"
              >
                {isAutoScrolling ? '⏸ पाठ विराम' : '▶ स्वर-पाठ (Auto-Scroll)'}
              </button>

              {isAutoScrolling && (
                <div className="speed-pills">
                  {([1, 1.5, 2] as const).map((spd) => (
                    <button
                      key={spd}
                      className={`speed-pill ${scrollSpeed === spd ? 'active' : ''}`}
                      onClick={() => setScrollSpeed(spd)}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
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

      {/* Lyrics Scrollable Body */}
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
            {filteredStanzas.map((stanza, idx) => {
              const isChimed = activeStanzaIdx === idx;
              return (
                <article
                  key={stanza.stanzaNum}
                  className={`stanza-card ${isChimed ? 'stanza-highlight' : ''}`}
                >
                  <div className="stanza-card-header">
                    <span className="stanza-number-badge">
                      {stanza.label || `पद ${stanza.stanzaNum}`}
                    </span>
                    <button
                      className="chime-stanza-btn"
                      onClick={() => handleChimeStanza(idx)}
                      title="इस पद पर घंटी बजाएं (Ring Bell for this verse)"
                    >
                      🔔 घंटी
                    </button>
                  </div>

                  {/* Primary Script Lines */}
                  <div className="stanza-primary-lines notranslate" translate="no">
                    {stanza.lines.map((line, lIdx) => (
                      <p key={lIdx} className="stanza-devanagari-line">
                        {renderScriptLine(line, stanza.translit[lIdx] || line)}
                      </p>
                    ))}
                  </div>

                  {/* Romanized Transliteration (if in non-english script mode) */}
                  {selectedScript !== 'english' && (
                    <div className="stanza-translit-lines">
                      {stanza.translit.map((tLine, tIdx) => (
                        <p key={tIdx} className="stanza-translit-line">
                          {tLine}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Meanings / Commentary */}
                  {showMeanings && (
                    <div className="stanza-meaning-box">
                      <div className="meaning-hindi">
                        <span className="meaning-tag">सरल अर्थ (हिन्दी):</span>
                        <p>{stanza.meaningHi}</p>
                      </div>
                      <div className="meaning-english">
                        <span className="meaning-tag">English Meaning:</span>
                        <p>{stanza.meaningEn}</p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}

            {/* Sacred Closing Jayakara Card */}
            <div className="jayakara-card">
              <div className="jayakara-om">ॐ गं गणपतये नमः</div>
              <h3 className="jayakara-text">
                ॥ गणपति बप्पा मोरया, मंगलमूर्ति मोरया ॥
              </h3>
              <p className="jayakara-sub">
                अनंत चतुर्दशीच्या व गणेशोत्सवाच्या हार्दिक शुभेच्छा!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
