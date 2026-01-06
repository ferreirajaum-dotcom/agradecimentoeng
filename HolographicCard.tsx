import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const HolographicCard: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative bg-brand-card/30 backdrop-blur-md border border-white/5 rounded-sm overflow-hidden ${className}`}>
      {/* Glossy sheen */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};