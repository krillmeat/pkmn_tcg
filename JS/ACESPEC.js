class ACESPEC extends ITEM{
    constructor(...args){
        super(...args);
    }

    drawTop = trainerName => {
        let svg = "";
        let hasItemType = this.itemType !== null && this.itemType !== "";
        let topIcon = `<g class='TRAINER_ICON ACESPEC' transform='translate(2,2)'>${svgData.trainerIcons.trainer}</g>`;
        let nameBlock = `<g class='NAME' transform='translate(20, 13.5)'><text>${trainerName}</text></g>`;
        let typeLabel = hasItemType ? `<g class='TRAINER_TYPE_LABEL' transform='translate(48, 0)'>${svgData.itemTypes[this.itemType]}</g>` : "";
        let subTop = `<g class='SUB_TOP'>${ITEM_SUB_LABEL + typeLabel + ACESPEC_LABEL + TRAINER_SUB_LABEL}</g>`;

        svg = `<g class='TOP'>${this.baseParts.topRect}<g class='TOP_CONTENT' transform='translate(6,4)'>${topIcon + nameBlock}</g>${subTop}</g>`;
        
        return svg;
    }

    drawBody = effect => {
        let svg;
        let aceSpecBlock = "<g class='ACE_SPEC_NOTE' transform='translate(2, 211)'><rect x='0' y='0' width='178' height='18'/><text transform='translate(8,7)'>You may only have <tspan>1</tspan> copy of an <tspan>ACE SPEC</tspan> in your <tspan>DECK</tspan>. When you play this</text> <text transform='translate(8,14)'><tspan>ITEM</tspan>, and use its effect, send this <tspan>ITEM</tspan> to the <tspan>LOST ZONE</tspan>.</text></g>";
        let effectBlock="";
        let effectDesc = effect.drawSkill();
        let effectHeight = effect.calcHeight();
        let effectTop = 226 - (effectHeight/2) - 22;
        effectBlock += `<g class='SKILL ' transform='translate(2,${effectTop})'>${effectDesc}</g>`;

        svg = `<g class='BODY'>${effectBlock + aceSpecBlock}</g>`;
        return svg;
    }
}