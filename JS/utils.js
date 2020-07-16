// TYPE ICONS

const buildTypeIcon = type => {
    let svg;

    svg = `<g class='TYPE ${type.toUpperCase()}'><g>${svgData.typeIcons[type.toLowerCase()]}</g></g>`;

    return svg;
}