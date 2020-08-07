class ATTACK extends SKILL {
    constructor(type, cost, dmg, ...args){
        super(...args);
        this.type = type;
        this.cost = cost;
        this.dmg = dmg;

        this.dmgTextPolyWidth = 0;
    }

    drawSkill = () => {
        let svg;
        let top = this.drawTop(this.type, this.cost, this.skillName);
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
     * Draws the Skill Top, which includes Attack Name, Type, Damage, and Cost 
     * ----------------------------
     * @return  {String}    svg     :   An SVG String
     */
    drawTop = (type, cost, skillName) => {
        let svg;
        
        let costOffside = `<g class='COST_OFFSIDE ${type.toUpperCase()}-ALL'>${svgData.costOffside}</g>`;
        let costBlock = `<g class='COST' transform='translate(10,0)'>${this.drawCost(cost)}</g>`
        let dmgBlock = this.drawSkillDmg(this.dmg, this.type);
        let nameBlock = this.drawSkillName(cost, skillName, this.dmgTextPolyWidth);

        svg = `<g class='ATTACK_TOP'>${costOffside}${costBlock}${nameBlock}${dmgBlock}</g>`;

        return svg;

    }

    drawCost = cost => {
        let svg;

        let costBlock = "";

        for(let i = 0; i < cost.length; i++){
            costBlock += `<g class='COST_ICON ${cost[i].toUpperCase()}-ALL' transform='translate(${(i * 13.25)},0)'>${this.drawCostIcon(cost[i])}</g>`;
        }

        svg = `<g class='ATTACK_COST' transform='translate(.5,2)'>${costBlock}</g>`;

        return svg;
    }

    drawCostIcon = type => {
        let svg;

        svg = `${svgData.costIcon}<g class='COST_ICON_TYPE' transform='translate(${SKILL_COST_ICON_TYPE_OFFSET})'>${svgData.typeIcons[type]}</g>`;

        return svg;
    }

    drawSkillName = (cost,skillName,dmgPolyWidth) => {
        let svg;

        let bpL = 25.5;

        let dmgPolyOffset = 126.5 - dmgPolyWidth;

        let nameXOffset = (cost.length - 1) * 13.5;

        svg = `<g class='NAME' transform='translate(${nameXOffset},0)'><polygon  points='${bpL + dmgPolyOffset - nameXOffset},11.44 ${bpL},11.44 ${bpL+4},2.83 ${bpL + dmgPolyOffset + 4  - nameXOffset},2.83'/><text transform='translate(31,9.25)'>${skillName}</text></g>`;

        return svg;
    }

    drawSkillDmg = (dmg, type) => {
        let svg;

        let modChar = dmg.charAt(dmg.length-1);
        let isPlusMod = modChar === "+";
        let isMultMod = modChar === "x";
        let isMod = isMultMod || isPlusMod;

        svg = `<g class='DMG ${type.toUpperCase()}-ALL' transform='translate(155,0)'>${this.drawSkillDmgPolygon(dmg,isMod,modChar)}<g class='DMG_TYPE'>${SKILL_DMG_TYPE_POLYGON}<g class='DMG_ICON' transform='translate(${SKILL_DMG_TYPE_ICON_OFFSET})'>${svgData.typeIcons[type]}</g></g></g>`;

        return svg;
    }

    drawSkillDmgPolygon = (dmg, isMod, modChar) => {
        let svg;
        let modDmg = dmg;

        let polyOffset = 0;

        let modShape = "";

        if(isMod){ 
            modShape = modChar == "+" ? SKILL_DMG_MOD_ICON_PLUS : SKILL_DMG_MOD_ICON_MULT;
            modDmg = dmg.substring(0,dmg.length-1);
        }

        let blP = 0;
        let polyWidth = 0;
        let textOffset = 0;
        let modIconOffset = 0;
        let isNoDmg = modDmg == 0;

        if(!isNoDmg){
            if(modDmg < 100 && !isMod){
                polyOffset = -20;
                polyWidth = 20;
                textOffset = -12;
            } else if(modDmg >= 100 && !isMod){
                polyOffset = -21;
                polyWidth = 21;
                textOffset = -15;
            } else if(modDmg < 100 && isMod){
                polyOffset = -21;
                polyWidth = 21;
                textOffset = -15;
            } else if(modDmg >= 100 && isMod){
                polyOffset = -23;
                polyWidth = 23;
                textOffset = -17;
                modIconOffset = 2.75;
            }
        } else{
            
        }

        this.dmgTextPolyWidth = polyWidth;

        svg = !isNoDmg ? `<polygon class='SKILL_DMG_POLYGON' transform='translate(${polyOffset},0)' points='${blP + polyWidth},11.4 ${blP},11.4 ${blP + 4},2.8 ${blP + polyWidth + 4},2.8' />
                         <g class='SKILL_DMG_TEXT' transform='translate(${textOffset},9.5)'><text>${modDmg}</text><g transform='translate(${8.5 + modIconOffset},-5.25)'>${modShape}</g></g>` :
                         "";

        return svg;
    }
}