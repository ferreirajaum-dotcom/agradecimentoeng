import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative font-mono uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-[#E5C575] font-bold shadow-[0_0_20px_rgba(212,169,78,0.3)] hover:shadow-[0_0_30px_rgba(212,169,78,0.5)]",
    secondary: "bg-transparent border border-brand-gold/30 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} py-3 px-8 text-xs md:text-sm rounded-sm`}
      {...props}
    >
      {children}
    </button>
  );
};