const cardData = {
    rg: {
        bulbasaur: new PKMN("Bulbasaur",60,["grass","poison"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN]."),
                             new ATTACK("poison",["poison","normal"],"20","Poison Barb", "Put a [{poison}psn token] on the [defending] [PKMN].")]
                            ,"RG","C"),
        ivysaur: new PKMN("Ivysaur",80,["grass","poison"],["stage 1","bulbasaur"],2,null,
                            [new ABILITY("TOXIC EVOLUTION","When you play this [PKMN] from your [HAND] to [EVOLVE 1] of% your [PKMN], you may put a [{poison}PSN TOKEN] on your [OPPONENT]'[S]% [ACTIVE] [PKMN]."),
                             new ATTACK("grass",["grass","grass","normal"],"40","Vine Whip", "")]
                            ,"RG","U"),
        venusaur: new PKMN("Venusaur",130,["grass","poison"],["stage 2","ivysaur"],4,null,
                            [new ABILITY("Forest Curse","Whenever a [PKMN] takes [DMG] from [PSN], you may [{heal}HEAL]% [{dmg}20] [{dmg}DMG] from [1] of your [{grass}#] or [{poison}#] [PKMN]."),
                             new ATTACK("grass",["grass","grass","normal","normal"],"70","Toxic Drain", " [heal] [{dmg} 20] [{dmg}dmg] from this [PKMN] for each [{poison}PSN Token] on% the [defending] [PKMN].")]
                            ,"RG","R"),
        mVenusaur: new PKMN("Venusaur",160,["grass","poison"],["mega","venusaur"],4,"mega",
                            [new ABILITY("Hazard Pollen","Whenever [1] of your [{grass}#] or [{poison}#] [PKMN] would be [{heal}healed], you% may choose instead to place a [{poison}PSN TOKEN] on [1] of your% [OPPONENT]'[s] [PKMN].")]
                            ,"RG","S"),
        gVenusaur: new PKMN("Venusaur",170,["grass","poison"],["gmax","venusaur"],4,"gmax",
                            [new ABILITY("GMAX Vine Lash","Whenever this [PKMN] deals [{dmg}DMG] with an [attack] to a% [{poison}PSND] [PKMN], deal [HALF] (round up) of that [{dmg}DMG] to [1] of% your [opponent]'[s] [benched] [PKMN].")]
                            ,"RG","S"),
        charmander: new PKMN("Charmander",60,["fire"],["basic"],1,null,
                            [new ATTACK("fire",["fire"],"0","Gather Flames","Attach a [{fire}BASIC# ENERGY] from your [discard] to this [PKMN]."),
                            new ATTACK("fire",["fire","normal"],"20","Fire Fang", "Put a [{fire}brn token] on the [defending] [PKMN].")]
                            ,"RG","C"),
        charmeleon: new PKMN("Charmeleon",80,["fire"],["stage 1","charmander"],2,null,
                            [new ABILITY("Kindling","Whenever [1] of your [{fire}#] [{fire}PKMN] [DISCARDS] [{fire}BASIC# ENERGY]% when [ATTACKING], you may attach [1] of those [energy] to% this [PKMN]."),
                            new ATTACK("fire",["fire","fire","normal"],"60","Fire Fang", "Discard [{fire}1# Energy] from this [PKMN].")]
                            ,"RG","U"),
        charizard: new PKMN("Charizard",120,["fire","flying"],["stage 2","charmeleon"],2,null,
                            [new ABILITY("Energy Burn","All [energy] attached to your [{fire}#] [{fire}PKMN] are treated as [{fire}basic#]% instead of their original [type]."),
                            new ATTACK("fire",["fire","fire","fire","fire"],"100","Fire Blast", "Discard [{fire}1# Energy] from this [PKMN].")]
                            ,"RG","R"),
        mCharizardY: new PKMN("Charizard",140,["fire","flying"],["mega","charizard"],2,"mega",
                            [new ABILITY("Scorching Drought","Whenever [1] of you [{fire}#] [{fire}PKMN] discards a [{fire}# ENERGY] during an% [attack], that [attack] deals [{dmg}10] more [{dmg}DMG] for each% [energy] discarded in this way.")]
                            ,"RG","S"),
        mCharizardX: new PKMN("Charizard",140,["fire","dragon"],["mega","charizard"],3,"mega",
                            [new ABILITY("Cool Power","This [ability] is mondo cool!")]
                            ,"RG","S"),
        gCharizard: new PKMN("Charizard",150,["fire","flying"],["gmax","charizard"],2,"gmax",
                            [new ABILITY("GMAX WILDFIRE","All [{fire}# Energy] attached to this [PKMN] count as [{fire}2][{fire}# Energy].")]
                            ,"RG","S"),
        flareon: new PKMN("Flareon",80,["fire"],["stage 1","eevee"],1,null,
                            [new ABILITY("Flame Guard","Your [PKMN] are not affected by being [{fire}BRND]."),
                            new ATTACK("fire",["fire"],"10x","Blaze Strike","Does [{dmg}10] [{dmg}dmg] for each [{fire}BRND] [PKMN] in play.")],
                            "RG","R"),
        blastoise: new PKMN("Blastoise",120,["water"],["stage 2","wartortle"],4,null,
        [new ABILITY("Rain Dance","You may attach any number of [{water}basic # energy] from your% [hand] to your [{water}#] [{water}PKMN] in any way you like."),
            new ATTACK("water",["water","water","normal"],"20+","Hydro Pump", "Does [{dmg}10] more [{dmg}dmg] for each [{water}# energy] attached to this [PKMN].")]
        ,"RG","R"),
        mBlastoise: new PKMN("Blastoise",150,["water"],["mega","blastoise"],4,"mega",
        [new ABILITY("Downpour","Whenever [1] of you [{water}#] [{water}PKMN] deals increased [{dmg}dmg] in an [attack]% because of the number of [{water}# energy] attached to them, you% may choose to discard up to [4] of those [{water}# energy], to deal% an extra [{dmg}10] [{dmg}dmg] per [energy] you discard.")]
        ,"RG","S"),
        gBlastoise: new PKMN("Blastoise",160,["water"],["gmax","blastoise"],4,"gmax",
        [new ABILITY("GMAX CANNONADE","When you play this [PKMN] from your [hand] to [evolve] [1] of your% [PKMN], you may attach any number of [{water}basic # energy] from% your [discard] to this [PKMN]. Then, switch this [PKMN] with your% [Active] [PKMN].")]
        ,"RG","S"),
        nidoking: new PKMN("Nidoking",100,["poison","ground"],["stage 2","nidorino"],4,null,
        [ new ATTACK("poison",["poison","poison"],"30","Sludge Wave","Put [{poison} 2] [{poison}psn tokens] on your [opponent]'[s] [PKMN] in any% way you like."),
        new ATTACK("poison",["poison","ground","normal","normal"],"60","Toxic Quake","Deal [{dmg}10] [{dmg}dmg] to each of your [opponent]'[s benched] [PKMN]% for each [{poison}psn token] on the [defending] [PKMN].")],
        "RG","R"),
        eevee: new PKMN("Eevee",50,["normal"],["basic"],1,null,
                            [new ABILITY("Energy Evolution","When you attach an [energy] from your [hand] to this [PKMN],% you may search your [deck] for a [PKMN] that [evolves] from% this [PKMN] that is the same [TYPE] as that [energy] and use it% to [evolve] this [PKMN]."),
                            new ATTACK("normal",["normal"],"0","Fetch","Draw [2] [Cards].")],
                            "RG","C")
    },

    gs: {
        chikorita: new PKMN("Chikorita",60,["grass"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN].")]
                            ,"GS","C"),
        meganium: new PKMN("Meganium",130,["grass"],["stage 2","bayleef"],4,null,
                            [new ABILITY("Energy Trans","You may move any number of [{grass}# energy] from [1] of your% [{grass}#] [{grass}PKMN] to another one of your [{grass}#] [{grass}PKMN]."),
                            new ATTACK("grass",["grass","grass","normal"],"70","Giant Bloom","Heal [{dmg}20] [{dmg}dmg] from this [PKMN].")]
                            ,"GS","R"),
        larvitar:   new PKMN("Larvitar",50,["rock","ground"],["basic"],1,null,
                            [new ATTACK("rock",["normal"],"0","Mountain Eater"," [Discard] the top card of your [OPPONENT]'[S DECK].")]
                            ,"GS","C"),
        pupitar:   new PKMN("Pupitar",80,["rock","ground"],["stage 1","larvitar"],2,null,
                            [new ABILITY("Shell Evolution","If this [PKMN] was not put into play this turn, you may search your% [DISCARD] for a [PKMN] that [evolves] from this [PKMN] and use it to% [evolve] this [PKMN]. Then, deal [{dmg}20] [{dmg}dmg] to this [PKMN]."),
                            new ATTACK("rock",["normal"],"0","Rock Tackle","This [PKMN] deals [{dmg}10] [{dmg}dmg] to itself.")]
                            ,"GS","U"),
        tyranitar: new PKMN("Tyranitar",120,["rock","dark"],["stage 2","pupitar"],4,null,
                            [new ATTACK("rock",["rock","normal","normal"],"40","Rock Slide","This [attack] does [{dmg}10] [{dmg}dmg] to each [benched] [PKMN] with no% [{dmg}dmg], other than [{rock}#] [{rock}PKMN]."),
                            new ATTACK("dark",["dark","dark","normal","normal"],"50+","Dark Quake","This [Attack] does [{dmg}10] more [{dmg}dmg] for each [PKMN] in play that% has any [{dmg}dmg] on them.")]
                            ,"GS","R"),
        mTyranitar: new PKMN("Tyranitar",160,["rock","dark"],["mega","tyranitar"],4,"mega",
        [new ABILITY("Shell Evolution","The [attacks] of your [{rock}] and [{dark}] [PKMN] deal [{dmg}20] more [{dmg}dmg] to% a [defending] [PKMN] that has already taken [{dmg}dmg].")]
                            ,"GS","S")
    },

    rs: {
        treecko: new PKMN("Treecko",60,["grass"],["basic"],0,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN].")]
                            ,"RS","C"),
        grovyle: new PKMN("Grovyle",80,["grass"],["stage 1","treecko"],0,null,
                            [new ABILITY("Forrage","Once per turn, you may put a [{grass}Basic # Energy] from your% [discard] into your [hand]."),
                            new ATTACK("grass",["grass","grass"],"40","Razor Leaf","Return a [{grass}# energy] attached to this [PKMN] to your [hand].")]
                            ,"RS","U"),
        sceptile: new PKMN("Sceptile",110,["grass"],["stage 2","grovyle"],1,null,
                            [new ABILITY("Energy Bloom","Once per turn, you may attach a [{grass} # Energy] from% your [hand] to this [PKMN]. If you do, deal [{dmg}20] [{dmg}dmg] to this [PKMN]."),
                            new ATTACK("grass",["grass","grass"],"60","Leaf Blade","Return a [{grass}# energy] attached to this [PKMN] to your [hand].")]
                            ,"RS","R"),
        mSceptile: new PKMN("Sceptile",140,["grass","dragon"],["mega","sceptile"],2,"mega",
                            [new ABILITY("Jagged Saber","The [attacks] of your [{grass}#] [PKMN] are increased by [{dmg}20] [{dmg}dmg] for% each [{grass}# Energy] attached to that [PKMN] during that turn.")]
                            ,"RG","S"),
        roselia: new PKMN("Roselia",50,["grass","poison"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Sweet Scent"," [heal] [{dmg}20] [{dmg}dmg] from one of your [{grass}#] or [{poison}#] [PKMN]."),
                            new ATTACK("poison",["normal"],"0","Sweet Scent"," [heal] [{dmg}20] [{dmg}dmg] from one of your [{grass}#] or [{poison}#] [PKMN].")]
                            ,"RS","C"),
        swampert: new PKMN("Swampert",110,["water","ground"],["stage 2","marshtomp"],3,null,
        [new ABILITY("Energy Flood"," [discard] a [{water}# energy] from your [hand] to attach [{ground}2] [{ground}basic]% [{ground}# energy] from your [hand] to [1] of your [{water}#] or [{ground}#] [PKMN]."),
        new ATTACK("water",["water","normal"],"30+","Muddy Water","Does [{dmg}10] more [{dmg}dmg] for each [{water}# energy] attached to this [PKMN].% Then, for each [{ground}# energy] attached to this [PKMN], deal% [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s] [benched] [PKMN]. Then,% discard [{ground}2] [{ground}# energy] attached to this [PKMN].")]
        ,"RS","R"),
        mSwampert: new PKMN("Swampert",150,["water","ground"],["mega","swampert"],4,"mega",
        [new ABILITY("Quaking Whirlpool","If any of your [{water}#] or [{ground}#] [PKMN] has any [{water}# energy] attached, that% [PKMN]s [{ground}# energy] counts as [1] extra [{ground}basic # energy].")]
        ,"RS","S"),
        manectric: new PKMN("Manectric",80,["electric"],["stage 1","electrike"],0,null,
                            [new ATTACK("electric",["normal"],"30","Charge Bolt","Search your [deck] for an [{electric}# energy] and attach it to [1]% of your [{electric}#] [{electric}PKMN]."),
                            new ATTACK("electric",["electric","normal"],"50","Volt Switch","Switch this [PKMN] with [1] of your [benched] [PKMN].")]
                            ,"RS","R"),
        mManectric: new PKMN("Manectric",110,["electric"],["mega","manectric"],0,"mega",
                            [new ABILITY("Turbo Bolt","If this [PKMN] became your [active] [PKMN] this turn, this [PKMN]s% [attacks] deal [{dmg}30] more [{dmg}dmg].")]
                            ,"RS","S"),
        deoxsys: new PKMN("Deoxsys",70,["psychic"],["basic"],2,null,
        [new ABILITY("DNA Splice","Once per turn, you may [discard] a [{psychic}basic # energy]% from your [hand] to change this [PKMN][s] [ability] to another [1]% of your [{psychic}#] [{psychic}PKMN][{psychic}s] [abilities] for this turn."),
        new ATTACK("psychic",["psychic","normal"],"30+","Psychic","Does [{dmg}10] more [{dmg}dmg] for each [energy] attached to the% [defending] [PKMN].")]
        ,"RS","R"),
    },

    dp: {
        turtwig: new PKMN("Turtwig",60,["grass","ground"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN].")]
                            ,"DP","C"),
        roserade: new PKMN("Roserade",70,["grass","poison"],["stage 1","roselia"],2,null,
                            [new ABILITY("POLLEN FEVER","When you attach a [{grass}# energy] from your [hand] to this [PKMN],% you may put a [{psychic}CONF TOKEN] on the [DEFENDING] [PKMN]. When% you attach a [{poison}# ENERGY] from your [HAND] to this [PKMN], you% may put a [{poison}psn token] on the [defending] [PKMN]."),
                             new ATTACK("grass",["grass","normal"],"30","Long Whip", "If the [defending] [PKMN] is [{poison}PSND], deal [{dmg}20] [{dmg}dmg] to [1] of your% [OPPONENT]'[s] [benched] [PKMN].")]
                            ,"DP","U")
    },

    bw: {

    },


    xy: {
        zygardeCell: new PKMN("Zygarde C",30,["dragon","ground"],["basic"],0,null,
        [new ABILITY("Cell Regeneration","One per turn, if this [PKMN] is in your [discard], you may shuffle% it into your [deck]."),
         new ATTACK("normal",["normal"],"10","Tackle", "")]
        ,"XY","C"),
        zygardeCore: new PKMN("Zygarde",40,["dragon","ground"],["basic"],0,null,
        [new ABILITY("Cell Gift","One per turn, if this [PKMN] is in your [discard], you may attach it% as a [tool] to [1] of your [zygarde] in play. As a [tool], when the% [PKMN] this is attached to deals [{dmg}dmg], you may deal [{dmg}20] [{dmg}dmg] to [1]% of your [opponent]'[s] [PKMN]."),
         new ATTACK("normal",["normal"],"10","Tackle", "")]
        ,"XY","C"),
        zygardeTen: new PKMN("Zygarde",60,["dragon","ground"],["basic"],0,null,
        [new ABILITY("Cell Birth","If this card is in you [hand], you may [discard] [1]% [Zygarde C] to play this [PKMN] on your [bench]. You may% not put this [PKMN] into play any other way."),
         new ATTACK("dragon",["dragon"],"30","Cell Rush", "This [attack] does [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s]% [benched] [PKMN].")]
        ,"XY","U"),
        zygardeFifty: new PKMN("Zygarde",110,["dragon","ground"],["basic"],3,null,
        [new ABILITY("Cell Birth","If this card is in you [hand], you may [discard] [2]% [Zygarde C] to play this [PKMN] on your [bench]. You may% not put this [PKMN] into play any other way."),
         new ATTACK("dragon",["dragon","ground"],"30+","Cell Rush", "This [attack] does [{dmg}10] more [{dmg}dmg] for each [zygarde] in play.")]
        ,"XY","R"),
        zygardeHundred: new PKMN("Zygarde",150,["dragon","ground"],["basic"],4,"hundredPercent",
        [new ABILITY("Cell Birth","If this card is in your [hand], you may [discard] [4]% [Zygarde C] to play this [PKMN] on your [bench]. You may% not put this [PKMN] into play any other way."),
         new ATTACK("dragon",["dragon","dragon","ground","normal"],"30x","Cell Storm", "This [attack] does [{dmg}30] [{dmg}dmg] for each [zygarde] in play.")]
        ,"XY","S"),
    },

    sm: {

    },

    ss: {

    },

    eg: {
        basicGrass: new Energy("grass",false,null,null,"EG","C"),
        basicFire: new Energy("fire",false,null,null,"EG","C"),
        basicWater: new Energy("water",false,null,null,"EG","C"),
        basicElectric: new Energy("electric",false,null,null,"EG","C"),
        basicPsychic: new Energy("psychic",false,null,null,"EG","C"),
        basicFighting: new Energy("fighting",false,null,null,"EG","C"),
        basicRock: new Energy("rock",false,null,null,"EG","C"),
        basicGround: new Energy("ground",false,null,null,"EG","C"),
        basicPoison: new Energy("poison",false,null,null,"EG","C"),
        basicBug: new Energy("bug",false,null,null,"EG","C"),
        basicIce: new Energy("ice",false,null,null,"EG","C"),
        basicGhost: new Energy("ghost",false,null,null,"EG","C"),
        basicFlying: new Energy("flying",false,null,null,"EG","C"),
        basicDragon: new Energy("dragon",false,null,null,"EG","C"),
        basicDark: new Energy("dark",false,null,null,"EG","C"),
        basicSteel: new Energy("steel",false,null,null,"EG","C"),
        basicFairy: new Energy("fairy",false,null,null,"EG","C"),
        herbal: new Energy("grass",true,"When you attach this [energy] from your [hand] to [1] of your% [{grass}#] [{grass}PKMN], you may [{heal}heal] [{dmg}30] [{dmg}dmg] from that [PKMN].","herbal","EG","R"),
        blaze: new Energy("fire",true,"When this [ENERGY] is [DISCARDED] from an [ability] or% [attack] of [1] of your [{fire}#] [{fire}PKMN], you may return it to your [hand].","blaze","EG","R"),
        splash: new Energy("water",true,"When you attach this [energy] from your [hand] to [1] of your% [{water}#] [{water}PKMN], it does not count as your [energy] attachment for the% turn.","splash","EG","R"),
        zap: new Energy("electric",true,"Whenever the [{electric}PKMN] this [energy] is attached to deals any% amount of [{dmg}dmg] to itself, you may deal [{dmg}10] of that [{dmg}dmg] to the% [defending] [PKMN] instead.","zap","EG","R"),
        synchro: new Energy("psychic",true,"You may freely move this [{psychic}energy] between your [{psychic}#] [{psychic}PKMN] as% often as you like during your turn. When the [{psychic}#] [{psychic}PKMN] this% [energy] is attached to is [ko]'d, you may move it to another% [{psychic}#] [{psychic}PKMN] instead of discarding it.","synchro","EG","R"),
        quake: new Energy("ground",true,"When the [{ground}#] [{ground}PKMN] this [energy] is attached to deals [{dmg}dmg]% to the [defending] [PKMN], you may deal [{dmg}20] [{dmg}dmg] to your% [opponent]'[s] [benched] [PKMN], split any way.","quake","EG","R"),
        toxic: new Energy("poison",true,"When the [{poison}#] [{poison}PKMN] this [energy] is attached to deals [{dmg}dmg] to% the [defending] [PKMN], put a [{poison}psn token] on that [PKMN].","toxic","EG","R"),
        swarm: new Energy("bug",true,"The [{bug}#] [{bug}PKMN] this [energy] is attached to does not count as% taking up a space on your [bench]. If this [energy] is removed% from a [PKMN], and your bench has more than [5] [PKMN], return% that [PKMN] and all cards attached to it to your [hand].","swarm","EG","R"),
        cyclone: new Energy("flying",true,"When you attach this [energy] from your [hand] to your% [active] [{flying}#] [{flying}PKMN], you may switch the [defending] [PKMN] with [1]% of your [opponent]'[s] [benched] [PKMN]. The [{flying} #] [{flying}PKMN] that this% [energy] is attached to has no [retreat cost].","cyclone","EG","R"),
        ascendant: new Energy("dragon",true,"When you attach this [energy] to [1] of your [{dragon}#] [{dragon}PKMN], you may% search your [deck] for a [PKMN] that [evolves] from that [PKMN] and% put it onto that [PKMN] (you can do this on the first turn a [PKMN] was% brought into play). If the [PKMN] this [energy] is attached to is a% [fully evolved] [PKMN], this [PKMN][s] [attacks] do [{dmg}10] more [{dmg}dmg].", "ascendant", "EG", "R"),
        iron: new Energy("steel",true,"When the [{steel}#] [{steel}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], this [PKMN] is not affected by any additional% effects caused by that [attack]. This [energy] increases the% [retreat cost] of the [PKMN] it's attached to is increased by [1].","iron","EG","R"),
        doubleColorless: new Energy("normal",true,"This [energy] counts as [{normal}2] [{normal}# energy].","double colorless", "EG", "R"),
        rainbow: new Energy("normal",true,"This card provides [{normal}# energy]. While in play, this [energy]% provides every type of [Energy] but provides only [1] [energy]% at a time. When you attach this [energy] to a [PKMN], deal% [{dmg}10] [{dmg}dmg] to that [PKMN].","rainbow","EG","R")
    }
}