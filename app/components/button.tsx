import React from 'react'

// 1. We define what "instructions" (props) this button can receive
interface ButtonProps {
  text: string;
  variant: 'solid' | 'outline';
}

const Button = ({ text, variant }: ButtonProps) => {
  
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition";
  
  // 3. Conditional styles based on the "variant" prop
  const variantStyles = variant === 'solid' 
    ? "bg-blue-600 hover:bg-blue-700 text-white" 
    : "border border-white/30 hover:bg-white/10 text-white";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {text}
    </button>
  )
}

export default Button