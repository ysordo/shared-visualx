import { HTMLElementType, HTMLInputTypeAttribute, JSX } from 'react';

declare function useForm(value: {
    [key: string]: unknown;
}, schema: Record<HTMLElementType | HTMLInputTypeAttribute, unknown>): [JSX.Element, Record<string, unknown>, Record<string, string | null>];

interface UseCarouselProps<T> {
    items: T[];
    renderItem?: (item: T, index: number) => JSX.Element;
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
declare function useCarousel<T>({ items, className, }: UseCarouselProps<T>): [
    UseCarouselReturn['html'],
    number,
    UseCarouselReturn['state']
];

export { useCarousel, useForm };
