import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Carousel } from '../carousel/Carousel';
export function useCarousel({ items, className = '', }) {
    const [index, setIndex] = useState(0);
    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const html = (_jsx(Carousel, { items: items, className: className, index: index, next: next, prev: prev, setIndex: setIndex }));
    return [
        html,
        index,
        {
            next,
            prev,
            setIndex,
            length: items.length,
        },
    ];
}
//# sourceMappingURL=useCarousel.js.map