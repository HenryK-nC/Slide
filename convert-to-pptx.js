const PptxGenJS = require('pptxgenjs');

// 프레젠테이션 생성
const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9';

// 색상 팔레트
const colors = {
  slate900: '0F172A',
  slate800: '1E293B',
  slate700: '334155',
  slate400: '94A3B8',
  slate300: 'CBD5E1',
  white: 'FFFFFF',
  indigo500: '6366F1',
  indigo400: '818CF8',
  blue400: '60A5FA',
  blue300: '93C5FD',
  purple400: 'A78BFA',
  purple300: 'C4B5FD',
  teal400: '5EEAD4',
  green400: '34D399',
  red400: 'F87171'
};

// 슬라이드 1: 타이틀 슬라이드
function createSlide1(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  // 상단 바
  slide.addText('Invitation Only', {
    x: 0.6, y: 0.6, w: 1.5, h: 0.25,
    fontSize: 9, color: colors.blue300, bold: true,
    align: 'center',
    fill: { color: '1E3A8A', transparency: 40 }
  });
  
  slide.addText('April 16, 2026', {
    x: 2.3, y: 0.6, w: 1.2, h: 0.25,
    fontSize: 10, color: colors.slate400
  });
  
  slide.addText('Seoul, Gangnam', {
    x: 8.5, y: 0.6, w: 1.5, h: 0.25,
    fontSize: 10, color: colors.white, align: 'right'
  });
  
  // 메인 제목
  slide.addText('ETHEREUM', {
    x: 0.8, y: 2.0, w: 8.5, h: 0.7,
    fontSize: 56, color: colors.white, bold: true,
    fontFace: 'Arial'
  });
  
  slide.addText('KOREA 2026', {
    x: 0.8, y: 2.65, w: 8.5, h: 0.7,
    fontSize: 56, color: colors.purple400, bold: true,
    fontFace: 'Arial'
  });
  
  // 부제목
  slide.addText('Scaling the Korean Ethereum Landscape:\nWhere Global Foundations Meet the Next Frontier of Institutional Adoption', {
    x: 0.8, y: 3.6, w: 8.5, h: 1,
    fontSize: 16, color: colors.slate300, lineSpacing: 24
  });
  
  // 하단 정보
  slide.addText('Co-Hosted By', {
    x: 0.8, y: 4.8, w: 2, h: 0.2,
    fontSize: 8, color: colors.slate400, bold: true
  });
  
  slide.addText('NONCE Classic × TICKER is ETH', {
    x: 0.8, y: 5.0, w: 3, h: 0.3,
    fontSize: 12, color: colors.white, bold: true
  });
}

