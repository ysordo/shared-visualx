import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IndexCarousel } from './IndexCarousel';
import ItemCarousel from './ItemCarousel';
import { CarouselContainer } from './CarouselContainer';
export const Carousel = ({ items, className = '', next = () => { }, prev = () => { }, index = 0, setIndex = () => { }, renderItem = (item) => {
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
}, }) => {
    if (items.length === 0) {
        return null;
    }
    return (_jsxs(CarouselContainer, { className: className, children: [_jsx(IndexCarousel, { items: items.map((item, idx) => renderItem(item, idx)), index: index, setIndex: setIndex, next: next, prev: prev, length: items.length, className: "w-full" }), _jsx("div", { className: "w-full mt-4 flex justify-center", children: _jsx(ItemCarousel, { item: items[index] }) })] }));
};
//# sourceMappingURL=Carousel.js.map