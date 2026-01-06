import React from 'react';

interface GlitchTextProps {
  text: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-brand-gold/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-100 select-none overflow-hidden" aria-hidden="true">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500/50 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-100 select-none overflow-hidden" aria-hidden="true">
        {text}
      </span>
    </span>
  );
};