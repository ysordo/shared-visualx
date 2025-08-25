import React from 'react';
type CarouselItem = {
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
interface ItemCarouselProps {
    item: CarouselItem;
}
declare const ItemCarousel: React.FC<ItemCarouselProps>;
export default ItemCarousel;
//# sourceMappingURL=ItemCarousel.d.ts.map