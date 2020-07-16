class PKMN extends Card{
    constructor(pkmnName,hp,types,stage,retreatCost,special,...args){
        super(...args);
        this.pkmnName = pkmnName;
        this.hp = hp;
        this.types = types;
        this.stage = stage;
        this.retreatCost = retreatCost;

        this.isDualType = (this.types.length == 2);

        this.isSpecial = (special !== undefined && special !== null && special !== "");
        this.isGmax = (this.isSpecial && special.toLowerCase() == "gmax");
        this.isMega = (this.isSpecial && special.toLowerCase() == "mega");

        this.baseParts = this.drawBaseParts(this.set, this.rarity)
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

        svg = `<svg class='${cardClasses}' ${svgData.baseSvg}>
               ${this.baseParts["background"]}
               ${bottom}
               ${this.baseParts["inner"]}
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

        let typeIcons = this.isDualType ? buildTypeIcon(types[0]) + buildTypeIcon(types[1]) : buildTypeIcon(types[0]);

        svg = `<g class='TOP'>
               ${this.baseParts.topRect}
               <g class='TOP_CONTENT'>
               ${typeIcons}
               </g></g>`;

        return svg;
    }

    /*
     * DRAW BOTTOM
     * ----------------------------
     * Draws the Bottom Parts for the Card.
     * @Override
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {String}    svg     :   An SVG Strings
     */
    drawBottom = (setInfo, types, retreatCost) => {
        let svg;

        svg = `<g class='BOTTOM'>${this.baseParts["bottomBar"]}${setInfo}</g>`;

        return svg;
    }
}