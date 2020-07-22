class PKMN extends Card{
    constructor(pkmnName,hp,types,stage,retreatCost,special,skills,...args){
        super(...args);
        this.pkmnName = pkmnName;
        this.hp = hp;
        this.types = types;
        this.stage = stage;
        this.retreatCost = retreatCost;
        this.skills = skills;

        this.isDualType = (this.types.length == 2);

        this.isSpecial = (special !== undefined && special !== null && special !== "");
        this.isGmax = (this.isSpecial && special.toLowerCase() == "gmax");
        this.isMega = (this.isSpecial && special.toLowerCase() == "mega");

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

        let bottom = this.drawBottom(this.baseParts.setInfo, this.types, this.retreatCost);
        let top = this.drawTop(this.pkmnName, this.types, this.hp, this.stage);
        let cardClasses = this.isSpecial ? "CARD PKMN SPEC" : "CARD PKMN";
        let body = this.drawBody(this.skills);

        svg = `<svg class='${cardClasses}' ${svgData.baseSvg}>
               ${this.baseParts["background"]}
               ${bottom}
               ${this.baseParts["inner"]}
               ${body}
               ${top}
               ${this.baseParts["outer"]}
               </svg>`;

        elem.innerHTML = svg;
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
    drawTop = (pkmnName, types, hp, stage) => {
        let svg;

        let typeIcons = this.isDualType ? `<g class='TOP_TYPES'>${buildTypeIcon(types, 0, TOP_TYPE_SCALE) + buildTypeIcon(types, 1, TOP_TYPE_SCALE)}</g>` : `<g class='TOP_TYPES'>${buildTypeIcon(types, 0, TOP_TYPE_SCALE)}</g>`;

        let nameOffset = this.isDualType ? NAME_DUAL_TYPE_OFFSET : NAME_SINGLE_TYPE_OFFSET;
        let nameChunk = `<g class='NAME' transform='translate(${nameOffset})'><text>${pkmnName}</text></g>`;

        let hpOffset = hp >= 100 ? HP_OFFSET_TRIPLE_DIGIT : HP_OFFSET_DOUBLE_DIGIT;
        let hpChunk = `<g class='HP'>${svgData.hpShapes}<text class='HP_NO' transform='translate(${hpOffset})'>${hp}</text></g>`;

        let stageChunk = this.drawStage(stage);

        let typeBarsChunk = this.isDualType ? (this.drawTypeBar(types,false) + this.drawTypeBar(types,true)) : this.drawTypeBar(types,false);
        let typeBars = `<g class='TYPE_BARS' transform='translate(${TYPE_BARS_OFFSET})'>${typeBarsChunk}</g>`;

        svg = `<g class='TOP'>
               ${this.baseParts.topRect}
               <g class='TOP_CONTENT' transform='translate(${TOP_CONTENT_OFFSET})'>
               ${typeIcons}
               ${nameChunk}
               ${hpChunk}
               </g>
               ${stageChunk}
               ${typeBars}
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

        let iconBlock = `<g class='ICON_BLOCK ${type.toUpperCase()}'>
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

        let resistOffset = 20 + 0;

        let weakBlock = `<g class='WEAKNESS'>${TYPE_WEAK_GROUP}</g>`;
        let resistBlock = `<g class='RESISTANCE' transform='translate(${resistOffset},0)'>${TYPE_RESIST_GROUP}</g>`;

        let typeEffectBlock = `<g class='TYPE_EFFECT' transform='translate(${TYPE_EFFECT_OFFSET})'>${weakBlock + resistBlock}</g>`;

        svg = `<g class='BOTTOM' transform='translate(6,233)'>${this.baseParts["bottomBar"]}${setInfo}${typeEffectBlock}</g>`;

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
            skillOffset = i != 0 ? ( skills[i-1].calcHeight() / 2 ) + 5 : 0;
            skillsBlock += `<g class='SKILL' transform='translate(2,${skillOffset})'>${skills[i].drawSkill()}</g>`;
            overallHeight += skills[i].calcHeight();
        }

        let skillTop = 230 - (overallHeight/2) - (skills.length * 4.5);

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

        console.log("TYPE ONE WEAK: ",typeOneWeak);
        console.log("TYPE TWO WEAK: ",typeTwoWeak);
        console.log("TYPE ONE WEAK: ",typeOneResist);
        console.log("TYPE TWO WEAK: ",typeTwoResist);

        if(this.isDualType){
            for(let i = 0; i < typeDb.types.length; i++){

            }
        }

        a = [weak,resist];

        return a;
    }
}