// 슬라이드 2: Why Now?
function createSlide2(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Why Now? The April Opportunity', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  // 4개 카드 (2x2 그리드)
  const cards = [
    {
      x: 0.8, y: 1.3, title: 'The April Convergence',
      text: 'April 16, 2026 marks a pivotal moment during BUIDL Asia & CIS Week. Global blockchain leaders will converge in Seoul.',
      color: colors.blue400
    },
    {
      x: 5.3, y: 1.3, title: 'The Institutional Void',
      text: 'Despite numerous events, there is a critical absence of high-density forum where Institutional Finance meets Ethereum Core Tech.',
      color: colors.red400
    },
    {
      x: 0.8, y: 3.3, title: 'The KRW Powerhouse',
      text: 'Korea remains a dominant fiat-native market with $663 Billion USD Annual KRW Crypto Trading Volume.',
      color: colors.green400
    },
    {
      x: 5.3, y: 3.3, title: 'Strategic Unification',
      text: 'We aim to unify fragmented communities into a coherent force, showcasing Korea\'s institutional readiness to EF.',
      color: colors.purple400
    }
  ];
  
  cards.forEach(card => {
    slide.addShape(pptx.ShapeType.rect, {
      x: card.x, y: card.y, w: 4.2, h: 1.7,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(card.title, {
      x: card.x + 0.2, y: card.y + 0.2, w: 3.8, h: 0.3,
      fontSize: 16, color: card.color, bold: true
    });
    
    slide.addText(card.text, {
      x: card.x + 0.2, y: card.y + 0.6, w: 3.8, h: 1.0,
      fontSize: 11, color: colors.slate300, valign: 'top'
    });
  });
  
  // 페이지 번호
  slide.addText('02', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 슬라이드 3: Concept & Differentiators
function createSlide3(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Concept & Differentiators', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  slide.addText('"The Open Seminar: Beyond the Surface"', {
    x: 0.8, y: 1.1, w: 8.5, h: 0.3,
    fontSize: 18, color: colors.slate400
  });
  
  // 3개 카드
  const cards = [
    {
      x: 0.8, title: 'EF Direct Engagement',
      text: 'Core members of the Ethereum Foundation participate as active speakers and panel leaders, facilitating direct technical dialogue.',
      tag: 'Foundation Lead'
    },
    {
      x: 4.0, title: 'Institutional Density',
      text: 'High-density networking with decision-makers from Korea\'s top-tier financial institutions and Upbit\'s GIWA team.',
      tag: 'Top-tier FI'
    },
    {
      x: 7.2, title: 'Actionable Insight',
      text: 'Moving beyond PR headlines to discuss real regulatory compliance, stablecoin pilots, and STO collaboration scenarios for 2026.',
      tag: 'Strategy & Pilot'
    }
  ];
  
  cards.forEach(card => {
    slide.addShape(pptx.ShapeType.rect, {
      x: card.x, y: 1.7, w: 2.9, h: 3.0,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(card.title, {
      x: card.x + 0.2, y: 2.0, w: 2.5, h: 0.4,
      fontSize: 14, color: colors.white, bold: true
    });
    
    slide.addText(card.text, {
      x: card.x + 0.2, y: 2.5, w: 2.5, h: 1.8,
      fontSize: 10, color: colors.slate300, valign: 'top'
    });
    
    slide.addText(card.tag, {
      x: card.x + 0.2, y: 4.4, w: 2.5, h: 0.2,
      fontSize: 8, color: colors.purple300, bold: true
    });
  });
  
  slide.addText('03', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 슬라이드 4: Key Agenda
function createSlide4(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Key Agenda: The Fireside Chats', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  slide.addText('Format: 25min Discussion + 10min Live Q&A', {
    x: 0.8, y: 1.1, w: 8.5, h: 0.25,
    fontSize: 12, color: colors.slate400
  });
  
  // 4개 세션
  const sessions = [
    { x: 0.8, y: 1.6, title: 'Future of Payments', participants: 'BC Card × EF × Visa/Mastercard', color: colors.blue400 },
    { x: 5.3, y: 1.6, title: 'Infrastructure & L2 Strategy', participants: 'GIWA (Upbit L2) × Base × EF', color: colors.teal400 },
    { x: 0.8, y: 3.5, title: 'Regulatory & STO Era', participants: 'Top Securities Firms × EF (Besu)', color: colors.purple400 },
    { x: 5.3, y: 3.5, title: 'Institutional Asset Management', participants: 'Global Asset Managers × EF', color: colors.red400 }
  ];
  
  sessions.forEach((session, i) => {
    slide.addShape(pptx.ShapeType.rect, {
      x: session.x, y: session.y, w: 4.2, h: 1.6,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(`Session 0${i+1}`, {
      x: session.x + 0.2, y: session.y + 0.15, w: 1, h: 0.2,
      fontSize: 8, color: session.color, bold: true
    });
    
    slide.addText(session.title, {
      x: session.x + 0.2, y: session.y + 0.4, w: 3.8, h: 0.3,
      fontSize: 14, color: colors.white, bold: true
    });
    
    slide.addText(session.participants, {
      x: session.x + 0.2, y: session.y + 0.75, w: 3.8, h: 0.25,
      fontSize: 9, color: colors.slate400
    });
    
    slide.addText('Deep dive discussion on implementation strategies and real-world use cases.', {
      x: session.x + 0.2, y: session.y + 1.05, w: 3.8, h: 0.4,
      fontSize: 9, color: colors.slate300
    });
  });
  
  slide.addText('04', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 슬라이드 5: Target Audience & Network Impact
function createSlide5(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Target Audience & Network Impact', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  // 참석자 태그
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.8, y: 1.2, w: 8.5, h: 0.4,
    fill: { color: colors.slate800 },
    line: { color: colors.slate700, pt: 1 }
  });
  
  slide.addText('Key Attendees: Policymakers & Regulators | FI Leads | Ethereum Core Builders | Global Foundation Liaisons', {
    x: 1.0, y: 1.3, w: 8.0, h: 0.2,
    fontSize: 10, color: colors.slate300
  });
  
  // 3개 임팩트 카드
  const impacts = [
    {
      x: 0.8, title: 'Institutions', color: colors.blue400,
      points: [
        'Secure direct communication channel with EF leadership',
        'Validate KRW-based business cases for stablecoins & STOs',
        'Co-develop pilot programs compliant with regulations'
      ]
    },
    {
      x: 4.0, title: 'Foundations & EF', color: colors.purple400,
      points: [
        'Establish strong allies within high-volume Korean market',
        'Reinforce technical leadership against competing L1s',
        'Accelerate adoption of L2 standards and privacy solutions'
      ]
    },
    {
      x: 7.2, title: 'Builders', color: colors.green400,
      points: [
        'Bridge information gap with global core development',
        'Access high-quality institutional datasets for testing',
        'Unlock collaboration opportunities with global DeFi projects'
      ]
    }
  ];
  
  impacts.forEach(impact => {
    slide.addShape(pptx.ShapeType.rect, {
      x: impact.x, y: 1.8, w: 2.9, h: 3.0,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(impact.title, {
      x: impact.x + 0.2, y: 2.0, w: 2.5, h: 0.3,
      fontSize: 14, color: impact.color, bold: true
    });
    
    impact.points.forEach((point, i) => {
      slide.addText(`• ${point}`, {
        x: impact.x + 0.2, y: 2.5 + (i * 0.7), w: 2.5, h: 0.6,
        fontSize: 9, color: colors.slate300, valign: 'top'
      });
    });
  });
  
  slide.addText('05', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 슬라이드 6: Partnership Tiers
function createSlide6(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Partnership Tiers', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  // 왼쪽: Looking For
  slide.addText('Looking For', {
    x: 0.8, y: 1.2, w: 3.5, h: 0.3,
    fontSize: 16, color: colors.indigo400, bold: true
  });
  
  const partners = [
    { y: 1.6, title: 'Venue Partner', desc: 'Provide a high-end Gangnam lounge or conference hall.' },
    { y: 2.4, title: 'Financial Sponsors', desc: 'Cash support for premium production quality and security.' },
    { y: 3.2, title: 'Network Partners', desc: 'Facilitate introductions to key domestic institutions.' }
  ];
  
  partners.forEach(p => {
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.8, y: p.y, w: 3.5, h: 0.6,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(p.title, {
      x: 1.0, y: p.y + 0.1, w: 3.0, h: 0.2,
      fontSize: 12, color: colors.white, bold: true
    });
    
    slide.addText(p.desc, {
      x: 1.0, y: p.y + 0.35, w: 3.0, h: 0.2,
      fontSize: 9, color: colors.slate300
    });
  });
  
  // 오른쪽: Benefits
  slide.addText('Consortium Privileges', {
    x: 4.8, y: 1.2, w: 4.5, h: 0.3,
    fontSize: 16, color: colors.purple400, bold: true
  });
  
  slide.addShape(pptx.ShapeType.rect, {
    x: 4.8, y: 1.6, w: 4.5, h: 3.0,
    fill: { color: colors.slate800 },
    line: { color: colors.slate700, pt: 1 }
  });
  
  slide.addText('Private Dinner w/ EF', {
    x: 5.0, y: 1.9, w: 4.0, h: 0.3,
    fontSize: 14, color: colors.white, bold: true
  });
  
  const benefits = [
    '• Solo Spotlight: Keynote session or panel moderation',
    '• Premium Branding: Logo on main stage and materials',
    '• VIP Treatment: Front-row seating and demo pod',
    '• Lead Generation: Access to attendee list'
  ];
  
  benefits.forEach((b, i) => {
    slide.addText(b, {
      x: 5.0, y: 2.4 + (i * 0.4), w: 4.0, h: 0.35,
      fontSize: 10, color: colors.slate300
    });
  });
  
  slide.addText('06', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 슬라이드 7: Who We Are
function createSlide7(pptx) {
  const slide = pptx.addSlide();
  slide.background = { color: colors.slate900 };
  
  slide.addText('Who We Are: Proven Track Record', {
    x: 0.8, y: 0.5, w: 8.5, h: 0.6,
    fontSize: 36, color: colors.white, bold: true
  });
  
  // 3개 팀 카드
  const teams = [
    {
      x: 0.8, name: 'Nonce Classic', color: colors.blue400,
      desc: 'A specialized Venture Capital firm hard-forked from nonce, Korea\'s most influential blockchain builder community.'
    },
    {
      x: 4.0, name: 'Ticker is ETH', color: colors.purple400,
      desc: 'An elite collective of Korea\'s top-tier Ethereum builders and researchers driving technical discourse and innovation.'
    },
    {
      x: 7.2, name: 'Kanon', color: colors.green400,
      desc: 'The strategic GTM arm of Nonce Classic, specializing in hyper-local marketing and execution for global protocols.'
    }
  ];
  
  teams.forEach(team => {
    slide.addShape(pptx.ShapeType.rect, {
      x: team.x, y: 1.5, w: 2.9, h: 2.5,
      fill: { color: colors.slate800 },
      line: { color: colors.slate700, pt: 1 }
    });
    
    slide.addText(team.name, {
      x: team.x + 0.2, y: 1.8, w: 2.5, h: 0.3,
      fontSize: 16, color: team.color, bold: true
    });
    
    slide.addText(team.desc, {
      x: team.x + 0.2, y: 2.2, w: 2.5, h: 1.5,
      fontSize: 10, color: colors.slate300, valign: 'top'
    });
  });
  
  // 연락처
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.8, y: 4.3, w: 8.5, h: 0.6,
    fill: { color: colors.slate800 },
    line: { color: colors.slate700, pt: 1 }
  });
  
  slide.addText('Partnership Inquiries', {
    x: 1.0, y: 4.4, w: 2.5, h: 0.2,
    fontSize: 10, color: colors.slate400, bold: true
  });
  
  slide.addText('eth26@nonceclassic.org', {
    x: 1.0, y: 4.65, w: 7.5, h: 0.2,
    fontSize: 14, color: colors.white, bold: true
  });
  
  slide.addText('07', {
    x: 9.2, y: 5.2, w: 0.5, h: 0.2,
    fontSize: 10, color: colors.slate400, align: 'right'
  });
}

// 메인 실행
async function generatePresentation() {
  console.log('🚀 PowerPoint 생성 시작...');
  
  createSlide1(pptx);
  console.log('✅ 슬라이드 1 완료 (타이틀)');
  
  createSlide2(pptx);
  console.log('✅ 슬라이드 2 완료 (Why Now?)');
  
  createSlide3(pptx);
  console.log('✅ 슬라이드 3 완료 (Concept & Differentiators)');
  
  createSlide4(pptx);
  console.log('✅ 슬라이드 4 완료 (Key Agenda)');
  
  createSlide5(pptx);
  console.log('✅ 슬라이드 5 완료 (Target Audience)');
  
  createSlide6(pptx);
  console.log('✅ 슬라이드 6 완료 (Partnership Tiers)');
  
  createSlide7(pptx);
  console.log('✅ 슬라이드 7 완료 (Who We Are)');
  
  await pptx.writeFile({ fileName: 'Ethereum_Korea_2026.pptx' });
  console.log('✅ PowerPoint 파일 생성 완료! => Ethereum_Korea_2026.pptx');
}

generatePresentation().catch(console.error);