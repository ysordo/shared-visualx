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
export const styleModules = resolvedModules;
//# sourceMappingURL=DynamicLoad.js.map