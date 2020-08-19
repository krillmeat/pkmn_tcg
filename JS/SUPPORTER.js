class SUPPORTER extends TRAINER{
    constructor(...args){
        super(...args);
    }

    drawTop = trainerName => {
        let svg = "";
        let topIcon = `<g class='TRAINER_ICON SUPPORTER' transform='translate(2,2)'>${svgData.trainerIcons.trainer}</g>`;
        let nameBlock = `<g class='NAME' transform='translate(20, 13.5)'><text>${trainerName}</text></g>`;
        let subTop = `<g class='SUB_TOP'>${SUPPORTER_SUB_LABEL + TRAINER_SUB_LABEL}</g>`;

        svg = `<g class='TOP'>${this.baseParts.topRect}<g class='TOP_CONTENT' transform='translate(6,4)'>${topIcon + nameBlock}</g>${subTop}</g>`;
        
        return svg;
    }

    drawBottom = setInfo => {
        let svg = "";

        let supporterBlock = "<g class='SUPPORTER_NOTE' transform='translate(14,3)'><rect x='36' y='0' width='120' height='8'/><text transform='translate(40,5.5)'>You may only play 1 supporter during your turn.</text></g>";

        svg = `<g class='BOTTOM' transform='translate(6,233)'>${this.baseParts["bottomBack"]+this.baseParts["bottomBar"]}${setInfo}${supporterBlock}</g>`;

        return svg;
    }
}