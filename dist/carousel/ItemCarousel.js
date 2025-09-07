"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ItemCarousel = ({ item }) => {
    if (item.type === 'text') {
        return (0, jsx_runtime_1.jsx)("div", { className: "p-4 text-center", children: item.content });
    }
    if (item.type === 'image') {
        return ((0, jsx_runtime_1.jsx)("img", { src: item.src, alt: item.alt || 'carousel item', className: "w-full h-auto object-contain" }));
    }
    if (item.type === 'mixed') {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-2 p-4", children: [(0, jsx_runtime_1.jsx)("img", { src: item.src, alt: item.alt || 'carousel item', className: "w-full h-auto object-contain" }), (0, jsx_runtime_1.jsx)("div", { className: "text-center", children: item.content })] }));
    }
    return null;
};
exports.default = ItemCarousel;
//# sourceMappingURL=ItemCarousel.js.map