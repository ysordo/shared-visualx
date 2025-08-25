import stylesMap from './stylesMap.json';
const resolvedModules = Object.entries(stylesMap).reduce((acc, [key, file]) => {
    if (file === null) {
        acc[key] = null;
    }
    else {
        acc[key] = require(`./${file}`);
    }
    return acc;
}, {});
export const styleModules = {
    simple: null,
    futuristic: require('./futuristic.module.css'),
};
//# sourceMappingURL=DynamicLoad.js.map