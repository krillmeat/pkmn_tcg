class Card {
    constructor(cardType, set, rarity, isDark){
        this.cardType = cardType;
        this.set = set;
        this.rarity = rarity;
        this.isDark = isDark;
    }

    /*
     * DRAW CARD
     * ----------------------------
     * Draws the Card SVG into the Node Element
     * ----------------------------
     * @param   {Node}      elem    :   The Node Element that will have the Card Drawn in it (#card-body)
     * @return  {String}    svg     :   An SVG String
     */
    drawCard = elem => {
        let svg;

        // let baseParts = this.drawBaseParts(isDark);
        let setInfo = drawSetInfo(this.isDark, this.set, this.rarity);

        svg = `<svg class='CARD'></svg>`;

        return svg;
    }

    /*
     * DRAW BASE PARTS
     * ----------------------------
     * Draws the Base Parts for the Card. Things like background, borders, etc.
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {Ojbect}    svgObj  :   An Object of SVG Strings. Must be an Object, since the Borders are not assembled together in the Z-Index
     */
    drawBaseParts = () => {
        let svgObj = {};

        svgObj["outer"] = svgData.outerBorder;
        svgObj["inner"] = svgData.innerBorder;
        svgObj["background"] = svgData.background;

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
    drawSetInfo = (isDark, set, rarity) => {
        let svg;

        let back = `<rect class='fill-white stroke-white stroked' x='5.33' y='236.89' width='23.26' height='7'/>`;
        let setIcon = `<g class='SET_ICON'>${svgData.setIcons[set.toLowerCase()]}</g>`;

        svg = `<g class='SET_INFO'>${back}<g></g></g>`;

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
}

try{module.exports = Card;}catch(e){/* EXPORT FOR TESTING ONLY */}