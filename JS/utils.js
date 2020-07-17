// TYPE ICONS

const buildTypeIcon = (types,index, scale) => {
    let svg;

    let offset = index == 0 ? "0,0" : TOP_TYPE_TWO_OFFSET;

    svg = `<g class='TYPE ${types[index].toUpperCase()}' transform='translate(${offset}) scale(${scale})'><g>${svgData.typeIcons[types[index].toLowerCase()]}</g></g>`;

    return svg;
}