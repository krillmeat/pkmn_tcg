class ABILITY extends SKILL{
    constructor(...args){
        super(...args);
    }

    drawSkill = () => {
        let svg;
        let top = this.drawTop(this.skillName);
        let desc = this.desc != "" ? this.drawDesc(this.desc) : "";

        let skillOffset = 150;

        // Normally, you would want the Skill to draw its own Wrapper (<g class='SKILL'>)
        // However, since the Skills must be aware of eachother to correctly position,
        //   you have to handle that one layer higher

        svg = `<g>${top} ${desc}</g>`;
        
        return svg;
    }

    /*
     * DRAW TOP
     * ----------------------------
     * @Override
     * Draws the Ability Top, which includes the Ability Name
     * ----------------------------
     * @return  {String}    svg     :   An SVG String
     */
    drawTop = skillName => {
        let svg;
        
        let abilityLabel = `<g class='ABILITY_LABEL'><polygon points='48.6,13.5 3.9,13.5 3.9,5.4 52.6,5.4'/><text transform='translate(14,11.5)'>ABILITY</text></g>`;
        let nameBlock = `<g class='NAME'><polygon points='178,13.8 48.4,13.8 51.1,5.2 178,5.2 '/><text transform='translate(55,12)'>${skillName}</text></g>`;

        svg = `<g class='ABILITY_TOP' transform='translate(-2,-2.5)'>${abilityLabel}${nameBlock}</g>`;

        return svg;
    }
}