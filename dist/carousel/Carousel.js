import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IndexCarousel } from './IndexCarousel';
import ItemCarousel from './ItemCarousel';
import { CarouselContainer } from './CarouselContainer';
export const Carousel = ({ items, className = '', next = () => { }, prev = () => { }, index = 0, setIndex = () => { }, }) => {
    if (items.length === 0) {
        return null;
    }
    return (_jsxs(CarouselContainer, { className: className, children: [_jsx("div", { className: "w-full h-full flex justify-center", children: _jsx(ItemCarousel, { item: items[index] }) }), _jsx(IndexCarousel, { items: items, index: index, setIndex: setIndex, next: next, prev: prev, length: items.length, className: "w-full" })] }));
};
//# sourceMappingURL=Carousel.js.map