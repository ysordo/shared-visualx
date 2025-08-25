import React from 'react';

type CarouselItem =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'mixed'; content: string; src: string; alt?: string };

interface ItemCarouselProps {
  item: CarouselItem;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ item }) => {
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
};

export default ItemCarousel;
