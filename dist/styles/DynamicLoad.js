import stylesMap from './stylesMap.json';
// Reducimos el JSON a un objeto de módulos ya importados o null
const resolvedModules = Object.entries(stylesMap).reduce((acc, [key, file]) => {
    if (file === null) {
        acc[key] = null; // 👈 este tipo no tendrá estilos
    }
    else {
        acc[key] = require(`@/styles/${file}`);
    }
    return acc;
}, {});
export const styleModules = resolvedModules;
//# sourceMappingURL=DynamicLoad.js.map