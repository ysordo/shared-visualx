import { type JSX } from 'react';
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
export declare function useCarousel<T>({ items, renderItem, className, }: UseCarouselProps<T>): UseCarouselReturn;
export {};
//# sourceMappingURL=useCarousel.d.ts.map