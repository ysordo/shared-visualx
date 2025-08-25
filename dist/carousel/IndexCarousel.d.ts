import React from 'react';
interface IndexCarouselProps {
    items: unknown[];
    index: number;
    setIndex: (i: number) => void;
    next: () => void;
    prev: () => void;
    length: number;
    className?: string;
}
export declare const IndexCarousel: React.FC<IndexCarouselProps>;
export {};
//# sourceMappingURL=IndexCarousel.d.ts.map