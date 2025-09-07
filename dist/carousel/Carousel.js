"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const IndexCarousel_1 = require("./IndexCarousel");
const ItemCarousel_1 = __importDefault(require("./ItemCarousel"));
const CarouselContainer_1 = require("./CarouselContainer");
const Carousel = ({ items, className = '', next = () => { }, prev = () => { }, index = 0, setIndex = () => { }, }) => {
    if (items.length === 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(CarouselContainer_1.CarouselContainer, { className: className, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full h-full flex justify-center", children: (0, jsx_runtime_1.jsx)(ItemCarousel_1.default, { item: items[index] }) }), (0, jsx_runtime_1.jsx)(IndexCarousel_1.IndexCarousel, { items: items, index: index, setIndex: setIndex, next: next, prev: prev, length: items.length, className: "w-full" })] }));
};
exports.Carousel = Carousel;
//# sourceMappingURL=Carousel.js.map