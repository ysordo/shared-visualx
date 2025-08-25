import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ItemCarousel = ({ item }) => {
    if (item.type === 'text') {
        return _jsx("div", { className: "p-4 text-center", children: item.content });
    }
    if (item.type === 'image') {
        return (_jsx("img", { src: item.src, alt: item.alt || 'carousel item', className: "w-full h-auto object-contain" }));
    }
    if (item.type === 'mixed') {
        return (_jsxs("div", { className: "flex flex-col items-center gap-2 p-4", children: [_jsx("img", { src: item.src, alt: item.alt || 'carousel item', className: "w-full h-auto object-contain" }), _jsx("div", { className: "text-center", children: item.content })] }));
    }
    return null;
};
export default ItemCarousel;
//# sourceMappingURL=ItemCarousel.js.map