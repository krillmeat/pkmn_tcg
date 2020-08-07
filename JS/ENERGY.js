class Energy extends Card{
    constructor(type,isSpecial,desc,name,...args){
        super(...args);
        this.type = type;
        this.isSpecial = isSpecial;
        this.effect = desc;
        this.specName = name;

        this.baseParts = this.drawBaseParts(this.set, this.rarity);
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

        let bottom = this.isSpecial ? this.drawBottom(this.type) : "";
        if(this.isSpecial && this.specName == "double colorless" || this.specName == "rainbow"){
            bottom = `<g class='BOTTOM'></g>`;
        }
        let top = this.drawTop(this.type, this.isSpecial, this.specName);
        let body = this.drawBody(this.type, this.isSpecial, this.effect, this.specName);
        let overlays = "";
        let cardClasses = this.isSpecial ? "CARD ENERGY SPEC" : "CARD ENERGY";

        svg = `<svg class='${cardClasses}' ${svgData.baseSvg}>
               <rect class='BACKGROUND ${this.type.toUpperCase()}' x='0.5' y='1.5' width='178' height='249'/>
               ${overlays}
               ${body}
               ${this.baseParts["inner"]}
               ${bottom}
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
     * @param   {Array}     type        :   An String of the Energy Type
     * @param   {Boolean}   spec        :   True if a Special Energy
     * @return  {String}    svg         :   An SVG Strings
     */
    drawTop = (type, spec, specName) => {
        let svg;

        let typeIcons = `<g class='TOP_TYPE'>${buildTypeIcon([type], 0, TOP_TYPE_SCALE)}</g>`;

        let nameOffset = "20,13.5";
        let nameText = spec ? specName + " energy" : type + " energy";
        if(specName == "double colorless"){ nameText = "double colorless" }
        let nameChunk = `<g class='NAME' transform='translate(${nameOffset})'><text>${nameText}</text></g>`;

        let subTop;
        let subTopBack = spec ? `<rect class='${type}' x='1.67' y='15' width='177.33' height='21'/>` : `<rect x='1.67' y='15' width='177.33' height='21'/>`;
        let subTopLeft = `<g class='LEFT'>
                            <polygon class='${type.toUpperCase()}-ALL' points="-1.5,25.8 23,25.8 19,32.8 -1.5,32.8"/>
                            <polygon class='${type.toUpperCase()}-ALL' points="26.9,25.8 54.9,25.8 54.9,32.8 22.9,32.8"/>
                            <g class='SUB_TYPE_ICON' transform='translate(9,25)'>${svgData.typeIcons[type]}</g>
                            <text transform='translate(30,31)'>ENERGY</text>
                        </g>`;
        let subTopRight = spec ? `<g class='RIGHT'><rect x="120.8" y="25.8" width="56" height="7"/><text transform='translate(125,31)'>SPECIAL ENERGY</text></g>` : `<g class='RIGHT'><rect x="120.8" y="25.8" width="56" height="7"/><text transform='translate(128,31)'>BASIC ENERGY</text></g>`;

        subTop = subTopBack + subTopLeft + subTopRight;

        svg = `<g class='TOP'>
               <g class='SUB_TOP'>${subTop}</g>
               <rect class='TOP_RECT ${type.toUpperCase()}' x='1.67' y='0.42' width='177.33' height='22'/>
               <g class='TOP_CONTENT' transform='translate(${TOP_CONTENT_OFFSET})'>
               ${typeIcons}
               ${nameChunk}
               </g>
               </g>`;

        return svg;
    }

    /*
     * DRAW BODY
     * ----------------------------
     * Draws the Body Parts for the Card.
     * @Override
     * ----------------------------
     * @param   {Array}     type        :   An String of the Energy Type
     * @param   {Boolean}   spec        :   True if a Special Energy
     * @return  {String}    svg         :   An SVG Strings
     */
    drawBody = (type, spec, desc, specName) => {
        let svg;

        let art = spec ? `<g class='ART'><foreignObject x='0.5' y='1.5' class='gray-back' width='178' height='249'><img src='MEDIA/CARD_ART/EG/special-energy-back.svg' class='ART'/></foreignObject></g>` : `<g class='ART'><foreignObject x='0.5' y='1.5' class='gray-back' width='178' height='249'><img src='MEDIA/CARD_ART/EG/basic-energy-white.svg' class='ART'/></foreignObject></g>`;

        if(specName == "rainbow"){
            art = `<g class='ART'><foreignObject x='0.5' y='1.5' class='gray-back' width='178' height='249'><img src='MEDIA/CARD_ART/EG/rainbow-energy-back.svg' class='ART'/></foreignObject></g>`;
        }

        let typeIcon = spec ? `<g class='TYPE_ICON ${type.toUpperCase()}' transform='translate(56,88) scale(8)'>${svgData.typeIcons[type]}</g>` : `<g class='TYPE_ICON' transform='translate(56,103) scale(8)'>${svgData.typeIcons[type]}</g>`;

        if(specName == "double colorless"){
            typeIcon = `<g class='TYPE_ICON ${type.toUpperCase()}' transform='translate(53,82) scale(7.5)'>${svgData.typeIcons[type]}</g><g class='TYPE_ICON ${type.toUpperCase()}' transform='translate(64,92) scale(7.5)'>${svgData.typeIcons[type]}</g>`
        } else if(specName == "rainbow"){
            typeIcon = "";
        }

        let effectChunk = "";

        if(spec){
            let effect = new SKILL(null,desc);

            let effectOffset = effect.calcHeight() + (9 * ( getAllIndex("%",desc).length ));
    
            effectChunk = `<g class='EFFECT' transform='translate(2,${202 - effectOffset})'>${effect.drawSkill()}</g>`
        }

        svg = `<g class='BODY'>${art + typeIcon + effectChunk}</g>`;

        return svg;
    }

    drawBottom = type => {
        let svg;

        svg = `<g class='BOTTOM' transform='translate(2,222)'><rect x='0' y='0' width='175' height='20'/><g transform='translate(10,8)'><text>This <tspan class='BOLD'>energy</tspan> may only be attached to a <tspan class='ICON ${type.toUpperCase()}'>${svgData.typeFontIconCodes[type] + svgData.typeFontIconCodes.pkmn}</tspan>. If the <tspan class='ICON'>${svgData.typeFontIconCodes.pkmn}</tspan> this <tspan class='BOLD'>energy</tspan> is</text><text transform='translate(0, 7)'>attached to loses its <tspan class='ICON ${type.toUpperCase()}'>${svgData.typeFontIconCodes[type]}</tspan> <tspan class='BOLD ${type.toUpperCase()}'>type</tspan>, discard this <tspan class='BOLD'>energy</tspan>.</text></g></g>`;

        return svg;
    }
}