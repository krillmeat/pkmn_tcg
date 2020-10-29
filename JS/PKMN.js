class PKMN extends Card{
    constructor(pkmnName,hp,types,stage,retreatCost,special,skills,...args){
        super(...args);
        this.pkmnName = pkmnName;
        this.hp = hp;
        this.types = types;
        this.stage = stage;
        this.retreatCost = retreatCost;
        this.skills = skills;
        this.special = special;

        this.isDualType = (this.types.length == 2);

        this.isSpecial = (special !== undefined && special !== null && special !== "");
        this.isGmax = (this.isSpecial && special.toLowerCase() == "gmax");
        this.isMega = (this.isSpecial && special.toLowerCase() == "mega");
        this.isEX = this.isGmax || this.isMega || this.special === "hundredPercent";

        this.baseParts = this.drawBaseParts(this.set, this.rarity);

        this.typeEffect = this.calcWeakResist(this.types);
    }

    /*
     * DRAW CARD
     * ----------------------------
     * Draws the Card SVG into the Node Element
     * @Override
     * ----------------------------
     * @param   {Node}      elem    :   The Node Element that will have the Card Drawn in it (#card-body)
     * @return  {String}    svg     :   An SVG String
     */
    drawCard = elem => {
        let svg;

        let artSpecMod = this.isEX ? this.special : '';
        let art = `<image href='MEDIA/CARD_ART/PKMN/${artSpecMod + this.pkmnName}.jpg' width='178' x='5' y='10'/>`;
        let bottom = this.drawBottom(this.baseParts.setInfo, this.types, this.retreatCost);
        let top = this.drawTop(this.pkmnName, this.types, this.hp, this.stage, this.special);
        let cardClasses = this.isEX ? "CARD PKMN SPEC" : "CARD PKMN";
        let body = this.drawBody(this.skills);
        let overlays = this.drawOverlays(this.types, this.skills);

        svg = `<svg class='${cardClasses}' ${svgData.baseSvg}>
               ${this.baseParts["background"]}
               ${art}
               ${overlays}
               ${bottom}
               ${this.baseParts["inner"]}
               ${body}
               ${top}
               ${this.baseParts["outer"]}
               </svg>`;
        
        let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = svg;


        elem.appendChild(card);
    }

    /*
     * DRAW TOP
     * ----------------------------
     * Draws the Top Parts for the Card.
     * @Override
     * ----------------------------
     * @param   {String}    pkmnName    :   The PKMNs Name
     * @param   {Array}     types       :   An Array of Strings with the PKMNs Types
     * @param   {Int}       hp          :   The PKMNs HP Value
     * @param   {Array}     stage       :   An Array with the Stage Data ["stage","prevEvo"]
     * @return  {String}    svg         :   An SVG Strings
     */
    drawTop = (pkmnName, types, hp, stage, spec) => {
        let svg;

        let typeIcons = this.isDualType ? `<g class='TOP_TYPES'>${buildTypeIcon(types, 0, TOP_TYPE_SCALE) + buildTypeIcon(types, 1, TOP_TYPE_SCALE)}</g>` : `<g class='TOP_TYPES'>${buildTypeIcon(types, 0, TOP_TYPE_SCALE)}</g>`;

        let specOffset = this.isSpecial ? 14 : 0;

        let nameOffset = this.isDualType ? `${36 + specOffset},13.5` : `${20 + specOffset},13.5`;
        let nameChunk = `<g class='NAME' transform='translate(${nameOffset})'><text>${pkmnName}</text></g>`;

        let hpOffset = hp >= 100 ? HP_OFFSET_TRIPLE_DIGIT : HP_OFFSET_DOUBLE_DIGIT;
        let hpChunk = `<g class='HP'>${svgData.hpShapes}<text class='HP_NO' transform='translate(${hpOffset})'>${hp}</text></g>`;

        let stageChunk = this.drawStage(stage);

        let typeBarsChunk = this.isDualType ? (this.drawTypeBar(types,false) + this.drawTypeBar(types,true)) : this.drawTypeBar(types,false);
        let typeBars = `<g class='TYPE_BARS' transform='translate(${TYPE_BARS_OFFSET})'>${typeBarsChunk}</g>`;

        let specChunk = "";

        if(this.isSpecial){
            let specOffset = this.isDualType ? 33 : 17;
            specChunk = `<g class='SPEC_ICON' transform='translate(${specOffset},1.5) scale(.9)'>${svgData.specNameIcons[spec]}</g>`;
        }

        let bonusDMG = "";

        if(this.isSpecial){
            bonusDMG = `<g class='DMG_BOOST' transform='translate(${SPEC_DMG_BOOST_OFFSET})'><polygon points="5.3,1.8 45.3,1.8 45.2,8.8 1.3,8.8 "/><text transform='translate(${SPEC_DMG_BOOST_TEXT_OFFSET})'>20 DMG</text><g transform='translate(1,.25)'><rect x="8" y="3.3" class="st1" width="1.2" height="3.6"/><rect x="6.8" y="4.5" class="st1" width="3.6" height="1.2"/></g></g>`
        }

        svg = `<g class='TOP'>
               ${this.baseParts.topRect}
               <g class='TOP_CONTENT' transform='translate(${TOP_CONTENT_OFFSET})'>
               ${typeIcons}
               ${specChunk}
               ${nameChunk}
               ${hpChunk}
               </g>
               ${stageChunk}
               ${typeBars}
               ${bonusDMG}
               </g>`;

        return svg;
    }

    /*
     * DRAW STAGE
     * ----------------------------
     * Draws the Stage Section at the Top of the Card.
     * ----------------------------
     * @param   {Array}     stage   :   The Stage Data. [String, String]
     * @return  {String}    svg     :   An SVG Strings
     */
    drawStage = stage => {
        let svg;
        let warp = STAGE_SHAPE_WARP[stage[0].replace(/\s/g, '')];
        let subText = (stage[1] != undefined && stage[1] != "") ? `Evolves from ${stage[1]}` : "Put this PKMN on the Bench";
        let stageOffset = STAGE_MOD_OFFSET;
        let mainStage = `<g class='STAGE_MAIN'>
                         <polygon points='${33.9+warp},8.2 ${33.9+warp},1.2 1.4,1.2 1.4,8.2 1.4,8.2 1.4,18.2 21,18.2 26.6,8.2'/>
                         <text transform='translate(${STAGE_MAIN_TEXT_OFFSET})'>${stage[0]}</text>
                         </g>`;
        let subStage = `<g class='STAGE_SUB'>
                        <rect x='${36.6+warp}' y='1.2' width='${107.5 - warp}' height='6.9'/>
                        <text transform='translate(${41 + warp},6)'>${subText}</text>
                        </g>`;

        svg = `<g class='STAGE' transform='translate(${STAGE_OFFSET})'>${mainStage} ${subStage}</g>`;

        return svg;
    }

    /*
     * DRAW TYPE BARS
     * ----------------------------
     * Draws the Stage Section at the Top of the Card.
     * ----------------------------
     * @param   {Array}     stage       :   The Stage Data. [String, String]
     * @param   {Boolean}   isTypeTwo   :   True if the Type Bar is for the PKMN's Second Type
     * @return  {String}    svg         :   An SVG Strings
     */
    drawTypeBar = (types,isTypeTwo) => {
        let svg;

        let type = isTypeTwo ? types[1] : types[0];

        let typeNumber = isTypeTwo ? "TWO" : "ONE";
        let typeLengthMod = 4 * (type.length - 3);

        let typeBarOffset = isTypeTwo ? ( 40.5 + ( 4 * (types[0].length - 3) ) ) : 0;

        let iconBlock = `<g class='ICON_BLOCK ${type.toUpperCase()}-ALL'>
                         ${TYPE_BAR_ICON_POLYGON}
                         <g class='ICON' transform='translate(${TYPE_BAR_ICON_OFFSET})'>${svgData.typeIcons[type]}</g>
                         </g>`;
        let textBlock = `<g class='TEXT_BLOCK'>
                         <polygon points='18.5,0.51 ${40+typeLengthMod},0.51 ${36+typeLengthMod},7.51 14.5,7.51'/>
                         <text transform='translate(${TYPE_BAR_TEXT_OFFSET})'>${type}
                         </g>`;

        svg = `<g class='TYPE_BAR_${typeNumber}' transform='translate(${typeBarOffset},0)'>${iconBlock} ${textBlock}</g>`;

        return svg;
    }

    /*
     * DRAW BOTTOM
     * ----------------------------
     * Draws the Bottom Parts for the Card.
     * @Override
     * ----------------------------
     *
     * @return  {String}    svg     :   An SVG String
     */
    drawBottom = (setInfo, types, retreatCost) => {
        let svg;

        let resistOffset = 18 + ( (this.typeEffect[0].length -1) * 7.5 );

        let weakBlock = `<g class='WEAKNESS'>${TYPE_WEAK_GROUP} ${this.drawWeakResist(this.typeEffect[0])}</g>`;
        let resistBlock = `<g class='RESISTANCE' transform='translate(${resistOffset},0)'>${TYPE_RESIST_GROUP} ${this.drawWeakResist(this.typeEffect[1])}</g>`;

        let typeEffectBlock = `<g class='TYPE_EFFECT' transform='translate(${TYPE_EFFECT_OFFSET})'>${weakBlock + resistBlock}</g>`;

        let retreatBlock = `<g class='RETREAT_COST' transform='translate(${RETREAT_COST_OFFSET})'>${this.drawRetreat(retreatCost)}</g>`;

        let specBlock = this.isSpecial ? this.drawSpecRule() : "";

        svg = `<g class='BOTTOM' transform='translate(6,233)'>${this.baseParts["bottomBack"]+this.baseParts["bottomBar"]}${setInfo}${typeEffectBlock} ${retreatBlock} ${specBlock}</g>`;

        return svg;
    }

    /*
     * DRAW BODY
    * ----------------------------
     * Draws the Body Parts for the Card.
     * @Override
     * ----------------------------
     * @param   {Array}     skills  :   An Array of Skill Objects
     * @return  {String}    svg     :   An SVG String
     */
    drawBody = skills => {
        let svg;

        let skillsBlock = "";
        let skillOffset = 0;
        let overallHeight = 0;

        for(let i = 0; i < skills.length; i++){
            let emptyDesc = skills[i].desc == "" ? 5 : 0;
            let skillType = skills[i] instanceof ABILITY ? "ABILITY" : "ATTACK";
            skillOffset = i != 0 ? ( skills[i-1].calcHeight() / 2 ) + 5 : 0;
            skillsBlock += `<g class='SKILL ${skillType}' transform='translate(2,${skillOffset})'>${skills[i].drawSkill()}</g>`;
            overallHeight += skills[i].calcHeight();
        }

        let skillTop = 230 - (overallHeight/2) - (skills.length * 4.5);

        if(this.isSpecial) skillTop -= 24;

        svg = `<g class='SKILLS' transform='translate(0,${skillTop})'>${skillsBlock}</g>`;

        return svg;
    }

    /*
     * CALCULATE WEAKNESS & RESISTANCE
    * ----------------------------
     * Sets up the Array that handles your Weak/Resist Types
     * ----------------------------
     * @param   {Array}     types   :   An Array of Type Strings
     * @return  {Array}     a       :   An Array of two Arrays of Type Strings
     */
    calcWeakResist = types => {
        let a;

        let typeOneWeak = typeDb.matchups[types[0]][0];
        let typeTwoWeak = this.isDualType ? typeDb.matchups[types[1]][0] : [];
        let typeOneResist = typeDb.matchups[types[0]][1];
        let typeTwoResist = this.isDualType ? typeDb.matchups[types[1]][1] : [];
        let weak = [];
        let resist = [];

        if(this.isDualType){
            let typeArray = typeDb.types;
            for(let i = 0; i < typeArray.length; i++){
                let type = typeArray[i];
                let score = 0;
                if(typeOneWeak.includes(type) || typeTwoWeak.includes(type)) score++;
                if(typeOneResist.includes(type) || typeTwoResist.includes(type)) score--;
                
                if(score > 0){
                     weak.push(type);
                }else if(score < 0 ){
                    resist.push(type);
                }
            }
        }else{
            weak = typeOneWeak;
            resist = typeOneResist;
        }

        a = [weak,resist];

        return a;
    }

    /*
     * DRAW WEAKNESS || RESISTANCE
    * ----------------------------
     * Draws the SVG of Icons for either Resist or Weak
     * ----------------------------
     * @param   {Array}     types   :   An Array of Type Strings
     * @return  {String}    svg     :   An SVG String
     */
    drawWeakResist = types => {
        let svg;

        svg = `<g class='TYPE_ICON_LIST' transform='translate(${TYPE_ICON_LIST_OFFSET})'>`;

        for(let i = 0; i < types.length; i++){
            svg+=`<g transform='translate(${i*7},0) scale(.9)' class='${types[i].toUpperCase()}'>${svgData.typeIcons[types[i]]}</g>`
        }

        svg += "</g>";

        return svg;
    }

    /*
     * DRAW RETREAT
    * ----------------------------
     * Draws the Retreat Cost of a PKMN
     * ----------------------------
     * @param   {Number}    retreatCost :   The number of Retreat Cost
     * @return  {String}    svg         :   An SVG String
     */
    drawRetreat = retreatCost => {
        let svg;

        let retreatOffset = retreatCost !== 0 ? ((retreatCost-1)*4.5) : 0;
        let rectOffset = retreatCost !== 0 ? ((retreatCost-1)*4) : 0;

        svg = `<rect class='RC_BACK' x='${5 - rectOffset}' y='3.5' width='${16 + rectOffset}' height='7'/><g transform='translate(${7 - retreatOffset},4)'>`;

        for(let i = 0; i < retreatCost; i++){
            svg += `<g class='RC' transform='translate(${i*4.5},.4) scale(.7)'>${svgData.typeIcons.normal}</g>`;
        }

        svg += "</g><rect class='RC_DIVIDE' x='13.5' y='2' width='1' height='9'/><text transform='translate(16,7)'>R</text><text transform='translate(15.8,10)'>C</text>";

        return svg;
    }

    drawSpecRule = () => {
        let svg;

        let lineOne = `<text class='mega-warning' transform='translate(5,8.5)'>You may play this <tspan class='pkmn-icon'>&#xe90d</tspan> if you do not already have a <tspan class='bold'>SPEC</tspan> <tspan class='pkmn-icon'>&#xe90d</tspan> in play.</text>`;
        let lineTwo = `<text class='mega-warning' transform='translate(5, 16)'>When your <tspan class='bold'>opponent</tspan> <tspan class='bold'>ko</tspan>s this<tspan class='pkmn-icon'>&#xe90d</tspan>, they take <tspan class='bold'>2</tspan> <tspan class='bold'>prizes<tspan>.</text>`;

        svg = `<g class='SPEC_RULE' transform='translate(0,-25)'><rect x='0' y='0' width='172' height='22'/>${lineOne + lineTwo}</g>`;

        return svg;
    }

    /*
     * DRAW OVERLAY
    * ----------------------------
     * Draws the Retreat Cost of a PKMN
     * ----------------------------
     * @return  {String}    svg         :   An SVG String
     */
    drawOverlays = (types, skills) => {
        let svg;
        let top = "";

        if(!this.isSpecial){
            let pointOne = 104;
            let pointTwo;

            pointOne += (types[0].length - 3) * 4;
            if(types.length == 2) pointOne += (types[1].length - 3) * 4;

            if(types.length == 1) pointOne -= 40 ;

            pointTwo = (pointOne + 5.4).toString() + ",38.56";
            pointOne += ",47.59";

            top = `<polygon class='OVERLAY_TOP' transform='translate(1,2)' points='179.5,38.56 178.5,-2.93 0.5,-2.93 0.5,47.59 ${pointOne} ${pointTwo} 164.42,38.56'/>`;
        }else{
            top = `<rect x='2' y='2' width='178' height='47'/>`;
        }

        let bottomOffset = 0;

        for(let i = 0; i < skills.length; i++){
            bottomOffset += skills[i].calcHeight() + 12;
        }

        bottomOffset = bottomOffset/2;

        if(skills.length > 1) bottomOffset -= 2;

        if(this.isSpecial) bottomOffset += 23;

        let bottom = `<rect class='OVERLAY_BOTTOM' x='2' y='${229 - bottomOffset}' width='178' height='${20 + bottomOffset}'/>`;

        svg = `<g class='OVERLAYS'>${top + bottom}</g>`;

        return svg;
    }
}