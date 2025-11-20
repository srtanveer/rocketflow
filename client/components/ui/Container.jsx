'use client'

const Container = ({ 
  children, 
  className = '', 
  size = 'xl',
  ...props 
}) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };
  
  return (
    <div
      className={`${sizes[size]} mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;