import React, { type JSX } from 'react';
import { IndexCarousel } from './IndexCarousel';
import ItemCarousel from './ItemCarousel';
import { CarouselContainer } from './CarouselContainer';

export type CarouselItem =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'mixed'; content: string; src: string; alt?: string };

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  next?: () => void;
  prev?: () => void;
  index?: number;
  setIndex?: (i: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className = '',
  next = () => {},
  prev = () => {},
  index = 0,
  setIndex = () => {},
}): JSX.Element | null => {
  if (items.length === 0) {
    return null;
  }

  return (
    <CarouselContainer className={className}>
      <div className="w-full h-full flex justify-center">
        <ItemCarousel item={items[index]} />
      </div>
      <IndexCarousel
        items={items}
        index={index}
        setIndex={setIndex}
        next={next}
        prev={prev}
        length={items.length}
        className="w-full"
      />
    </CarouselContainer>
  );
};
