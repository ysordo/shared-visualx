import React, { useState } from 'react';
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
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  className = '',
  next = () => {},
  prev = () => {},
  index = 0,
  setIndex = () => {},
  renderItem = (item) => {
    if (item.type === 'text') {
      return <div className="p-4 text-center">{item.content}</div>;
    }

    if (item.type === 'image') {
      return (
        <img
          src={item.src}
          alt={item.alt || 'carousel item'}
          className="w-full h-auto object-contain"
        />
      );
    }

    if (item.type === 'mixed') {
      return (
        <div className="flex flex-col items-center gap-2 p-4">
          <img
            src={item.src}
            alt={item.alt || 'carousel item'}
            className="w-full h-auto object-contain"
          />
          <div className="text-center">{item.content}</div>
        </div>
      );
    }

    return null;
  },
}) => {

  if (items.length === 0) {
    return null;
  }

  return (
    <CarouselContainer className={className}>
      <IndexCarousel
        items={items.map((item, idx) => renderItem(item, idx))}
        index={index}
        setIndex={setIndex}
        next={next}
        prev={prev}
        length={items.length}
        className="w-full"
      />
      <div className="w-full mt-4 flex justify-center">
        <ItemCarousel item={items[index]} />
      </div>
    </CarouselContainer>
  );
};
