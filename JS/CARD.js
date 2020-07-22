class Card {
    constructor(set, rarity){
        this.set = set;
        this.rarity = rarity;
    }

    /*
     * DRAW CARD
     * ----------------------------
     * Draws the Card SVG into the Node Element
     * ----------------------------
     * @param   {Node}      elem    :   The Node Element that will have the Card Drawn in it (#card-body)
     */
    drawCard = elem => {
        let svg;

        // let baseParts = this.drawBaseParts(isDark);

        svg = `<svg class='CARD'></svg>`;

        elem.innerHTML = svg;
    }

    /*
     * DRAW BASE PARTS
     * ----------------------------
     * Draws the Base Parts for the Card. Things like background, borders, etc.
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {Ojbect}    svgObj  :   An Object of SVG Strings. Must be an Object, since the Borders are not assembled together in the Z-Index
     */
    drawBaseParts = (set, rarity) => {
        let svgObj = {};

        svgObj["outer"] = svgData.outerBorder;
        svgObj["inner"] = svgData.innerBorder;
        svgObj["background"] = svgData.background;
        svgObj["setInfo"] = this.drawSetInfo(set, rarity);
        svgObj["bottomBar"] = svgData.bottomBar;
        svgObj["topRect"] = svgData.topRect;

        return svgObj;
    }

    /*
     * DRAW SET INFORMATION
     * ----------------------------
     * Draws the Set Information Section, located in the Bottom of the Card
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @param   {String}    set     :   The Set the Card is from
     * @param   {String}    rarity  :   The Rarity of the Card (C,U,R,S)
     * @return  {String}    svg     :   An SVG String
     */
    drawSetInfo = (set, rarity) => {
        let svg;

        let back = svgData.setInfoBack;
        let setIcon = `<g class='SET_ICON' transform='translate(.75,3.5) scale(.9)'>${svgData.setIcons[set.toLowerCase()]}</g>`;
        let cardRarity = `<text class='RARITY' transform='translate(8,9)'>${rarity}</text>`;
        let setNumber = `<text class='SET_NUMBER' transform='translate(14,8.6)'>${"000"}</text>`;

        svg = `<g class='SET_INFO'>${back}<g>${setIcon}${cardRarity}${setNumber}</g></g>`;

        return svg;
    }

    /*
     * DRAW TOP
     * ----------------------------
     * Draws the Top Parts for the Card.
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {String}    svg     :   An SVG Strings
     */
    drawTop = isDark => {
        let svg;

        svg = `<g class='TOP'></g>`;

        return svg;
    }

    /*
     * DRAW BOTTOM
     * ----------------------------
     * Draws the Bottom Parts for the Card.
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {String}    svg     :   An SVG Strings
     */
    drawBottom = isDark => {
        let svg;

        svg = `<g class='BOTTOM'></g>`;

        return svg;
    }

    /*
     * DRAW BODY
     */
    drawBody = () => {
        let svg;

        svg = "";

        return svg;
    }
}