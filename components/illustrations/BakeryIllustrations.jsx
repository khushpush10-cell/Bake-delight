'use client';

// Lavender sprig illustration - like the reference image
export const LavenderSprig = ({ size = 80, className = '', style = {} }) => (
  <svg width={size} height={size*1.3} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <line x1="30" y1="75" x2="30" y2="10" stroke="#C4B5E8" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="30" y1="55" x2="18" y2="40" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="55" x2="42" y2="40" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="45" x2="20" y2="32" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="45" x2="40" y2="32" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <ellipse cx="18" cy="38" rx="4" ry="6" fill="#DDD6F3" transform="rotate(-20 18 38)"/>
    <ellipse cx="42" cy="38" rx="4" ry="6" fill="#DDD6F3" transform="rotate(20 42 38)"/>
    <ellipse cx="20" cy="30" rx="3.5" ry="5.5" fill="#C4B5E8" transform="rotate(-15 20 30)"/>
    <ellipse cx="40" cy="30" rx="3.5" ry="5.5" fill="#C4B5E8" transform="rotate(15 40 30)"/>
    <ellipse cx="30" cy="10" rx="4" ry="7" fill="#DDD6F3"/>
    <ellipse cx="24" cy="14" rx="3" ry="5" fill="#C4B5E8" transform="rotate(-10 24 14)"/>
    <ellipse cx="36" cy="14" rx="3" ry="5" fill="#C4B5E8" transform="rotate(10 36 14)"/>
    <circle cx="30" cy="8" r="2" fill="#E8E0F8"/>
    <circle cx="24" cy="12" r="1.5" fill="#E8E0F8"/>
    <circle cx="36" cy="12" r="1.5" fill="#E8E0F8"/>
  </svg>
);

