import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionButton } from './ActionIndexCarousel';
export const IndexCarousel = ({ items, index, setIndex, next, prev, length, className = '', }) => {
    if (items.length === 0) {
        return null;
    }
    return (_jsxs("div", { className: `flex justify-center gap-3 items-center ${className}`, children: [_jsx(ActionButton, { onClick: () => setIndex(0), ariaLabel: "First", children: '<<' }), _jsx(ActionButton, { onClick: prev, ariaLabel: "Previous", children: '<' }), _jsx("div", { className: "flex gap-2", children: items
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
                    .map((idx) => (_jsx(ActionButton, { onClick: () => setIndex(idx), ariaLabel: `Go to item ${idx + 1}`, children: _jsx("span", { className: `w-3 h-3 rounded-full border-2 inline-block ${idx === index
                            ? 'bg-blue-500 border-blue-500'
                            : 'bg-gray-300 border-gray-400'}` }) }, idx))) }), _jsx(ActionButton, { onClick: next, ariaLabel: "Next", children: '>' }), _jsx(ActionButton, { onClick: () => setIndex(length - 1), ariaLabel: "Last", children: '>>' })] }));
};
//# sourceMappingURL=IndexCarousel.js.map