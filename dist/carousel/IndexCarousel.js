"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexCarousel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ActionIndexCarousel_1 = require("./ActionIndexCarousel");
const IndexCarousel = ({ items, index, setIndex, next, prev, length, className = '', }) => {
    if (items.length === 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex justify-center gap-3 items-center ${className}`, children: [(0, jsx_runtime_1.jsx)(ActionIndexCarousel_1.ActionButton, { onClick: () => setIndex(0), ariaLabel: "First", children: '<<' }), (0, jsx_runtime_1.jsx)(ActionIndexCarousel_1.ActionButton, { onClick: prev, ariaLabel: "Previous", children: '<' }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-2", children: items
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
                    .map((idx) => ((0, jsx_runtime_1.jsx)(ActionIndexCarousel_1.ActionButton, { onClick: () => setIndex(idx), ariaLabel: `Go to item ${idx + 1}`, children: (0, jsx_runtime_1.jsx)("span", { className: `w-3 h-3 rounded-full border-2 inline-block ${idx === index
                            ? 'bg-blue-500 border-blue-500'
                            : 'bg-gray-300 border-gray-400'}` }) }, idx))) }), (0, jsx_runtime_1.jsx)(ActionIndexCarousel_1.ActionButton, { onClick: next, ariaLabel: "Next", children: '>' }), (0, jsx_runtime_1.jsx)(ActionIndexCarousel_1.ActionButton, { onClick: () => setIndex(length - 1), ariaLabel: "Last", children: '>>' })] }));
};
exports.IndexCarousel = IndexCarousel;
//# sourceMappingURL=IndexCarousel.js.map