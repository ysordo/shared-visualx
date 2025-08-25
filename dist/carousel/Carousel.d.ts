import React from 'react';
export type CarouselItem = {
    type: 'text';
    content: string;
} | {
    type: 'image';
    src: string;
    alt?: string;
} | {
    type: 'mixed';
    content: string;
    src: string;
    alt?: string;
};
interface CarouselProps {
    items: CarouselItem[];
    className?: string;
    next?: () => void;
    prev?: () => void;
    index?: number;
    setIndex?: (i: number) => void;
    renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
}
export declare const Carousel: React.FC<CarouselProps>;
export {};
//# sourceMappingURL=Carousel.d.ts.map