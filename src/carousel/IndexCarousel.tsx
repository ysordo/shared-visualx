import React from 'react';
import { ActionButton } from './ActionIndexCarousel';

interface IndexCarouselProps {
  items: React.ReactNode[];
  index: number;
  setIndex: (i: number) => void;
  next: () => void;
  prev: () => void;
  length: number;
  className?: string;
}

export const IndexCarousel: React.FC<IndexCarouselProps> = ({
  items,
  index,
  setIndex,
  next,
  prev,
  length,
  className = '',
}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex gap-2 mb-2">
        <ActionButton onClick={prev} ariaLabel="Previous">
          Prev
        </ActionButton>
        <ActionButton onClick={next} ariaLabel="Next">
          Next
        </ActionButton>
        <ActionButton onClick={() => setIndex(0)} ariaLabel="First">
          First
        </ActionButton>
        <ActionButton onClick={() => setIndex(length - 1)} ariaLabel="Last">
          Last
        </ActionButton>
      </div>
      <div className="flex gap-2">
        {items
          .map((_, idx) => idx)
          .filter((idx) => {
            // Show 3 indicators centered around index
            if (length <= 3) {
              return true;
            }
            if (index === 0) {
              return idx < 3;
            }
            if (index === length - 1) {
              return idx >= length - 3;
            }
            return Math.abs(idx - index) <= 1;
          })
          .map((idx) => (
            <ActionButton
              key={idx}
              onClick={() => setIndex(idx)}
              ariaLabel={`Go to item ${idx + 1}`}>
              <span
                className={`w-3 h-3 rounded-full border-2 inline-block ${
                  idx === index
                    ? 'bg-blue-500 border-blue-500'
                    : 'bg-gray-300 border-gray-400'
                }`}
              />
            </ActionButton>
          ))}
      </div>
    </div>
  );
};
