import React from 'react';

interface CarouselContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`w-full flex flex-col items-center justify-center ${className}`}>
    {children}
  </div>
);