// Gold ornamental corner frame
export const OrnamentalCorner = ({ size = 60, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M5 5 L5 25 Q5 5 25 5" stroke="#D4A840" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M5 5 L25 5" stroke="#D4A840" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d="M5 5 L5 25" stroke="#D4A840" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <circle cx="5" cy="5" r="2.5" fill="#D4A840"/>
    <circle cx="15" cy="5" r="1.5" fill="#D4A840" opacity="0.5"/>
    <circle cx="5" cy="15" r="1.5" fill="#D4A840" opacity="0.5"/>
    <path d="M8 8 Q14 8 14 14" stroke="#D4A840" strokeWidth="0.8" fill="none" opacity="0.6"/>
    <circle cx="14" cy="14" r="1" fill="#D4A840" opacity="0.4"/>
  </svg>
);

// Small gold diamond divider
export const GoldDivider = ({ width = 200, className = '', style = {} }) => (
  <svg width={width} height="20" viewBox={`0 0 ${width} 20`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <line x1="0" y1="10" x2={width/2 - 14} y2="10" stroke="#D4A840" strokeWidth="0.8" opacity="0.6"/>
    <line x1={width/2 + 14} y1="10" x2={width} y2="10" stroke="#D4A840" strokeWidth="0.8" opacity="0.6"/>
    <polygon points={`${width/2},4 ${width/2+6},10 ${width/2},16 ${width/2-6},10`} fill="#D4A840" opacity="0.8"/>
    <circle cx={width/2 - 16} cy="10" r="2" fill="#D4A840" opacity="0.5"/>
    <circle cx={width/2 + 16} cy="10" r="2" fill="#D4A840" opacity="0.5"/>
    <circle cx={width/2 - 28} cy="10" r="1.2" fill="#D4A840" opacity="0.3"/>
    <circle cx={width/2 + 28} cy="10" r="1.2" fill="#D4A840" opacity="0.3"/>
  </svg>
);

// Cute macaron illustration
export const Macaron = ({ size = 50, color = '#C4B5E8', className = '', style = {} }) => (
  <svg width={size} height={size*0.65} viewBox="0 0 80 52" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <ellipse cx="40" cy="50" rx="32" ry="4" fill={color} opacity="0.15"/>
    <ellipse cx="40" cy="14" rx="30" ry="13" fill={color}/>
    <ellipse cx="40" cy="14" rx="26" ry="10" fill={color} opacity="0.7"/>
    <ellipse cx="40" cy="14" rx="22" ry="7" fill="white" opacity="0.3"/>
    <rect x="10" y="24" width="60" height="6" rx="2" fill="#F4C2B0" opacity="0.9"/>
    <ellipse cx="40" cy="38" rx="30" ry="13" fill={color}/>
    <ellipse cx="40" cy="38" rx="26" ry="10" fill={color} opacity="0.7"/>
    <ellipse cx="40" cy="38" rx="18" ry="6" fill="white" opacity="0.2"/>
    <circle cx="30" cy="12" r="2" fill="white" opacity="0.4"/>
    <circle cx="40" cy="10" r="1.5" fill="white" opacity="0.3"/>
  </svg>
);

// Small cute cupcake
export const CuteCupcake = ({ size = 70, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <ellipse cx="35" cy="65" rx="20" ry="4" fill="#C4B5E8" opacity="0.2"/>
    <path d="M18 42 Q13 56 15 62 Q35 66 55 62 Q57 56 52 42Z" fill="#DDD6F3"/>
    <path d="M20 44 Q16 56 18 62 Q35 65 52 62 Q54 56 50 44Z" fill="#EDE8FF"/>
    <line x1="24" y1="44" x2="22" y2="62" stroke="#C4B5E8" strokeWidth="1.5" opacity="0.5"/>
    <line x1="35" y1="44" x2="35" y2="63" stroke="#C4B5E8" strokeWidth="1.5" opacity="0.5"/>
    <line x1="46" y1="44" x2="48" y2="62" stroke="#C4B5E8" strokeWidth="1.5" opacity="0.5"/>
    <path d="M14 44 Q20 22 35 18 Q50 22 56 44Z" fill="#C4B5E8"/>
    <path d="M16 44 Q22 25 35 21 Q48 25 54 44Z" fill="#DDD6F3"/>
    <path d="M18 42 Q24 28 35 26 Q46 28 52 42" fill="#F4C2B0" opacity="0.8"/>
    <path d="M20 42 Q26 30 35 26 Q44 30 50 42" fill="#FAE0D8" opacity="0.9"/>
    <circle cx="35" cy="20" r="5" fill="#F4C2B0"/>
    <circle cx="35" cy="16" r="3" fill="#FAE0D8"/>
    <rect x="33" y="8" width="4" height="10" rx="2" fill="#DDD6F3"/>
    <ellipse cx="35" cy="7" rx="3" ry="4" fill="#D4A840" opacity="0.9"/>
    <circle cx="25" cy="36" r="2" fill="white" opacity="0.5"/>
    <circle cx="35" cy="33" r="1.5" fill="white" opacity="0.4"/>
    <circle cx="45" cy="36" r="2" fill="white" opacity="0.5"/>
  </svg>
);

// Cute cake on stand - like the image
export const CakeOnStand = ({ size = 160, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <ellipse cx="80" cy="155" rx="50" ry="6" fill="#C4B5E8" opacity="0.2"/>
    <rect x="68" y="128" width="24" height="18" rx="4" fill="#EDE8FF"/>
    <ellipse cx="80" cy="148" rx="36" ry="6" fill="#DDD6F3"/>
    <ellipse cx="80" cy="148" rx="32" ry="4" fill="#C4B5E8" opacity="0.4"/>
    <rect x="30" y="92" width="100" height="36" rx="10" fill="#C4B5E8"/>
    <rect x="32" y="94" width="96" height="32" rx="8" fill="#DDD6F3"/>
    <rect x="30" y="64" width="100" height="30" rx="8" fill="#C4B5E8"/>
    <rect x="32" y="66" width="96" height="26" rx="6" fill="#DDD6F3"/>
    <path d="M30 92 Q80 88 130 92" stroke="#F4C2B0" strokeWidth="3" fill="none"/>
    <path d="M30 64 Q80 60 130 64" stroke="#F4C2B0" strokeWidth="3" fill="none"/>
    <ellipse cx="80" cy="64" rx="50" ry="8" fill="#EDE8FF"/>
    <path d="M50 64 Q80 48 110 64" fill="#F4C2B0" opacity="0.6"/>
    <path d="M55 64 Q80 52 105 64" fill="#FAE0D8" opacity="0.8"/>
    <circle cx="60" cy="58" r="4" fill="#F4C2B0"/>
    <circle cx="75" cy="52" r="5" fill="#DDD6F3"/>
    <circle cx="90" cy="55" r="4" fill="#F4C2B0"/>
    <circle cx="80" cy="48" r="3.5" fill="#C4B5E8"/>
    <rect x="78" y="32" width="4" height="18" rx="2" fill="#EDE8FF"/>
    <ellipse cx="80" cy="30" rx="4" ry="5" fill="#D4A840" opacity="0.9"/>
    <circle cx="80" cy="27" r="2.5" fill="#D4A840"/>
    <ellipse cx="68" cy="50" rx="3" ry="5" fill="#C4B5E8" transform="rotate(-20 68 50)" opacity="0.8"/>
    <ellipse cx="92" cy="50" rx="3" ry="5" fill="#C4B5E8" transform="rotate(20 92 50)" opacity="0.8"/>
    <circle cx="80" cy="100" r="14" fill="white" opacity="0.4"/>
    <circle cx="80" cy="100" r="11" fill="none" stroke="#D4A840" strokeWidth="0.8" opacity="0.6"/>
    <text x="80" y="105" textAnchor="middle" fontSize="12" fill="#D4A840" fontFamily="serif" opacity="0.8">B</text>
    <circle cx="44" cy="88" r="3" fill="white" opacity="0.4"/>
    <circle cx="116" cy="88" r="3" fill="white" opacity="0.4"/>
    <circle cx="44" cy="108" r="3" fill="white" opacity="0.4"/>
    <circle cx="116" cy="108" r="3" fill="white" opacity="0.4"/>
  </svg>
);

// Small star sparkle
export const GoldSparkle = ({ size = 16, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M8 1 L9 6.5 L14.5 8 L9 9.5 L8 15 L7 9.5 L1.5 8 L7 6.5 Z" fill="#D4A840" opacity="0.85"/>
  </svg>
);

// Peach small flower
export const SmallFlower = ({ size = 30, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <ellipse cx="15" cy="8" rx="4" ry="6" fill="#F4C2B0" opacity="0.9"/>
    <ellipse cx="22" cy="15" rx="6" ry="4" fill="#F4C2B0" opacity="0.9"/>
    <ellipse cx="15" cy="22" rx="4" ry="6" fill="#FAE0D8" opacity="0.9"/>
    <ellipse cx="8" cy="15" rx="6" ry="4" fill="#FAE0D8" opacity="0.9"/>
    <ellipse cx="20" cy="10" rx="3.5" ry="5" fill="#F4C2B0" opacity="0.7" transform="rotate(45 20 10)"/>
    <ellipse cx="20" cy="20" rx="3.5" ry="5" fill="#FAE0D8" opacity="0.7" transform="rotate(-45 20 20)"/>
    <ellipse cx="10" cy="20" rx="3.5" ry="5" fill="#F4C2B0" opacity="0.7" transform="rotate(45 10 20)"/>
    <ellipse cx="10" cy="10" rx="3.5" ry="5" fill="#FAE0D8" opacity="0.7" transform="rotate(-45 10 10)"/>
    <circle cx="15" cy="15" r="4" fill="#D4A840" opacity="0.8"/>
    <circle cx="15" cy="15" r="2.5" fill="#F7E07A"/>
  </svg>
);

// Ornamental border frame for sections
export const OrnamentalFrame = ({ width = 300, height = 60, className = '', style = {} }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="1" y="1" width={width-2} height={height-2} rx="8" stroke="#D4A840" strokeWidth="0.8" opacity="0.4"/>
    <rect x="5" y="5" width={width-10} height={height-10} rx="6" stroke="#D4A840" strokeWidth="0.5" opacity="0.25"/>
    <circle cx="1" cy="1" r="3" fill="#D4A840" opacity="0.5"/>
    <circle cx={width-1} cy="1" r="3" fill="#D4A840" opacity="0.5"/>
    <circle cx="1" cy={height-1} r="3" fill="#D4A840" opacity="0.5"/>
    <circle cx={width-1} cy={height-1} r="3" fill="#D4A840" opacity="0.5"/>
    <line x1={width/2 - 30} y1="1" x2={width/2 + 30} y2="1" stroke="#D4A840" strokeWidth="1.5" opacity="0.6"/>
    <line x1={width/2 - 30} y1={height-1} x2={width/2 + 30} y2={height-1} stroke="#D4A840" strokeWidth="1.5" opacity="0.6"/>
    <polygon points={`${width/2},0 ${width/2+4},4 ${width/2},8 ${width/2-4},4`} fill="#D4A840" opacity="0.7"/>
    <polygon points={`${width/2},${height-8} ${width/2+4},${height-4} ${width/2},${height} ${width/2-4},${height-4}`} fill="#D4A840" opacity="0.7"/>
  </svg>
);

// Floating heart
export const FloatingHeart = ({ size = 18, color = '#F4C2B0', className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M9 15.5 C9 15.5 1.5 10.5 1.5 5.5 C1.5 3 3.5 1.5 5.5 1.5 C7 1.5 8.5 2.5 9 3.5 C9.5 2.5 11 1.5 12.5 1.5 C14.5 1.5 16.5 3 16.5 5.5 C16.5 10.5 9 15.5 9 15.5Z" fill={color} opacity="0.85"/>
  </svg>
);

// Legacy exports for compatibility
export const CakeSlice = ({ size = 80, className = '' }) => (
  <CakeOnStand size={size} className={className} />
);

export const Cupcake = ({ size = 70, className = '' }) => (
  <CuteCupcake size={size} className={className} />
);

export const RollingPin = ({ size = 100, className = '' }) => (
  <GoldDivider width={size} className={className} />
);

export const Sparkle = ({ size = 24, color = '#D4A840', className = '' }) => (
  <GoldSparkle size={size} className={className} />
);

export const Cookie = ({ size = 60, className = '' }) => (
  <Macaron size={size} color="#F4C2B0" className={className} />
);

export const WheatSprig = ({ size = 60, className = '' }) => (
  <LavenderSprig size={size} className={className} />
);

export const PhoneIcon = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <rect x="15" y="5" width="30" height="50" rx="6" fill="#C4B5E8"/>
    <rect x="18" y="12" width="24" height="36" rx="3" fill="#FAE0D8"/>
    <circle cx="30" cy="46" r="4" fill="#D4A840"/>
    <rect x="25" y="8" width="10" height="2" rx="1" fill="#6B5B9E"/>
    <circle cx="30" cy="28" r="5" fill="#6B5B9E" opacity="0.5"/>
    <path d="M27 28 L30 31 L35 24" stroke="#FAE0D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const OrnamentDivider = ({ width = 180, className = '' }) => (
  <GoldDivider width={width} className={className} />
);

export const DecorativeStars = ({ count = 5, size = 14 }) => (
  <div style={{display: 'flex', gap: '2px', alignItems: 'center'}}>
    {[...Array(count)].map((_, i) => (
      <GoldSparkle key={i} size={size} />
    ))}
  </div>
);
