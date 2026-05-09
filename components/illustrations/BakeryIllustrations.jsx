// Cute cake slice illustration
export const CakeSlice = ({ size = 80, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" className={className}>
    <ellipse cx="40" cy="65" rx="30" ry="6" fill="#F2C4A0" opacity="0.4"/>
    <polygon points="40,10 10,65 70,65" fill="#F2C4A0"/>
    <polygon points="40,10 15,58 65,58" fill="#FAE0CC"/>
    <rect x="10" y="57" width="60" height="10" rx="5" fill="#B8A9D9"/>
    <rect x="10" y="50" width="60" height="9" rx="4" fill="#D4CCF0"/>
    <ellipse cx="40" cy="12" rx="8" ry="5" fill="#F7E07A"/>
    <rect x="38" y="2" width="4" height="10" rx="2" fill="#D4A820"/>
    <circle cx="40" cy="2" r="3" fill="#F7E07A" opacity="0.8"/>
    <circle cx="25" cy="62" r="2" fill="white" opacity="0.6"/>
    <circle cx="40" cy="62" r="2" fill="white" opacity="0.6"/>
    <circle cx="55" cy="62" r="2" fill="white" opacity="0.6"/>
  </svg>
);

// Cute cupcake illustration
export const Cupcake = ({ size = 70, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 70 70" className={className}>
    <ellipse cx="35" cy="62" rx="22" ry="5" fill="#F2C4A0" opacity="0.3"/>
    <rect x="15" y="42" width="40" height="22" rx="8" fill="#F2C4A0"/>
    <rect x="18" y="45" width="10" height="16" rx="4" fill="#FAE0CC" opacity="0.6"/>
    <rect x="30" y="45" width="6" height="16" rx="3" fill="#FAE0CC" opacity="0.4"/>
    <path d="M12 42 Q35 10 58 42" fill="#B8A9D9"/>
    <path d="M16 42 Q35 15 54 42" fill="#D4CCF0"/>
    <circle cx="35" cy="18" r="5" fill="#F7E07A"/>
    <circle cx="22" cy="28" r="3" fill="#F2C4A0"/>
    <circle cx="48" cy="26" r="3" fill="#F2C4A0"/>
    <circle cx="35" cy="14" r="2" fill="white" opacity="0.8"/>
  </svg>
);

// Rolling pin illustration
export const RollingPin = ({ size = 100, className = '' }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 100 40" className={className}>
    <rect x="20" y="15" width="60" height="10" rx="5" fill="#D4CCF0"/>
    <rect x="22" y="16" width="56" height="4" rx="2" fill="#EDE8FF" opacity="0.8"/>
    <rect x="0" y="10" width="22" height="20" rx="10" fill="#B8A9D9"/>
    <rect x="78" y="10" width="22" height="20" rx="10" fill="#B8A9D9"/>
    <rect x="3" y="14" width="16" height="12" rx="6" fill="#D4CCF0" opacity="0.5"/>
  </svg>
);

// Star/sparkle illustration
export const Sparkle = ({ size = 24, color = '#F7E07A', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M12 2 L13.5 9 L20 8 L14.5 13 L17 20 L12 16 L7 20 L9.5 13 L4 8 L10.5 9 Z" fill={color} opacity="0.85"/>
  </svg>
);

// Cookie illustration
export const Cookie = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <circle cx="30" cy="30" r="26" fill="#F2C4A0"/>
    <circle cx="30" cy="30" r="24" fill="#FAE0CC"/>
    <circle cx="20" cy="22" r="4" fill="#B8A9D9"/>
    <circle cx="35" cy="18" r="3" fill="#B8A9D9"/>
    <circle cx="40" cy="32" r="4" fill="#7B68B5"/>
    <circle cx="22" cy="38" r="3" fill="#B8A9D9"/>
    <circle cx="34" cy="40" r="3.5" fill="#7B68B5"/>
    <circle cx="28" cy="28" r="2.5" fill="#B8A9D9"/>
    <circle cx="30" cy="30" r="26" fill="none" stroke="#F2C4A0" strokeWidth="1" opacity="0.5"/>
  </svg>
);

// Wheat/grain illustration
export const WheatSprig = ({ size = 60, className = '' }) => (
  <svg width={size * 0.5} height={size} viewBox="0 0 30 60" className={className}>
    <line x1="15" y1="55" x2="15" y2="5" stroke="#D4CCF0" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="15" cy="8" rx="5" ry="8" fill="#B8A9D9" opacity="0.7"/>
    <ellipse cx="8" cy="18" rx="5" ry="8" fill="#D4CCF0" transform="rotate(-30 8 18)" opacity="0.8"/>
    <ellipse cx="22" cy="18" rx="5" ry="8" fill="#D4CCF0" transform="rotate(30 22 18)" opacity="0.8"/>
    <ellipse cx="8" cy="32" rx="4" ry="7" fill="#EDE8FF" transform="rotate(-20 8 32)" opacity="0.7"/>
    <ellipse cx="22" cy="32" rx="4" ry="7" fill="#EDE8FF" transform="rotate(20 22 32)" opacity="0.7"/>
  </svg>
);

// Floating hearts
export const FloatingHeart = ({ size = 20, color = '#F2C4A0', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className}>
    <path d="M10 17 C10 17 2 12 2 6.5 C2 4 4 2 6.5 2 C8 2 9.5 3 10 4 C10.5 3 12 2 13.5 2 C16 2 18 4 18 6.5 C18 12 10 17 10 17Z" fill={color} opacity="0.8"/>
  </svg>
);

// Phone/WhatsApp icon for How It Works section
export const PhoneIcon = ({ size = 60, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" className={className}>
    <rect x="15" y="5" width="30" height="50" rx="6" fill="#B8A9D9"/>
    <rect x="18" y="12" width="24" height="36" rx="3" fill="#FAE0CC"/>
    <circle cx="30" cy="46" r="4" fill="#F7E07A"/>
    <rect x="25" y="8" width="10" height="2" rx="1" fill="#7B68B5"/>
    <circle cx="30" cy="28" r="5" fill="#7B68B5" opacity="0.5"/>
    <path d="M27 28 L30 31 L35 24" stroke="#FAE0CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Dotted decorative divider
export const OrnamentDivider = ({ className = '' }) => (
  <div className={className} style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'center', margin:'12px 0'}}>
    <div style={{width:'40px', height:'1px', background:'var(--lavender-primary)'}}/>
    <svg width="16" height="16" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="3" fill="var(--lavender-primary)"/>
      <circle cx="2" cy="8" r="1.5" fill="var(--peach-primary)"/>
      <circle cx="14" cy="8" r="1.5" fill="var(--peach-primary)"/>
    </svg>
    <div style={{width:'40px', height:'1px', background:'var(--lavender-primary)'}}/>
  </div>
);

// Decorative stars for testimonials
export const DecorativeStars = ({ count = 5, size = 14 }) => (
  <div style={{display: 'flex', gap: '2px', alignItems: 'center'}}>
    {[...Array(count)].map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 14 14">
        <path d="M7 1 L8 5 L12 5 L9 8 L10 12 L7 10 L4 12 L5 8 L2 5 L6 5 Z" fill="#F7E07A"/>
      </svg>
    ))}
  </div>
);
