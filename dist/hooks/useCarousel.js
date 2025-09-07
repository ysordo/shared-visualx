"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarousel = useCarousel;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Carousel_1 = require("../carousel/Carousel");
function useCarousel({ items, className = '', }) {
    const [index, setIndex] = (0, react_1.useState)(0);
    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const html = ((0, jsx_runtime_1.jsx)(Carousel_1.Carousel, { items: items, className: className, index: index, next: next, prev: prev, setIndex: setIndex }));
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