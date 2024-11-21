
const svgmodules : Record<string, { default: string }> = import.meta.glob("./*.svg",{ eager: true });
// console.log(svgmodules);

export const svgs = Object.entries(svgmodules).map(([path, module]: [string ,{default: string}]) => ({
    path:`Skills/${path.split("/")[1]}`,
    name: path.split("/")[1].split(".")[0],
    content: module.default
}));


