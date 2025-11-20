'use client'

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg',
  id,
  ...props 
}) => {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-100"
  };
  
  const paddings = {
    sm: "py-12 px-4 sm:px-6 lg:px-8",
    md: "py-16 px-4 sm:px-6 lg:px-8",
    lg: "py-20 px-4 sm:px-6 lg:px-8"
  };
  
  return (
    <section
      id={id}
      className={`relative ${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;