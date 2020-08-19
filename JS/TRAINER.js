class TRAINER extends Card{
    constructor(trainerName, effect, ...args){
        super(...args);

        this.type = "trainer";
            
        this.trainerName = trainerName;
        this.effect = effect;
        this.baseParts = this.drawBaseParts(this.set, this.rarity);
    }

    drawCard = elem => {
        let svg;
        let bottom = this.drawBottom(this.baseParts.setInfo);
        let body = this.drawBody(this.effect);
        let top = this.drawTop(this.trainerName);
        let cardClasses = "CARD TRAINER";

        svg = `<svg class='${cardClasses}' ${svgData.baseSvg}>
               ${this.baseParts["background"]}
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

    drawBody = effect => {
        let svg;
        let effectBlock="";
        let effectDesc = effect.drawSkill();
        let effectHeight = effect.calcHeight();
        let effectTop = 226 - (effectHeight/2);
        effectBlock += `<g class='SKILL ' transform='translate(2,${effectTop})'>${effectDesc}</g>`;

        svg = `<g class='BODY'>${effectBlock}</g>`;
        return svg;
    }

}