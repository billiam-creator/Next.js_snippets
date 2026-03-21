import React from 'react'

interface ButtonProps {
  text: string;
  variant: 'solid' | 'outline';
}

const Button = ({ text, variant }: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-md font-bold text-xs tracking-widest transition-all duration-300 uppercase";
  
  const variantStyles = variant === 'solid' 
    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20" 
    : "border-2 border-white/30 hover:border-white hover:bg-white/10 text-white";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {text}
    </button>
  )
}

export default Button