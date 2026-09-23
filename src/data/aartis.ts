export interface AartiStanza {
  stanzaNum: number;
  label?: string;
  lines: string[];
  translit: string[];
  meaningEn: string;
  meaningHi: string;
}

export interface AartiItem {
  id: string;
  titleDevanagari: string;
  titleEnglish: string;
  subtitle: string;
  category: 'आरती' | 'वंदना' | 'मंत्रपुष्पांजली' | 'स्तोत्रम्' | 'अथर्वशीर्ष';
  author: string;
  context: string;
  stanzas: AartiStanza[];
}

export const GANAPATI_AARTIS_DATA: AartiItem[] = [
  {
    id: 'sukhkarta-dukhharta',
    titleDevanagari: 'सुखकर्ता दुःखहर्ता',
    titleEnglish: 'Sukh Karta Dukh Harta',
    subtitle: 'पारंपरिक मराठी श्री गणेश आरती',
    category: 'आरती',
    author: 'समर्थ रामदास स्वामी (Samarth Ramdas Swami)',
    context: 'The quintessential Ganapati Aarti composed in 17th century Maharashtra by Samarth Ramdas Swami at Mayureshwar temple, Morgaon.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'ध्रुवपद / मुखड़ा (Refrain)',
        lines: [
          'सुखकर्ता दुःखहर्ता वार्ता विघ्नाची ।',
          'नुरवी पुरवी प्रेम कृपा जयाची ।',
          'सर्वांगी सुंदर उटी शेंदुराची ।',
          'कंठी झळके माळ मुक्ताफळांची ॥ १ ॥',
          'जय देव जय देव जय मंगलमूर्ती ।',
          'दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥',
        ],
        translit: [
          'Sukha-kartā duhkha-hartā vārtā vighnāchī |',
          'Nuravī puravī prema kripā jayāchī |',
          'Sarvāngī sundara utī shendurāchī |',
          'Kanthī jhalake māla muktāphalānchī || 1 ||',
          'Jaya deva jaya deva jaya mangala-mūrtī |',
          'Darshana-mātre mana-kāmanā puratī || Dhr. ||',
        ],
        meaningEn:
          'O Lord, you are the bestowal of joy, the remover of all sorrow, who clears every obstacle away. You shower divine love and infinite grace upon your devotees. Your auspicious form is adorned with fragrant red sindoor paste, and around your neck gleams a divine garland of radiant pearls. Victory to you, O auspicious Lord! Mere glimpse of your holy form fulfills all righteous desires.',
        meaningHi:
          'सुख प्रदान करने वाले, दुःखों का हरण करने वाले तथा विघ्नों का नाश करने वाले हे गणपति बाप्पा! आपकी असीम कृपा से प्रेम का संचार होता है। आपके सर्वांग पर सिंदूर की सुंदर लेप सुशोभित है और कंठ में मोतियों की भव्य माला चमक रही है। हे मंगलमूर्ति! आपकी जय हो, आपके दर्शन मात्र से मन की सारी मनोकामनाएं पूर्ण हो जाती हैं।',
      },
      {
        stanzaNum: 2,
        label: 'चरण १ (Verse 1)',
        lines: [
          'रत्नखचित फरा तुज गौरीकुमरा ।',
          'चंदनाची उटी कुंकुमकेशरा ।',
          'हिरेजडित मुकुट शोभतो बरा ।',
          'रुणझुणती नूपुरे चरणी घागरिया ॥ २ ॥',
          'जय देव जय देव जय मंगलमूर्ती ।',
          'दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥',
        ],
        translit: [
          'Ratna-khachita pharā tuja Gaurī-kumarā |',
          'Chandanāchī utī kumkuma-kesharā |',
          'Hīre-jadita mukuta shobhato barā |',
          'Runa-jhunatī nūpure charanī ghāgariyā || 2 ||',
          'Jaya deva jaya deva jaya mangala-mūrtī |',
          'Darshana-mātre mana-kāmanā puratī || Dhr. ||',
        ],
        meaningEn:
          'O darling son of Mother Gauri! You sit majestically upon a jewel-studded golden throne. Fragrant sandalwood paste enriched with auspicious vermilion and saffron adorns you. A glorious crown studded with dazzling diamonds rests on your head, while golden anklets chime melodiously at your holy feet.',
        meaningHi:
          'हे माता पार्वती के लाडले पुत्र! आप रत्नजड़ित दिव्य आसन पर विराजमान हैं। आपके मस्तक व अंगों पर चंदन, कुमकुम और केसर का सुगंधित तिलक है। आपके सिर पर हीरों से जड़ा मुकुट अत्यंत शोभायमान है और आपके पवित्र चरणों में नूपुर रुनझुन की मधुर ध्वनि कर रहे हैं।',
      },
      {
        stanzaNum: 3,
        label: 'चरण २ (Verse 2)',
        lines: [
          'लंबोदर पीतांबर फणिवरबंधना ।',
          'सरळ सोंड वक्रतुंड त्रिनयना ।',
          'दास रामाचा वाट पाहे सदना ।',
          'संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥ ३ ॥',
          'जय देव जय देव जय मंगलमूर्ती ।',
          'दर्शनमात्रे मनकामना पुरती ॥ धृ. ॥',
        ],
        translit: [
          'Lambodara pītāmbara phanivara-bandhanā |',
          'Sarala sonda vakratunda tri-nayanā |',
          'Dāsa Rāmāchā vāta pāhe sadanā |',
          'Sankatī pāvāve nirvānī rakshāve suravara-vandanā || 3 ||',
          'Jaya deva jaya deva jaya mangala-mūrtī |',
          'Darshana-mātre mana-kāmanā puratī || Dhr. ||',
        ],
        meaningEn:
          'You possess a generous belly (Lambodara), wear sacred yellow silk garments (Pitambar), and have the king of serpents coiled around your waist. You possess a graceful trunk, curved tusk, and three all-seeing divine eyes. Your humble servant awaits your divine arrival at home. Protect us from every calamity and preserve our soul at the final hour, O Lord worshipped by all gods!',
        meaningHi:
          'हे लंबोदर! आप पीतांबर धारण किए हुए हैं और शेषनाग आपकी कमर में बंधा है। आपकी सरल-वक्र सूंड़ और तीन दिव्य नेत्र अत्यंत मनमोहक हैं। आपके दास आपके आगमन की प्रतीक्षा कर रहे हैं। हे सुर-मुनियों द्वारा पूजित प्रभु! संकट के समय हमारी रक्षा करें और जीवन-मुक्ति प्रदान करें।',
      },
    ],
  },
  {
    id: 'shendur-lal-chadhayo',
    titleDevanagari: 'शेंदूर लाल चढायो',
    titleEnglish: 'Shendur Lal Chadhayo',
    subtitle: 'आरती श्री गणेशाची (सिंदूर लाल चढायो)',
    category: 'आरती',
    author: 'पारंपरिक (Traditional)',
    context: 'Beloved devotional Ganesh Aarti sung across Maharashtra and India celebrating Gajanana’s majestic elephant form and sidhis.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'पद १ (Verse 1)',
        lines: [
          'शेंदूर लाल चढायो अच्छा गजमुखको ।',
          'दोंदिल लाल बिराजे सुत गौरीहरको ।',
          'हाथ लिये गुडलड्डू सांई सुरवरको ।',
          'महिमा कहे न जाय लागत अति सुखको ॥ १ ॥',
          'जय जय जी गणराज विद्यासुखदाता ।',
          'धन्य तुम्हारो दर्शन मेरा मन रमता ॥ धृ. ॥',
        ],
        translit: [
          'Shendūra lāla chadhāyo achchhā gajamukhako |',
          'Dondila lāla birāje suta Gaurīharako |',
          'Hātha liye guda-laddū sāī̃ suravarako |',
          'Mahimā kahe na jāya lāgata ati sukhako || 1 ||',
          'Jaya jaya jī Ganarāja vidyā-sukhadātā |',
          'Dhanya tumhāro darshana merā mana ramatā || Dhr. ||',
        ],
        meaningEn:
          'Bright red sindoor paste is affectionately applied to the magnificent face of the elephant-faced Lord. The cherubic son of Gauri and Shiva sits gloriously with his rounded potbelly. In his sacred hand, he holds delicious jaggery laddus. His divine glory is beyond human words, bestowing supreme bliss on all devotees.',
        meaningHi:
          'गजानन के मुखारविंद पर लाल सिंदूर अत्यंत सुंदर लग रहा है। माता पार्वती और भगवान शिव के लाडले पुत्र का स्वरूप अति भव्य है। उनके करकमलों में गुड़ के स्वादिष्ट मोदक-लड्डू शोभा पा रहे हैं। आपकी महिमा अकथनीय है और अपार आनंद प्रदान करने वाली है। हे विद्या और सुख के दाता गणराज, आपकी जय हो!',
      },
      {
        stanzaNum: 2,
        label: 'पद २ (Verse 2)',
        lines: [
          'अष्टौ सिद्धि दासी संकटको बैरी ।',
          'विघ्नविनाशन मंगल मूरत अधिकारी ।',
          'कोटि सूरज प्रकाश ऐसी छबि तेरी ।',
          'गंडस्थल मदमस्तक झूले शशिबिहारी ॥ २ ॥',
          'जय जय जी गणराज विद्यासुखदाता ।',
          'धन्य तुम्हारो दर्शन मेरा मन रमता ॥ धृ. ॥',
        ],
        translit: [
          'Ashtau siddhi dāsī sankatako bairī |',
          'Vighna-vināshana mangala mūrata adhikārī |',
          'Koti sūraja prakāsha aisī chhabi terī |',
          'Gandasthala madamastaka jhūle shashibihārī || 2 ||',
          'Jaya jaya jī Ganarāja vidyā-sukhadātā |',
          'Dhanya tumhāro darshana merā mana ramatā || Dhr. ||',
        ],
        meaningEn:
          'The eight great mystic siddhis serve at your command, and you are the fierce destroyer of all troubles. You are the sole sovereign who wipes out all obstacles and embodies auspiciousness. Your divine countenance radiates with the brilliance of ten million suns, while the serene moon adorns your forehead.',
        meaningHi:
          'आठों सिद्धियां आपकी दासी हैं और आप संकटों का समूल नाश करने वाले हैं। आप समस्त विघ्नों को हरने वाली मंगलमूर्ति हैं। आपका तेज करोड़ों सूर्यों के समान देदीप्यमान है और आपके भाल पर बालचंद्र सुशोभित हैं।',
      },
      {
        stanzaNum: 3,
        label: 'पद ३ (Verse 3)',
        lines: [
          'भावभगत से कोई शरणागत आवे ।',
          'संतत संपत सबही भरपूर पावे ।',
          'ऐसे तुम महाराज मोको अति भावे ।',
          'गोसावीनंदन निशिदिन गुण गावे ॥ ३ ॥',
          'जय जय जी गणराज विद्यासुखदाता ।',
          'धन्य तुम्हारो दर्शन मेरा मन रमता ॥ धृ. ॥',
        ],
        translit: [
          'Bhāva-bhagata se koī sharanāgata āve |',
          'Santata sampata sabahī bharapūra pāve |',
          'Aise tuma mahārāja moko ati bhāve |',
          'Gosāvīnandana nishidina guna gāve || 3 ||',
          'Jaya jaya jī Ganarāja vidyā-sukhadātā |',
          'Dhanya tumhāro darshana merā mana ramatā || Dhr. ||',
        ],
        meaningEn:
          'Whosoever surrenders unto you with pure devotion and loving surrender receives boundless prosperity, wisdom, and virtuous progeny. Such a benevolent Lord are you! Your loving devotees sing your divine praises day and night.',
        meaningHi:
          'सच्चे भाव और भक्ति से जो भी आपकी शरण में आता है, वह संतान, सुख और अखंड समृद्धि प्राप्त करता है। हे महाराज! आपका ऐसा कृपालु रूप मेरे हृदय को अत्यंत प्रिय है। आपके भक्त निरंतर आपके पावन गुणों का गान करते हैं।',
      },
    ],
  },
  {
    id: 'jai-ganesh-deva',
    titleDevanagari: 'जय गणेश जय गणेश देवा',
    titleEnglish: 'Jai Ganesh Deva',
    subtitle: 'पारंपरिक हिन्दी श्री गणेश आरती',
    category: 'आरती',
    author: 'पारंपरिक (Traditional Hindi)',
    context: 'The widely chanted Hindi Ganesh Aarti across North India, sung in temples and households during Ganesh Utsav and Diwali.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'ध्रुवपद (Refrain)',
        lines: [
          'जय गणेश जय गणेश जय गणेश देवा ।',
          'माता जाकी पार्वती पिता महादेवा ॥ धृ. ॥',
        ],
        translit: [
          'Jaya Ganesha jaya Ganesha jaya Ganesha devā |',
          'Mātā jākī Pārvatī pitā Mahādevā || Dhr. ||',
        ],
        meaningEn:
          'Glory to Lord Ganesha, victory to the supreme Deva! Whose divine mother is Goddess Parvati and whose venerable father is Lord Shiva Mahadeva.',
        meaningHi:
          'भगवान गणेश की जय हो, जय हो! जिनकी माता साक्षात जगदंबा पार्वती हैं और पिता देवाधिदेव महादेव शिव हैं।',
      },
      {
        stanzaNum: 2,
        label: 'पद १ (Verse 1)',
        lines: [
          'एक दन्त दयावन्त चार भुजाधारी ।',
          'माथे पर तिलक सोहे मूसे की सवारी ।',
          'पान चढ़े फूल चढ़े और चढ़े मेवा ।',
          'लड्डुअन का भोग लगे संत करें सेवा ॥ १ ॥',
          'जय गणेश जय गणेश जय गणेश देवा ।',
          'माता जाकी पार्वती पिता महादेवा ॥ धृ. ॥',
        ],
        translit: [
          'Eka danta dayāvanta chāra bhujādhārī |',
          'Māthe para tilaka sohe mūse kī savārī |',
          'Pāna chadhe phūla chadhe aura chadhe mevā |',
          'Ladduana kā bhoga lage santa karẽ sevā || 1 ||',
          'Jaya Ganesha jaya Ganesha jaya Ganesha devā |',
          'Mātā jākī Pārvatī pitā Mahādevā || Dhr. ||',
        ],
        meaningEn:
          'You have a single tusk, an ocean of compassion, and four divine arms holding sacred emblems. An auspicious vermilion tilak adorns your forehead, and your vehicle is the mouse. Devotees offer betel leaves, fresh flowers, dry fruits, and sweet laddus, while sages and saints joyfully serve your lotus feet.',
        meaningHi:
          'हे एकदंत, दयालु प्रभु! आप चार भुजाओं वाले हैं, मस्तक पर दिव्य सिंदूर का तिलक सुशोभित है और आपकी सवारी मूषकराज हैं। आपको पान, ताजे पुष्प और मेवे अर्पित किए जाते हैं तथा मोदक-लड्डुओं का भोग लगाकर संत-भक्त आपकी सेवा करते हैं।',
      },
      {
        stanzaNum: 3,
        label: 'पद २ (Verse 2)',
        lines: [
          'अंधे को आंख देत कोढ़िन को काया ।',
          'बांझन को पुत्र देत निर्धन को माया ।',
          '‘सूर’ श्याम शरण आए सफल कीजे सेवा ॥ २ ॥',
          'दीनन की लाज राखो शंभु-सुत वारी ।',
          'कामना को पूर्ण करो जाऊं बलिहारी ॥ ३ ॥',
          'जय गणेश जय गणेश जय गणेश देवा ।',
          'माता जाकी पार्वती पिता महादेवा ॥ धृ. ॥',
        ],
        translit: [
          'Andhe ko ā̃nkha deta kodhina ko kāyā |',
          'Bā̃njhana ko putra deta nirdhana ko māyā |',
          '‘Sūra’ Shyāma sharana āe saphala kīje sevā || 2 ||',
          'Dīnana kī lāja rākho Shambhu-suta vārī |',
          'Kāmanā ko pūrna karo jāū̃ balihārī || 3 ||',
          'Jaya Ganesha jaya Ganesha jaya Ganesha devā |',
          'Mātā jākī Pārvatī pitā Mahādevā || Dhr. ||',
        ],
        meaningEn:
          'You grant sight to the blind, restore health and radiant skin to the afflicted, bless the childless with children, and bestow prosperity upon the impoverished. We have surrendered at your divine refuge, make our humble devotion fruitful! Protect the dignity of the humble, O son of Shambhu, fulfill all righteous prayers.',
        meaningHi:
          'आप नेत्रहीनों को दृष्टि देते हैं, रोगियों को स्वस्थ काया प्रदान करते हैं, निःसंतान को संतान और निर्धनों को वैभव प्रदान करते हैं। हम आपकी पावन शरण में आए हैं, हमारी सेवा को सफल कीजिए। हे शंभुपुत्र! दीनों की लाज रखिए और हमारी मंगल कामनाओं को पूर्ण कीजिए।',
      },
    ],
  },
  {
    id: 'ghalin-lotangan',
    titleDevanagari: 'घालीन लोटांगण',
    titleEnglish: 'Ghalin Lotangan',
    subtitle: 'आरती समाप्ती वंदना (प्रार्थना)',
    category: 'वंदना',
    author: 'संत नामदेव व पारंपरिक (Sant Namdev & Traditional)',
    context: 'Traditional Marathi post-Aarti submission and prostration prayer recited immediately after Ganapati Aarti in every Ganeshotsav puja.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'चरण १ (Sant Namdev)',
        lines: [
          'घालीन लोटांगण वंदीन चरण ।',
          'डोळ्यांनी पाहीन रूप तुझें ।',
          'प्रेमें आलिंगन आनंदें पूजिन ।',
          'भावें ओवाळीन म्हणे नामा ॥ १ ॥',
        ],
        translit: [
          'Ghālīna lotāngana vandīna charana |',
          'Dolyānnī pāhīna rūpa tujhẽ |',
          'Premẽ ālingana ānandẽ pūjina |',
          'Bhāvẽ ovālīna mhane Nāmā || 1 ||',
        ],
        meaningEn:
          'I prostrate myself completely on the ground in humble surrender, bowing at your holy feet. With my own eyes I shall gaze upon your enchanting divine form. With boundless love I shall embrace your lotus feet, with joy I shall worship you, and with pure emotion I shall wave the sacred Aarti lamp, so says Saint Namdev.',
        meaningHi:
          'मैं धरती पर दंडवत लोटपोट होकर आपके चरणों में वंदना करता हूँ। अपनी आंखों से आपके मनोहारी रूप का दर्शन करता हूँ। अत्यंत प्रेम से आपका आलिंगन कर आनंदपूर्वक आपकी पूजा करूंगा और भक्तिभाव से आपकी आरती उतारूंगा - ऐसा संत नामदेव कहते हैं।',
      },
      {
        stanzaNum: 2,
        label: 'चरण २ (त्वमेव माता)',
        lines: [
          'त्वमेव माता च पिता त्वमेव ।',
          'त्वमेव बन्धुश्च सखा त्वमेव ।',
          'त्वमेव विद्या द्रविणं त्वमेव ।',
          'त्वमेव सर्वं मम देव देव ॥ २ ॥',
        ],
        translit: [
          'Tvameva mātā cha pitā tvameva |',
          'Tvameva bandhushcha sakhā tvameva |',
          'Tvameva vidyā dravinam tvameva |',
          'Tvameva sarvam mama deva deva || 2 ||',
        ],
        meaningEn:
          'You alone are my Mother, and you alone are my Father. You alone are my Kin, and you alone are my Friend. You alone are my Knowledge, and you alone are my true Wealth. You are my all-in-all, O Supreme God of gods!',
        meaningHi:
          'हे प्रभु! आप ही मेरी माता हैं और आप ही मेरे पिता हैं। आप ही मेरे बंधु-सखा हैं। आप ही मेरी सच्ची विद्या हैं और आप ही मेरा वास्तविक धन हैं। हे देवाधिदेव! आप ही मेरा सर्वस्व हैं।',
      },
      {
        stanzaNum: 3,
        label: 'चरण ३ (कायेन वाचा)',
        lines: [
          'कायेन वाचा मनसेंद्रियैर्वा ।',
          'बुद्ध्यात्मना वा प्रकृतिस्वभावात् ।',
          'करोमि यद्यत् सकलं परस्मै ।',
          'नारायणायेति समर्पयामि ॥ ३ ॥',
        ],
        translit: [
          'Kāyena vāchā manasendriyairvā |',
          'Buddhyātmanā vā prakriti-svabhāvāt |',
          'Karomi yadyat sakalam parasmai |',
          'Nārāyanāyeti samarpayāmi || 3 ||',
        ],
        meaningEn:
          'Whatever actions I perform with my physical body, speech, mind, senses, intellect, soul, or natural inborn temperament, I surrender it all at the lotus feet of the Supreme Divine Lord Narayana.',
        meaningHi:
          'शरीर से, वाणी से, मन से, इंद्रियों से, बुद्धि से, आत्मा से अथवा स्वभाववश मैं जो कुछ भी कर्म करता हूँ, वह सब परम प्रभु श्री नारायण के चरणों में समर्पित करता हूँ।',
      },
      {
        stanzaNum: 4,
        label: 'चरण ४ (अच्युतं केशवं)',
        lines: [
          'अच्युतं केशवं रामनारायणं ।',
          'कृष्णदामोदरं वासुदेवं हरिम् ।',
          'श्रीधरं माधवं गोपिकावल्लभं ।',
          'जानकीनायकं रामचंद्रं भजे ॥ ४ ॥',
          'हरे राम हरे राम राम राम हरे हरे ।',
          'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ॥ ५ ॥',
        ],
        translit: [
          'Achyutam keshavam Rāma-Nārāyanam |',
          'Krishna-dāmodaram Vāsudevam Harim |',
          'Shrīdharam Mādhavam Gopikā-vallabham |',
          'Jānakī-nāyakam Rāmachandram bhaje || 4 ||',
          'Hare Rāma Hare Rāma Rāma Rāma Hare Hare |',
          'Hare Krishna Hare Krishna Krishna Krishna Hare Hare || 5 ||',
        ],
        meaningEn:
          'I worship the imperishable Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari, Shridhara, Madhava, Beloved of the Gopis, and Lord Ramachandra, the consort of Janaki. Hare Rama Hare Rama, Rama Rama Hare Hare, Hare Krishna Hare Krishna, Krishna Krishna Hare Hare.',
        meaningHi:
          'मैं अच्युत, केशव, राम-नारायण, कृष्ण-दामोदर, वासुदेव, हरि, श्रीधर, माधव, गोपिकावल्लभ तथा जानकीनाथ श्रीराम की आराधना करता हूँ। हरे राम हरे राम, राम राम हरे हरे । हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे ॥',
      },
    ],
  },
  {
    id: 'mantra-pushpanjali',
    titleDevanagari: 'मंत्रपुष्पांजली',
    titleEnglish: 'Mantra Pushpanjali',
    subtitle: 'ॐ यज्ञेन यज्ञमयजन्त देवाः (सामूहिक पुष्पांजली)',
    category: 'मंत्रपुष्पांजली',
    author: 'ऋग्वेद / यजुर्वेद (Vedic Suktas)',
    context: 'The grand concluding Vedic prayer chanted while holding fragrant flowers in both palms, offering them collectively at Ganapati Bappa’s feet.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'ऋचा १ (यज्ञेन यज्ञमयजन्त)',
        lines: [
          'ॐ यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।',
          'ते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥ १ ॥',
        ],
        translit: [
          'Om yajnena yajnam-ayajanta devās-tāni dharmāni prathamānyāsan |',
          'Te ha nākam mahimānah sachanta yatra pūrve sādhyāh santi devāh || 1 ||',
        ],
        meaningEn:
          'By means of sacrifice, the gods performed sacred sacrifice. These were the primary foundational laws of cosmic righteousness. Those exalted divine souls ascended unto the highest heavenly realms, where dwell the primordial deities and ancient perfected sages.',
        meaningHi:
          'देवताओं ने यज्ञ द्वारा यज्ञस्वरूप परमेश्वर का पूजन किया। वे धर्म के प्रथम सनातन नियम बने। वे महात्मा उस परम आनंदमय स्वर्ग को प्राप्त हुए, जहां पूर्वकाल के सिद्ध देवगण निवास करते हैं।',
      },
      {
        stanzaNum: 2,
        label: 'ऋचा २ (राजाधिराजाय)',
        lines: [
          'ॐ राजाधिराजाय प्रसह्यसाहिने नमो वयं वैश्रवणाय कुर्महे ।',
          'स मे कामान् कामकामाय मह्यं कामेश्वरो वैश्रवणो ददातु ।',
          'कुबेराय वैश्रवणाय महाराजाय नमः ॥ २ ॥',
        ],
        translit: [
          'Om rājādhirājāya prasahya-sāhine namo vayam Vaishravanāya kūrmahe |',
          'Sa me kāmān kāma-kāmāya mahyam kāmeshvaro Vaishravano dadātu |',
          'Kuberāya Vaishravanāya mahārājāya namah || 2 ||',
        ],
        meaningEn:
          'We bow reverently to the King of kings, the vanquisher of all obstacles, Lord Vaishravana (Kubera). May the sovereign treasurer of desires grant all pure desires to us who seek righteousness. Salutations to King Kubera Vaishravana, the supreme Emperor of abundance!',
        meaningHi:
          'राजाओं के अधिराज, संकटों को दूर करने वाले वैश्रवण (कुबेर महाराज) को हम नमन करते हैं। वे समस्त कामनाओं के स्वामी हमारे सभी धर्मानुकूल मनोरथों को पूर्ण करें। महाराज वैश्रवण कुबेर को हमारा प्रणाम।',
      },
      {
        stanzaNum: 3,
        label: 'ऋचा ३ (साम्राज्यं भौज्यं)',
        lines: [
          'ॐ स्वस्ति साम्राज्यं भौज्यं स्वाराज्यं वैराज्यं',
          'पारमेष्ठ्यं राज्यं माहाराज्यमाधिपत्यमयं समन्तपर्यायी स्यात् ।',
          'सार्वभौमः सार्वायुष आन्तादापरार्धात् पृथिव्यै',
          'समुद्रपर्यन्ताया एकराळिति ॥ ३ ॥',
        ],
        translit: [
          'Om svasti sāmrājyam bhaujyam svārājyam vairājyam |',
          'Pārameshthyam rājyam māhārājyam-ādhipatyam-ayam samanta-paryāyī syāt |',
          'Sārvabhaumah sārvāyusha āntād-āparārdhāt prithivyai |',
          'Samudra-paryantāyā ekarāl-iti || 3 ||',
        ],
        meaningEn:
          'May there be universal well-being, sovereign righteous rule, prosperity, self-governance, supreme excellence, and unchallenged spiritual empire spanning the four directions, lasting across lifetimes until the edge of the oceans, united under truth and righteousness.',
        meaningHi:
          'कल्याण हो! हमारा राज्य सुव्यवस्थित, समृद्ध, स्वायत्त, उत्कृष्ट और सर्वकल्याणकारी हो। समुद्र पर्यन्त संपूर्ण पृथ्वी पर धर्म का चक्रवर्ती, दीर्घायु और अखंड साम्राज्य स्थापित हो।',
      },
      {
        stanzaNum: 4,
        label: 'समर्पण (पुष्पांजली अर्पण)',
        lines: [
          'तदप्येष श्लोकोऽभिगीतो मरुतः परिवेष्टारो मरुत्तस्यावसन्गृहे ।',
          'आविक्षितस्य कामप्रेर्विश्वेदेवाः सभासद इति ॥',
          '॥ श्री गणेशाय नमः । मंत्रपुष्पांजलिं समर्पयामि ॥',
        ],
        translit: [
          'Tadapyesha shloko-bhigīto marutah pariveshtāro maruttasyāvasan-grihe |',
          'Āvikshitasya kāmaprer-vishvedevāh sabhāsada iti ||',
          '|| Shrī Ganeshāya namah | Mantra-pushpānjalim samarpayāmi ||',
        ],
        meaningEn:
          'In this sacred memory, this Vedic hymn is sung: In the hall of King Marutta, the gods were attendants and all deities were honored assembly members. We bow to Lord Ganesha, and offer this fragrant Vedic Mantra Pushpanjali at his holy feet!',
        meaningHi:
          'इस विषय में यह श्लोक गाया गया है कि चक्रवर्ती मरुत्त के भवन में समस्त देवगण उपस्थित थे। भगवान श्री गणेश को सादर प्रणाम, हम यह पवित्र मंत्रपुष्पांजलि आपके श्रीचरणों में सादर समर्पित करते हैं।',
      },
    ],
  },
  {
    id: 'sankat-nashan-stotram',
    titleDevanagari: 'संकटनाशन गणेश स्तोत्रम्',
    titleEnglish: 'Sankat Nashan Ganesh Stotram',
    subtitle: 'नारद पुराणोक्तं संकटनाशनं (द्वादश नामानि)',
    category: 'स्तोत्रम्',
    author: 'देवर्षि नारद (Devarshi Narada, Narada Purana)',
    context: 'The ancient 12 holy names of Lord Ganesha documented in the Narada Purana that eliminate every grief, distress, and worldly difficulty.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'ध्यान श्लोक (Dhyan Shloka)',
        lines: [
          'नारद उवाच:',
          'प्रणम्य शिरसा देवं गौरीपुत्रं विनायकम् ।',
          'भक्तावासं स्मरेन्नित्यमायुःकामार्थसिद्धये ॥ १ ॥',
        ],
        translit: [
          'Nārada uvācha:',
          'Pranamya shirasā devam Gaurī-putram Vināyakam |',
          'Bhaktāvāsam smaren-nityam āyuh-kāmārtha-siddhaye || 1 ||',
        ],
        meaningEn:
          'Sage Narada said: Bowing with one’s head to the supreme Lord Vinayaka, the beloved son of Mother Gauri, the eternal abode of his devotees, one should remember him daily for longevity, righteous desires, and spiritual fulfillment.',
        meaningHi:
          'देवर्षि नारद बोले: माता पार्वती के पुत्र भगवान विनायक को सिर झुकाकर प्रणाम करके, भक्तों के हृदय में निवास करने वाले प्रभु का नित्य स्मरण करना चाहिए, जिससे दीर्घायु, अभीष्ट कामना और धन-धर्म की सिद्धि हो।',
      },
      {
        stanzaNum: 2,
        label: '१-४ नामानि (Names 1-4)',
        lines: [
          'प्रथमं वक्रतुण्डं च एकदन्तं द्वितीयकम् ।',
          'तृतीयं कृष्णपिङ्गाक्षं गजवक्त्रं चतुर्थकम् ॥ २ ॥',
        ],
        translit: [
          'Prathamam Vakratundam cha Eka-dantam dvitīyakam |',
          'Tratīyam Krishna-pingāksham Gaja-vaktram chaturthakam || 2 ||',
        ],
        meaningEn:
          'First name is Vakratunda (curved trunk); Second is Ekadanta (single tusked); Third is Krishna-Pingaksha (dark, tawny eyes); Fourth is Gajavaktra (elephant faced).',
        meaningHi:
          'पहला नाम वक्रतुण्ड (टेढ़ी सूंड वाले), दूसरा एकदंत (एक दांत वाले), तीसरा कृष्णपिंगाक्ष (काली व भूरी आंखों वाले) और चौथा गजवक्त्र (हाथी के मुख वाले) है।',
      },
      {
        stanzaNum: 3,
        label: '५-८ नामानि (Names 5-8)',
        lines: [
          'लम्बोदरं पञ्चमं च षष्ठं विकटमेव च ।',
          'सप्तमं विघ्नराजेन्द्रं धूम्रवर्णं तथाष्टमम् ॥ ३ ॥',
        ],
        translit: [
          'Lambodaram panchamam cha shashtham Vikatameva cha |',
          'Saptamam Vighna-rājendram Dhūmra-varnam tathāshtamam || 3 ||',
        ],
        meaningEn:
          'Fifth is Lambodara (large belly); Sixth is Vikata (formidable & mighty); Seventh is Vighnarajendra (king of obstacles); Eighth is Dhumravarna (smoky grey complexion).',
        meaningHi:
          'पांचवां नाम लंबोदर (विशाल उदर वाले), छठा विकट (विशालकाय), सातवां विघ्नराजेन्द्र (विघ्नों के अधिपति) और आठवां धूम्रवर्ण (धुएं के रंग वाले) है।',
      },
      {
        stanzaNum: 4,
        label: '९-१२ नामानि (Names 9-12)',
        lines: [
          'नवमं भालचन्द्रं च दशमं तु विनायकम् ।',
          'एकादशं गणपतिं द्वादशं तु गजाननम् ॥ ४ ॥',
        ],
        translit: [
          'Navamam Bhāla-chandram cha dashamam tu Vināyakam |',
          'Ekādasham Ganapatim dvādasham tu Gajānanam || 4 ||',
        ],
        meaningEn:
          'Ninth is Bhalachandra (moon on forehead); Tenth is Vinayaka (supreme leader); Eleventh is Ganapati (lord of the Ganas); Twelfth is Gajanana (elephant countenance).',
        meaningHi:
          'नौवां नाम भालचन्द्र (मस्तक पर चंद्रमा धारण करने वाले), दसवां विनायक, ग्यारहवां गणपति और बारहवां गजानन है।',
      },
      {
        stanzaNum: 5,
        label: 'फलश्रुति (Benefits of Chanting)',
        lines: [
          'द्वादशैतानि नामानि त्रिसंध्यं यः पठेन्नरः ।',
          'न च विघ्नभयं तस्य सर्वसिद्धिकरं प्रभो ॥ ५ ॥',
          'विद्यार्थी लभते विद्यां धनार्थी लभते धनम् ।',
          'पुत्रार्थी लभते पुत्रान् मोक्षार्थी लभते गतिम् ॥ ६ ॥',
          'जपेद्गणपतिस्तोत्रं षड्भिर्मासैः फलं लभेत् ।',
          'संवत्सरेण सिद्धिं च लभते नात्र संशयः ॥ ७ ॥',
        ],
        translit: [
          'Dvādashaitāni nāmāni tri-sandhyam yah pathen-narah |',
          'Na cha vighna-bhayam tasya sarva-siddhi-karam prabho || 5 ||',
          'Vidyārthī labhate vidyām dhanārthī labhate dhanam |',
          'Putrārthī labhate putrān mokshārthī labhate gatim || 6 ||',
          'Japed-Ganapati-stotram shadbhir-māsaih phalam labhet |',
          'Samvatsarena siddhim cha labhate nātra samshayah || 7 ||',
        ],
        meaningEn:
          'Whoever recites these twelve sacred names at dawn, noon, and dusk faces no fear of obstacles anywhere; it bestows complete success. A student attains knowledge, a seeker of wealth attains prosperity, a desirous of offspring is blessed with children, and a seeker of liberation attains salvation. Within six months fruits are received, and within one year perfection is attained—of this there is no doubt.',
        meaningHi:
          'जो व्यक्ति इन बारह पवित्र नामों का तीनों संध्याओं में पाठ करता है, उसे किसी भी विघ्न का भय नहीं रहता; यह स्तोत्र सर्वसिद्धिदायक है। विद्यार्थी विद्या, धनार्थी धन, पुत्रार्थी पुत्र और मोक्षार्थी मोक्ष प्राप्त करता है। छह माह में इसका शुभ फल मिलता है और एक वर्ष में निश्चित सिद्धि प्राप्त होती है।',
      },
    ],
  },
  {
    id: 'atharvashirsha',
    titleDevanagari: 'श्री गणपती अथर्वशीर्ष',
    titleEnglish: 'Shree Ganapati Atharvashirsha',
    subtitle: 'अथर्ववेदीय श्री गणेशोपनिषद्',
    category: 'अथर्वशीर्ष',
    author: 'अथर्ववेद (Atharva Veda)',
    context: 'The most sacred Vedic Upanishad dedicated to Ganesha, chanted with deep reverence for wisdom, peace, and spiritual illumination.',
    stanzas: [
      {
        stanzaNum: 1,
        label: 'शांति पाठ (Peace Invocation)',
        lines: [
          'ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः ।',
          'स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायूः ॥',
          'ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः । स्वस्ति नः पूषा विश्ववेदाः ।',
          'स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः । स्वस्ति नो बृहस्पतिर्दधातु ॥',
          'ॐ शान्तिः शान्तिः शान्तिः ॥',
        ],
        translit: [
          'Om bhadram karnebhih shrunuyāma devāh | Bhadram pashyemākshabhir-yajatrāh |',
          'Sthirair-angaistushtuvāmsastanūbhih | Vyashema devahitam yadāyūh ||',
          'Om svasti na Indro vriddhashravāh | Svasti nah pūshā vishvavedāh |',
          'Svasti nas-tārkshyo arishtanemih | Svasti no Brihaspatirdadhātu ||',
          'Om shāntih shāntih shāntih ||',
        ],
        meaningEn:
          'Om! O Devas, may we hear what is auspicious with our ears. May we see what is auspicious with our eyes. Offering praise with firm limbs and bodies, may we attain the divine lifespan appointed by God. May Indra of ancient glory bless us! May Pushan who knows all things bless us! May Garuda of unhindered path bless us! May Brihaspati grant us spiritual wisdom! Om Peace, Peace, Peace!',
        meaningHi:
          'हे देवगण! हम कानों से शुभ सुनें, नेत्रों से मंगलमय देखें। स्वस्थ अंगों से ईश्वर की स्तुति करते हुए देवहितकारी पूर्णायु प्राप्त करें। इंद्र, पूषा, गरुड़ और बृहस्पति देव हमारा कल्याण करें। ॐ शांतिः शांतिः शांतिः ॥',
      },
      {
        stanzaNum: 2,
        label: 'उपनिषद् आरम्भ (Direct Realization)',
        lines: [
          'ॐ नमस्ते गणपतये । त्वमेव प्रत्यक्षं तत्त्वमसि ।',
          'त्वमेव केवलं कर्ताऽसि । त्वमेव केवलं धर्ताऽसि ।',
          'त्वमेव केवलं हर्ताऽसि । त्वमेव सर्वं खल्विदं ब्रह्मासि ।',
          'त्वं साक्षादात्माऽसि नित्यम् ॥ १ ॥',
          'ऋतं वच्मि । सत्यं वच्मि ॥ २ ॥',
        ],
        translit: [
          'Om namaste Ganapataye | Tvameva pratyaksham tattvamasi |',
          'Tvameva kevalam kartāsi | Tvameva kevalam dhartāsi |',
          'Tvameva kevalam hartāsi | Tvameva sarvam khalvidam Brahmāsi |',
          'Tvam sākshād-ātmāsi nityam || 1 ||',
          'Ritam vachmi | Satyam vachmi || 2 ||',
        ],
        meaningEn:
          'Om, salutations unto you, O Ganapati! You alone are the perceptible Supreme Reality (Tat Tvam Asi). You alone are the sole Creator, You alone are the sole Sustainer, You alone are the sole Dissolver. You alone are all this manifest Brahman. You are the eternal Indwelling Soul! I speak the cosmic order (Ritam). I speak absolute truth (Satyam).',
        meaningHi:
          'हे गणपति! आपको नमस्कार है। आप ही साक्षात परब्रह्म तत्त्व हैं। आप ही एकमात्र कर्ता, धर्ता और संहारक हैं। आप ही यह संपूर्ण विश्वरूप ब्रह्म हैं। आप साक्षात नित्य अंतरात्मा हैं। मैं ऋत (ईश्वरीय नियम) कहता हूँ, मैं परम सत्य कहता हूँ।',
      },
      {
        stanzaNum: 3,
        label: 'सर्वतो रक्षा प्रार्थना (Universal Protection)',
        lines: [
          'अव त्वं मां । अव वक्तारं । अव श्रोतारं । अव दातारं ।',
          'अव धातारं । अवानूचानमव शिष्यम् ।',
          'अव पश्चात्तात् । अव पुरस्तात् । अवोत्तरात्तात् ।',
          'अव दक्षिणात्तात् । अव चोर्ध्वात्तात् । अवाधरात्तात् ।',
          'सर्वतो मां पाहि पाहि समन्तात् ॥ ३ ॥',
        ],
        translit: [
          'Ava tvam mām | Ava vaktāram | Ava shrotāram | Ava dātāram |',
          'Ava dhātāram | Avānūchānam-ava shishyam |',
          'Ava pashchāttāt | Ava purastāt | Avottarāttāt |',
          'Ava dakshināttāt | Ava chordhvāttāt | Avādharāttāt |',
          'Sarvato mām pāhi pāhi samantāt || 3 ||',
        ],
        meaningEn:
          'Protect me! Protect the speaker, protect the listener, protect the giver, protect the holder, protect the learned teacher, protect the disciple. Protect me from behind, protect me from the front, protect me from the north, protect me from the south, protect me from above, protect me from below. Protect me from all directions and surroundings!',
        meaningHi:
          'प्रभु! मेरी रक्षा करें। वक्ता की रक्षा करें, श्रोता की रक्षा करें, दाता की रक्षा करें, धारण करने वाले की रक्षा करें, आचार्य और शिष्य की रक्षा करें। मेरी पीछे से, आगे से, उत्तर से, दक्षिण से, ऊपर से और नीचे से रक्षा करें। चारों दिशाओं से निरंतर मेरी रक्षा करें।',
      },
      {
        stanzaNum: 4,
        label: 'स्वरूप वर्णन (Cosmic Divine Form)',
        lines: [
          'त्वं वाङ्मयस्त्वं चिन्मयः । त्वमानन्दमयस्त्वं ब्रह्ममयः ।',
          'त्वं सच्चिदानन्दाऽद्वितीयोऽसि । त्वं प्रत्यक्षं ब्रह्मासि ।',
          'त्वं ज्ञानमयो विज्ञानमयोऽसि ॥ ४ ॥',
          'सर्वं जगदिदं त्वत्तो जायते । सर्वं जगदिदं त्वत्तस्तिष्ठति ।',
          'सर्वं जगदिदं त्वयि लयमेष्यति । सर्वं जगदिदं त्वयि प्रत्येति ।',
          'त्वं भूमिरापोऽनलोऽनिलो नभः । त्वं चत्वारि वाक्पदानि ॥ ५ ॥',
        ],
        translit: [
          'Tvam vāngmayas-tvam chinmayah | Tvam ānandamayas-tvam Brahmamayah |',
          'Tvam sachchidānandā-dvitīyo-si | Tvam pratyaksham Brahmāsi |',
          'Tvam jnānamayo vijnānamayo-si || 4 ||',
          'Sarvam jagad-idam tvatto jāyate | Sarvam jagad-idam tvattas-tishthati |',
          'Sarvam jagad-idam tvayi layam-eshyati | Sarvam jagad-idam tvayi pratyeti |',
          'Tvam bhūmir-āpo-nalo-nilo nabhah | Tvam chatvāri vāk-padāni || 5 ||',
        ],
        meaningEn:
          'You are all speech, You are pure Consciousness. You are blissful Ananda, You are Brahman. You are Truth-Consciousness-Bliss (Sat-Chit-Ananda), One without a second. You are perceptible Brahman. You are wisdom and direct realization. From You this entire universe is born, in You it abides, into You it dissolves. You are earth, water, fire, air, and space. You are the four levels of speech.',
        meaningHi:
          'आप वाङ्मय और चिन्मय हैं। आप आनंदमय और ब्रह्ममय हैं। आप अद्वितीय सच्चिदानंद हैं। आप प्रत्यक्ष ब्रह्म, ज्ञानमय और विज्ञानमय हैं। यह संपूर्ण जगत आपसे ही उत्पन्न होता है, आप में ही स्थित रहता है और आप में ही विलीन होता है। आप ही पृथ्वी, जल, अग्नि, वायु और आकाश पंचमहाभूत हैं।',
      },
      {
        stanzaNum: 5,
        label: 'महागणपति मूलमंत्र (Sacred Beej Mantra)',
        lines: [
          'गणादिं पूर्वमुच्चार्य वर्णादिं तदनन्तरम् ।',
          'अनुस्वारः परतरः । अर्धेन्दुलसितम् । तारेण ऋद्धम् ।',
          'एतत्तव मनुस्वरूपम् । गकारः पूर्वरूपम् । अकारो मध्यमरूपम् ।',
          'अनुस्वारश्चान्त्यरूपम् । बिन्दुरुत्तररूपम् । नादः सन्धानम् ।',
          'संहिता सन्धिः । सैषा गणेशविद्या । गणक ऋषिः ।',
          'निचृद्गायत्रीच्छन्दः । गणपतिर्देवता ।',
          'ॐ गं गणपतये नमः ॥ ६ ॥',
        ],
        translit: [
          'Ganādim pūrvam-uchchārya varnādim tad-anantaram |',
          'Anusvārah paratarah | Ardhendu-lasitam | Tārena rriddham |',
          'Etat-tava manu-svarūpam | Gakārah pūrva-rūpam | Akāro madhyama-rūpam |',
          'Anusvārash-chāntya-rūpam | Bindur-uttara-rūpam | Nādah sandhānam |',
          'Samhitā sandhih | Saishā Ganesha-vidyā | Ganaka rrishih |',
          'Nichrid-gāyatrī-chhandah | Ganapatir-devatā |',
          'Om gam Ganapataye namah || 6 ||',
        ],
        meaningEn:
          'First uttering the sound "G" (from Gana), followed by "A", topped with the nasal Anusvara and the crescent moon (Chandrabindu), empowered by Om (Tara). This is your sacred seed mantra. G-kara is the first form, A-kara is the middle, Anusvara is the end, Bindu is above, Nada is the junction. This is the sacred Ganesha Vidya. Sage Ganaka is the seer, Gayatri is the meter, Lord Ganapati is the deity: OM GAM GANAPATAYE NAMAH.',
        meaningHi:
          'गण के प्रथम वर्ण \'ग्\' का पहले उच्चारण करें, फिर \'अ\', उसके ऊपर अनुस्वार और अर्धचंद्र। ॐ से सुशोभित यह आपका बीज मंत्र स्वरूप है। गकार पूर्वरूप, अकार मध्यमरूप, अनुस्वार अंतिम रूप और बिंदु उत्तररूप है। नाद इसका संधान है। यही पावन गणेशविद्या है। गणक इसके ऋषि, निचृद्गायत्री छंद और गणपति देवता हैं। ॐ गं गणपतये नमः ॥',
      },
    ],
  },
];
