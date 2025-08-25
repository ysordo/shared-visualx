import { useState, type JSX } from 'react';
import type { CarouselItem } from '../carousel/Carousel';
import { Carousel } from '../carousel/Carousel';

interface UseCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  className?: string;
}

interface UseCarouselReturn {
  html: JSX.Element | null;
  index: number;
  state: {
    next: () => void;
    prev: () => void;
    setIndex: (i: number) => void;
    length: number;
  };
}

export function useCarousel<T>({
  items,
  renderItem,
  className = '',
}: UseCarouselProps<T>): UseCarouselReturn {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const html = (
    <Carousel
      items={items as CarouselItem[]}
      className={className}
      index={index}
      next={next}
      prev={prev}
      renderItem={
        renderItem as (item: CarouselItem, index: number) => React.ReactNode
      }
      setIndex={setIndex}
    />
  );

  return {
    html,
    index,
    state: {
      next,
      prev,
      setIndex,
      length: items.length,
    },
  };
}
