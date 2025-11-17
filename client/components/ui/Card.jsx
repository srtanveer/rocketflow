const Card = ({ 
  children, 
  className = '', 
  hover = true,
  tiltEffect = false,
  padding = 'md',
  animationDelay = 0,
  ...props 
}) => {
  const baseClasses = "bg-white rounded-3xl border border-gray-100";
  
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  // Hover transforms and transitions disabled per UX request
  const hoverClasses = "";

  return (
    <div
      className={`${baseClasses} ${paddingSizes[padding]} shadow-lg ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;