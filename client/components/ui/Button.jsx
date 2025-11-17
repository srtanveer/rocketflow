'use client'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-coral-500 text-white hover:bg-coral-600 focus:ring-coral-500 hover:scale-105",
    secondary: "border border-gray-300 text-gray-700 hover:border-coral-500 hover:text-coral-500 bg-white",
    outline: "border border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white",
    ghost: "text-gray-600 hover:text-coral-500 hover:bg-gray-100"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2 text-sm rounded-full",
    lg: "px-8 py-4 text-lg rounded-full"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;