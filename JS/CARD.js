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

        svg = `<svg class='CARD'></svg>`;

        return svg;
    }

    /*
     * DRAW BASE PARTS
     * ----------------------------
     * Draws the Base Parts for the Card. Things like background, borders, etc.
     * ----------------------------
     * @param   {Boolean}   isDark  :   True if the Card is meant to be mostly Dark (Most Secret Rares: Megas, Gmax, Ace Spec, etc.)
     * @return  {Array}     svg     :   An Array of SVG Strings. Must be an Array, since the Borders are not assembled together in the Z-Index
     */
    drawBaseParts = isDark => {
        let svgArray = [];

        svgArray.push(`<path d=''/>`);

        return svgArray;
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

        svg = `<g class='SET_INFO'></g>`;

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