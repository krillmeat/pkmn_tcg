class SKILL {
    constructor(skillName,skillDescription){
        this.skillName = skillName;
        this.desc = skillDescription;
        
        this.lineNo = 0;
        this.height = 0;
    }

    drawSkill = () => {
        let svg = "";

        svg = this.drawDesc(this.desc);

        return svg;
    }

    /**
     * DRAW TOP
     * ----------------------------
     * Draws the Skill Top. A Skill, by default, should return no Top.
     * Only PKMN have a Top to their Skills
     * ----------------------------
     * @return  {String}    svg     :   An SVG String
     */
    drawTop = () => {}

    /**
     * DRAW DESC
     * ----------------------------
     * Draws the Description Area of the Skill.
     * ----------------------------
     * @param   {String}    desc    :   The String of the Skill Description
     * @return  {String}    svg     :   An SVG String
     */
    drawDesc = desc => {
        let svg;

        let lines = desc.indexOf("%") != -1 ? this.createLineBreaks(desc) : [desc];
        this.lineNo = lines.length;

        let descRectH = 18 + ( (lines.length - 1) * 9.25 );
        let descRect = `<rect x='0' y='15' width='174' height='${descRectH}'/>`;

        let descBlock = "";

        for(let i = 0; i < lines.length; i++){
            descBlock += `<text transform='translate(0,${i * 9})'>${this.convertLine(lines[i])}</text>`;
        }

        svg = `<g class='SKILL_DESCRIPTION'>${descRect}<g class='DESC_TEXT' transform='translate(${SKILL_DESC_TYPE_OFFSET})'>${descBlock}</g></g>`;

        return svg;
    }

    /**
     * CONVERT LINE
     * ----------------------------
     * Takes a line of the Description and converts the Special Characters and labels
     * ----------------------------
     * @param   {String}    line    :   The Line of the Description to be modified
     * @return  {String}    svg     :   An SVG String
     */
    convertLine = line => {
        let svg = "";

        let starts = getAllIndex("[",line);
        let ends = getAllIndex("]",line);

        if(starts.length > 0){
            svg = line.substring(0,starts[0]);

            for(let i = 0; i < starts.length; i++){
                let sub = this.convertSub(line.substring(starts[i],ends[i]+1));

                svg += i != starts.length - 1 ? sub + line.substring(ends[i]+1, starts[i+1]) : sub;
            }

            svg += line.substring(ends[ends.length-1]+1, line.length);

        } else{
            svg = line;
        }

        return svg;
    }

    convertSub = sub => {
        let svg;

        let subBlock = "";
        let classLabel = "";
        let colorClass = "";

        let noBrackets = sub.substring(1,sub.length - 1);
        let hasBrace = noBrackets.indexOf("{") != -1;
        let energyIcon = "";

        if(hasBrace){
            // Do the Brace Stuff
            colorClass = noBrackets.substring(noBrackets.indexOf("{")+1,noBrackets.indexOf("}"));
            noBrackets = noBrackets.substring(0,noBrackets.indexOf("{")) + noBrackets.substring(noBrackets.indexOf("}")+1,noBrackets.length);
        }
        
        let isPKMN = noBrackets.toLowerCase() == "pkmn";
        let hasEnergy = noBrackets.indexOf("#") != -1;
        let isNumber = !isNaN(noBrackets);

        // REPLACE ENERGY SYMBOLS
        if(hasEnergy){
            energyIcon = colorClass;
            noBrackets = noBrackets.replace("#",`<tspan class='ICON'>${svgData.typeFontIconCodes[energyIcon]}</tspan>`);
        }

        if(isNumber){
            classLabel = "NUMBER";
        }

        // REPLACE PKMN
        if(isPKMN){
            noBrackets = noBrackets.replace("PKMN",`<tspan class='ICON HEAVY'>${svgData.typeFontIconCodes.pkmn}</tspan>`);
        }

        // CHECK FOR OTHER TEXT
        
        // CHECK FOR BRACES

        svg = `<tspan class='DESC_BOLD ${classLabel} ${colorClass.toUpperCase()}'>${noBrackets}</tspan>`;

        return svg;
    }

    /**
     * CREATE LINE BREAKS
     * ----------------------------
     * Takes a Description and breaks it into an Array of Strings
     * % Is used in the String to denote a Line Break
     * ----------------------------
     * @param   {String}    desc    :   The String of the Skill Description
     * @return  {Array}     a       :   An Array of Strings
     */
    createLineBreaks = desc => {
        let a = [];
        let lineStart = 0;
        let lineEnd = 0;
        let breaks = getAllIndex("%",desc);

        for(let i = 0; i < breaks.length; i++){
            lineEnd = breaks[i];
            a.push(desc.substring(lineStart,lineEnd));
            lineStart = breaks[i]+1;

            if(i == breaks.length - 1){
                a.push(desc.substring(lineStart,desc.length));
            }
        }

        return a;
    }

     /**
     * CALCULATE HEIGHT
     * ----------------------------
     * Gets the Total Height of the Skill
     * Used for positioning
     * ----------------------------
     * @return  {Number}    n   :   The total Height of the Skill
     */
    calcHeight = () => {
        let n;

        let descBaseOffset = this.lineNo >= 1 ? 43.08 : 0;

        let lineCalc = this.lineNo !== 0 ? this.lineNo - 1 : 0;

        n = 17.32 + descBaseOffset + ( lineCalc * 18.5 );

        return n;
    }

}