class ITEM extends TRAINER{
    constructor(itemType, ...args){
        super(...args);

        this.itemType = itemType;
    }

    drawTop = trainerName => {
        let svg = "";
        let hasItemType = this.itemType !== null && this.itemType !== "";
        // Get Icon for top
        let topIcon = `<g class='TRAINER_ICON' transform='translate(2,2)'>${svgData.trainerIcons.trainer}</g>`;
        let nameBlock = `<g class='NAME' transform='translate(20, 13.5)'><text>${trainerName}</text></g>`;
        let typeLabel = hasItemType ? `<g class='TRAINER_TYPE_LABEL'>${svgData.itemTypes[this.itemType]}</g>` : "";
        let subTop = `<g class='SUB_TOP'>${ITEM_SUB_LABEL + typeLabel + TRAINER_SUB_LABEL}</g>`;

        svg = `<g class='TOP'>${this.baseParts.topRect}<g class='TOP_CONTENT' transform='translate(6,4)'>${topIcon + nameBlock}</g>${subTop}</g>`;
        
        return svg;
    }

    drawBottom = setInfo => {
        let svg = "";

        let itemBlock = "<g class='TRAINER_NOTE' transform='translate(3,3)'><rect x='36' y='0' width='130' height='8'/><text transform='translate(40,5.5)'>You may play any number of items during your turn.</text></g>";

        svg = `<g class='BOTTOM' transform='translate(6,233)'>${this.baseParts["bottomBack"]+this.baseParts["bottomBar"]}${setInfo}${itemBlock}</g>`;

        return svg;
    }
}