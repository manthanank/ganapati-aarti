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
        <div id="lyrics">
          <LyricsReader
            aarti={selectedAarti}
            onChimeBell={handleTriggerFlowers}
          />
        </div>

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
        <p>
          गणेश चतुर्थी (Ganesh Chaturthi) एवं गणेशोत्सव के पावन अवसर पर गाई जाने वाली प्रमुख आरतियां, वंदना,
          मंत्रपुष्पांजली तथा स्तोत्रों का संपूर्ण संग्रह देवनागरी, अंग्रेजी, गुजराती, बांग्ला एवं तेलुगु में।
        </p>

        {GANAPATI_AARTIS_DATA.map((item) => (
          <section key={item.id} id={item.id}>
            <h3>{item.titleDevanagari} ({item.titleEnglish})</h3>
            <p>{item.subtitle} - {item.author}</p>
            <p>{item.context}</p>
            {item.stanzas.map((s) => (
              <div key={s.stanzaNum}>
                <h4>{s.label || `पद ${s.stanzaNum}`}</h4>
                <p>{s.lines.join(' ')}</p>
                <p>{s.translit.join(' ')}</p>
                <p>अर्थ (हिन्दी): {s.meaningHi}</p>
                <p>Meaning (English): {s.meaningEn}</p>
              </div>
            ))}
          </section>
        ))}

        <section>
          <h3>Frequently Asked Questions on Ganesh Aarti (गणपति आरती प्रश्नोत्तरी)</h3>
          <div>
            <h4>गणेश चतुर्थी पर कौन-सी आरतियां गाई जाती हैं?</h4>
            <p>
              गणेशोत्सव में सबसे पहले समर्थ रामदास स्वामी कृत 'सुखकर्ता दुःखहर्ता', उसके बाद 'शेंदूर लाल चढायो',
              'जय गणेश जय गणेश देवा', समाप्ती पर 'घालीन लोटांगण' वंदना और 'मंत्रपुष्पांजली' अर्पित की जाती है।
            </p>
          </div>
          <div>
            <h4>संकटनाशन गणेश स्तोत्र का पाठ करने से क्या लाभ होता है?</h4>
            <p>
              नारद पुराणोक्त संकटनाशन गणेश स्तोत्र में भगवान गणेश के 12 दिव्य नामों का वर्णन है। इसका नित्य पाठ
              करने से सभी प्रकार के संकट, दरिद्रता और भय नष्ट होकर सर्वकार्य सिद्ध होते हैं।
            </p>
          </div>
          <div>
            <h4>श्री गणपती अथर्वशीर्ष का क्या महत्व है?</h4>
            <p>
              अथर्ववेदीय गणपती अथर्वशीर्ष गणेश उपासना का सर्वोच्च वैदिक ग्रंथ है। यह आत्मिक शांति, विद्या, और समस्त
              विघ्नों के नाश के लिए अत्यंत प्रभावशाली माना गया है।
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
