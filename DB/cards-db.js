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
            new ATTACK("grass",["grass","grass","normal","normal"],"70","Toxic Drain", " [{heal}heal] [{dmg} 20] [{dmg}dmg] from this [PKMN] for each [{poison}PSN Token] on% the [defending] [PKMN].")]
        ,"RG","R"),
        mVenusaur: new PKMN("Venusaur",160,["grass","poison"],["mega","venusaur"],4,"mega",
        [new ABILITY("Hazard Pollen","Whenever [1] of your [{grass}#] or [{poison}#] [PKMN] would be [{heal}healed], you% may choose instead to place a [{poison}PSN TOKEN] on [1] of your% [OPPONENT]'[s] [PKMN].")]
        ,"RG","S"),
        gVenusaur: new PKMN("Venusaur",170,["grass","poison"],["gmax","venusaur"],4,"gmax",
        [new ABILITY("GMAX Vine Lash","Whenever this [PKMN] deals [{dmg}DMG] with an [attack] to a% [{poison}PSND] [PKMN], deal [HALF] (round up) of that [{dmg}DMG] to [1] of% your [opponent]'[s] [benched] [PKMN].")]
        ,"RG","S"),
        oddish: new PKMN("Oddish",40,["grass","poison"],["basic"],1,null,
        [new ATTACK("grass",["normal"],"10","Absorb"," [{heal}Heal] [{dmg}10] [{dmg}dmg] from this [PKMN].")]
        ,"RG","C"),
        gloom: new PKMN("Gloom",70,["grass","poison"],["stage 1","oddish"],2,null,
                        [new ABILITY("Toxic Waft","Once per turn, you may search your [discard] for a [{poison}basic]% [{poison}#] [{poison}Energy] and attach it to this [PKMN]."),
                         new ATTACK("poison",["poison","normal"],"20+","Dizzying Stench","If the [defending] [PKMN] is [{psychic}confused], this [attack] does [{dmg}20]% more [{dmg}dmg]. Then, put a [{poison}psn token] on the [defending] [PKMN].")]
                        ,"RG","U"),
        vileplume: new PKMN("Vileplume",100,["grass","poison"],["stage 2","gloom"],3,null,
                            [new ABILITY("Pollen Fever"," [Neither player] may play [{water}items] from their [hand]."),
                            new ATTACK("grass",["normal","normal","normal"],"30","Dazzling Pollen","For each [energy] of the following [type], put a corresponding% [special condition] token on the [defending] [PKMN]. For a% [{grass}#] [{grass}Energy], a [{psychic}conf token]. For a [{poison}#] [{poison}energy], a [{poison}psn]% [{poison}token]. For a [{fire}#] [{fire}energy], a [{fire}brn token].")]
                            ,"RG","R"),
        bellsprout: new PKMN("Bellsprout",40,["grass","poison"],["basic"],1,null,
                            [new ATTACK("grass",["grass"],"20","Vine Whip",""),
                             new ATTACK("poison",["poison"],"0","Poison Trap","Put [{poison}1] [{poison}psn token] on the [defending] [PKMN]. The [defending]% [PKMN] cannot [retreat] during your [opponent]'[s] next turn.")]
                            ,"RG","C"),
        weepinbell: new PKMN("Weepinbell",60,["grass","poison"],["stage 1","bellsprout"],2,null,
                            [new ABILITY("Poisonous Lure","Once per turn, if this [PKMN] is your [Active] [PKMN], you may remove% [{poison}2] [{poison}psn tokens] from [1] of your [opponents] [benched] [PKMN]% in order to switch that [PKMN] with your [opponents] [active] [PKMN]."),
                             new ATTACK("poison",["poison","poison"],"0","Belch","Put [{poison}2] [{poison}psn tokens] on [1] of your [opponent]'[s] [benched] [PKMN].")]
                            ,"RG","U"),
        victreebel: new PKMN("Victreebel",90,["grass","poison"],["stage 2","weepinbell"],3,null,
        [new ABILITY("Toxic Grasp","If this [PKMN] is your [active] [PKMN] and the [defending] [PKMN] returns% to the [bench], put a [{poison}psn] and [{fire}brn] [token] on that [PKMN]."),
        new ATTACK("grass",["grass","poison","normal"],"30x","Corrossive Acid","Deals [{dmg}30] [{dmg}dmg] times the number of [{poison}psn] and [{fire}brn] [tokens]% on the [defending] [PKMN].")]
        ,"RG","R"),
        exeggcute: new PKMN("Exeggcute",30,["grass","psychic"],["basic"],2,null,
                            [new ABILITY("Propogate","If this [PKMN] is in your [discard], you may put it on your [bench]."),
                             new ATTACK("grass",["normal"],"10x","Egg Barrage","Does [{dmg}10] [{dmg}dmg] times the number of [exeggcute] and% [exeggutor] in play.")]
                            ,"RG","C"),
        exeggutor: new PKMN("Exeggutor",60,["grass","psychic"],["stage 1","exeggutor"],3,null,
        [new ATTACK("grass",["normal"],"10","Attack","Attack Effect")]
        ,"RG","U"),
        tangela: new PKMN("Tangela",50,["grass"],["basic"],2,null,
        [new ATTACK("grass",["normal"],"10","Attack","Attack Effect")]
        ,"RG","C"),
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
        new ATTACK("fire",["fire","fire","fire","fire"],"100","Fire Blast", "Discard [{fire}2# Energy] from this [PKMN].")]
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
        vulpix: new PKMN("Vulpix",60,["fire"],["basic"],1,null,
        [new ATTACK("fire",["fire"],"0","Call for Family","Search your [DECK] for a [{fire}#] [{fire}PKMN] and put it into your [HAND]."),
        new ATTACK("fire",["fire","normal"],"20","Fire Fang", "Put a [{fire}brn token] on the [defending] [PKMN].")]
        ,"RG","C"),
        ninetales: new PKMN("Ninetales",90,["fire"],["stage 1","vulpix"],2,null,
        [new ABILITY("Roast Reveal","Once per turn, you may discard a [{fire}# ENERGY] from your hand% in order to draw [2] cards from your [deck]."),
        new ATTACK("fire",["fire","fire","normal"],"50","Roasting Heat", "Put a [{fire}BRN TOKEN] on [1] of your [opponent]'[s] [PKMN].")]
        ,"RG","R"),
        growlithe: new PKMN("Growlithe",60,["fire"],["basic"],1,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        arcanine: new PKMN("Arcanine",90,["fire"],["stage 1","growlithe"],1,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        ponyta: new PKMN("Ponyta",50,["fire"],["basic"],0,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        rapidash: new PKMN("Rapidash",80,["fire"],["stage 1","ponyta"],0,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        magmar: new PKMN("Magmar",70,["fire"],["basic"],2,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        flareon: new PKMN("Flareon",80,["fire"],["stage 1","eevee"],1,null,
        [new ABILITY("Flame Guard","This [PKMN] is not affected by being [{fire}BRND]."),
        new ATTACK("fire",["fire"],"10x","Blaze Strike","Does [{dmg}10] [{dmg}dmg] for each [{fire}BRND] [PKMN] in play.")],
        "RG","R"),
        moltres: new PKMN("Moltres",70,["fire","flying"],["basic"],0,null,
        [new ATTACK("fire",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        squirtle: new PKMN("Squirtle",50,["water"],["basic"],1,null,
        [new ABILITY("Shell Shield", "While this [PKMN] is on the [bench], it cannot be [damaged] by% any [attack] or [ability] from any [PKMN]."),
        new ATTACK("water",["water","normal"],"10+","Bubble","If this [PKMN] has [2] or more [{water}# energy] attached, this [attack]% does [{dmg}20] more [{dmg}dmg].")]
        ,"RG","C"),
        wartortle: new PKMN("Wartortle",70,["water"],["stage 2","squirtle"],2,null,
        [new ABILITY("Drizzle","Once per turn, you may attach a [{water}basic # energy] from your% [hand] to this [PKMN]."),
        new ATTACK("water",["water","water"],"30+","Bubblebeam", "If this [PKMN] has [3] or more [{water}# energy] attached, this [attack]% does [{dmg}20] more [{dmg}dmg].")]
        ,"RG","U"),
        blastoise: new PKMN("Blastoise",120,["water"],["stage 2","wartortle"],4,null,
        [new ABILITY("Rain Dance","You may attach any number of [{water}basic # energy] from your% [hand] to your [{water}#] [{water}PKMN] in any way you like."),
        new ATTACK("water",["water","water","normal"],"20+","Hydro Pump", "Does [{dmg}10] more [{dmg}dmg] for each [{water}# energy] attached to this [PKMN].")]
        ,"RG","R"),
        mBlastoise: new PKMN("Blastoise",150,["water"],["mega","blastoise"],4,"mega",
        [new ABILITY("Downpour","Whenever [1] of your [{water}#] [{water}PKMN] deals increased [{dmg}dmg] in an [attack]% because of the number of [{water}# energy] attached to them, you% may choose to discard up to [4] of those [{water}# energy], to deal% an extra [{dmg}10] [{dmg}dmg] per [energy] you discard.")]
        ,"RG","S"),
        gBlastoise: new PKMN("Blastoise",160,["water"],["gmax","blastoise"],4,"gmax",
        [new ABILITY("GMAX CANNONADE","When you play this [PKMN] from your [hand] to [evolve] [1] of your% [PKMN], you may attach any number of [{water}basic # energy] from% your [discard] to this [PKMN]. Then, switch this [PKMN] with your% [Active] [PKMN].")]
        ,"RG","S"),
        psyduck: new PKMN("Psyduck",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        golduck: new PKMN("Golduck",70,["water"],["stage 1","psyduck"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        poliwag: new PKMN("Poliwag",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        poliwhirl: new PKMN("Poliwhirl",70,["water"],["stage 1","poliwag"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        poliwrath: new PKMN("Poliwrath",70,["water","fighting"],["stage 2","poliwhirl"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        tentacool: new PKMN("Tentacool",70,["water","poison"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        tentacruel: new PKMN("Tentacruel",70,["water","poison"],["stage 1","tentacool"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        slowpoke: new PKMN("Slowpoke",70,["water","psychic"],["basic"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        slowbro: new PKMN("Slowbro",70,["water","psychic"],["stage 1","slowpoke"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        mSlowbro: new PKMN("Slowbro",140,["water","psychic"],["mega","slowbro"],4,"mega",
        [new ABILITY("Ability Name","Ability Effect.")]
        ,"RG","S"),
        seel: new PKMN("Seel",70,["water"],["basic"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        dewgong: new PKMN("Dewgong",70,["water","ice"],["stage 1","seel"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        shellder: new PKMN("Shellder",70,["water"],["basic"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        cloyster: new PKMN("Cloyster",70,["water","ice"],["stage 1","shellder"],3,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        krabby: new PKMN("Krabby",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        kingler: new PKMN("Kingler",70,["water"],["stage 1","krabby"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        gKingler: new PKMN("Kingler",160,["water"],["gmax","kingler"],3,"gmax",
        [new ABILITY("GMAX FOAM BURST","Ability Effect")]
        ,"RG","S"),
        horsea: new PKMN("Horsea",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        seadra: new PKMN("Seadra",70,["water"],["stage 1","horsea"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        goldeen: new PKMN("Goldeen",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        seaking: new PKMN("Seaking",70,["water"],["stage 1","goldeen"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        staryu: new PKMN("Staryu",70,["water"],["basic"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        starmie: new PKMN("Starmie",70,["water","psychic"],["stage 1","staryu"],0,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        magikarp: new PKMN("Magikarp",70,["water"],["basic"],1,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        gyarados: new PKMN("Gyarados",70,["water","flying"],["stage 1","magikarp"],1,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mGyarados: new PKMN("Gyarados",120,["water","dark"],["mega","gyarados"],2,"mega",
        [new ABILITY("ABILITY NAME","Ability Effect")]
        ,"RG","S"),
        lapras: new PKMN("Lapras",70,["water","ice"],["basic"],1,null,
        [new ATTACK("water",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        gLapras: new PKMN("Lapras",160,["water","ice"],["gmax","lapras"],3,"gmax",
        [new ABILITY("GMAX RESONANCE","Ability Effect")]
        ,"RG","S"),
        vaporeon: new PKMN("Vaporeon",90,["water"],["stage 1","eevee"],1,null,
        [new ABILITY("Aqua Refresh","Whenever you attach a [{water}# energy] from your hand to [1] of% your [PKMN], heal [{dmg}20] [{dmg}dmg] from that [PKMN]. This [ability] may only% be used an a [PKMN] once per turn."),
        new ATTACK("water",["water"],"10+","Splashing Wave","Does [{dmg}10] more [{dmg}dmg] for each of your [PKMN] with any [{water}# energy]% attached to them.")],
        "RG","R"),
        pikachu: new PKMN("Pikachu",70,["electric"],["basic"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        gPikachu: new PKMN("Pikachu",160,["electric"],["gmax","pikachu"],3,"gmax",
        [new ABILITY("GMAX VOLT CRASH","Ability Effect")]
        ,"RG","S"),
        raichu: new PKMN("Raichu",70,["electric"],["stage 1","pikachu"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        magnemite: new PKMN("Magnemite",70,["electric","steel"],["basic"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        magneton: new PKMN("Magneton",70,["electric","steel"],["stage 1","magnemite"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        voltorb: new PKMN("Voltorb",70,["electric"],["basic"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        electrode: new PKMN("Electrode",70,["electric"],["stage 1","voltorb"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        electabuzz: new PKMN("Electabuzz",70,["electric"],["basic"],1,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        jolteon: new PKMN("Jolteon",80,["electric"],["stage 1","eevee"],1,null,
        [new ABILITY("Zap Dash","Your [PKMN] with any [{electric}# ENERGY] pay [2] less to [retreat]."),
        new ATTACK("electric",["electric"],"40","Charge Strike","Deal  [{dmg}10] [{dmg}dmg] to this [PKMN].")],
        "RG","R"),
        zapdos: new PKMN("Zapdos",70,["electric","flying"],["basic"],0,null,
        [new ATTACK("electric",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        abra: new PKMN("Abra",70,["psychic"],["basic"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        kadabra: new PKMN("Kadabra",70,["psychic"],["stage 1","abra"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        alakazam: new PKMN("Alakazam",70,["psychic"],["stage 2","kadabra"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mAlakazam: new PKMN("Alakazam",120,["psychic"],["mega","alakazam"],2,"mega",
        [new ABILITY("ABILITY NAME","Ability Effect")]
        ,"RG","S"),
        drowzee: new PKMN("Drowzee",70,["psychic"],["basic"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        hypno: new PKMN("Hypno",70,["psychic"],["stage 1","drowzee"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        mrMime: new PKMN("Mr. Mime",70,["psychic","fairy"],["basic"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        mewtwo: new PKMN("Mewtwo",70,["psychic"],["basic"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mMewtwoX: new PKMN("Mewtwo",120,["psychic","fighting"],["mega","mewtwo"],2,"mega",
        [new ABILITY("ABILITY NAME","Ability Effect")]
        ,"RG","S"),
        mMewtwoY: new PKMN("Mewtwo",120,["psychic"],["mega","mewtwo"],2,"mega",
        [new ABILITY("ABILITY NAME","Ability Effect")]
        ,"RG","S"),
        mew: new PKMN("Mew",70,["psychic"],["basic"],1,null,
        [new ATTACK("psychic",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mankey: new PKMN("Mankey",70,["fighting"],["basic"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        primeape: new PKMN("Primeape",70,["fighting"],["stage 1","mankey"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        machop: new PKMN("Machop",70,["fighting"],["basic"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        machoke: new PKMN("Machoke",70,["fighting"],["stage 1","machop"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        machamp: new PKMN("Machamp",70,["fighting"],["stage 2","machoke"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        gMachamp: new PKMN("Machamp",120,["fighting"],["gmax","machamp"],2,"gmax",
        [new ABILITY("GMAX CHI STRIKE","Ability Effect")]
        ,"RG","S"),
        hitmonlee: new PKMN("Hitmonlee",70,["fighting"],["basic"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        hitmonchan: new PKMN("Hitmonchan",70,["fighting"],["basic"],1,null,
        [new ATTACK("fighting",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        geodude: new PKMN("Geodude",70,["rock","ground"],["basic"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        graveler: new PKMN("Graveler",70,["rock","ground"],["stage 1","geodude"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        golem: new PKMN("Golem",70,["rock","ground"],["stage 2","graveler"],4,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        onix: new PKMN("Onix",70,["rock","ground"],["basic"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        omanyte: new PKMN("Omanyte",70,["rock","water"],["basic"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        omastar: new PKMN("Omastar",70,["rock","water"],["stage 1","omanyte"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        kabuto: new PKMN("Kabuto",70,["rock","water"],["basic"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        kabutops: new PKMN("Kabutops",70,["rock","water"],["stage 1","kabuto"],3,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        aerodactyl: new PKMN("Aerodactyl",70,["rock","flying"],["basic"],1,null,
        [new ATTACK("rock",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mAerodactyl: new PKMN("Aerodactyl",70,["rock","flying"],["mega","aerodactyl"],1,"mega",
        [new ABILITY("ABILITY NAME","Ability Effect")]
        ,"RG","S"),
        sandshrew: new PKMN("Sandshrew",50,["ground"],["basic"],3,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        sandslash: new PKMN("Sandslash",70,["ground"],["stage 1","sandshrew"],0,null,
        [new ABILITY("ABILITY NAME","When this [PKMN] moves to your [bench] from being [Active],% deal [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s] [benched] [PKMN]. "),
         new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        diglett: new PKMN("Diglett",40,["ground"],["basic"],0,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        dugtrio: new PKMN("Dugtrio",70,["ground"],["stage 1","diglett"],0,null,
        [new ABILITY("ABILITY NAME","When this [PKMN] is your [Active] [PKMN], your [opponent]'[s] [PKMN]% [retreat cost] is [2] more."),
         new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        cubone: new PKMN("Cubone",40,["ground"],["basic"],1,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        marowak: new PKMN("Marowak",70,["ground"],["stage 1","cubone"],2,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        rhyhorn: new PKMN("Rhyhorn",40,["ground","rock"],["basic"],3,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        rhydon: new PKMN("Rhydon",70,["ground","rock"],["stage 1","rhyhorn"],4,null,
        [new ATTACK("ground",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        ekans: new PKMN("Ekans",40,["poison"],["basic"],1,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        arbok: new PKMN("Arbok",80,["poison"],["stage 1","ekans"],1,null,
        [new ABILITY("Intimidating Toxins","You [opponent]'[s] [{poison}psnd] [PKMN] do [{dmg}10] less [{dmg}dmg] to this [PKMN], for% each [{poison}poison token] on that [PKMN]."),
        new ATTACK("poison",["poison","normal"],"40","Poison Wrap","If the [defending] [PKMN] is [{poison}psnd], it may not [retreat] during% your [opponent]'[s] next turn.")],
        "RG","R"),
        nidoranF: new PKMN("nidoran",40,["poison"],["basic"],1,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        nidorina: new PKMN("nidorina",40,["poison"],["stage 1","nidoran F"],1,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        nidoqueen: new PKMN("nidoqueen",40,["poison","ground"],["stage 2","nidorina"],3,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        nidoranM: new PKMN("nidoran",40,["poison"],["basic"],1,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        nidorino: new PKMN("nidorino",40,["poison"],["stage 1","nidoran M"],1,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        nidoking: new PKMN("Nidoking",120,["poison","ground"],["stage 2","nidorino"],4,null,
        [ new ATTACK("poison",["poison","poison"],"30","Sludge Wave","Put [{poison} 2] [{poison}psn tokens] on your [opponent]'[s] [PKMN] in any% way you like."),
        new ATTACK("poison",["poison","ground","normal","normal"],"60","Toxic Quake","Deal [{dmg}10] [{dmg}dmg] to each of your [opponent]'[s benched] [PKMN]% for each [{poison}psn token] on the [defending] [PKMN].")],
        "RG","R"),
        zubat: new PKMN("zubat",40,["poison","flying"],["basic"],0,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        golbat: new PKMN("golbat",40,["poison","flying"],["stage 1","zubat"],0,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        grimer: new PKMN("grimer",40,["poison"],["basic"],3,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        muk: new PKMN("muk",40,["poison"],["stage 1","grimer"],3,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        koffing: new PKMN("koffing",40,["poison"],["basic"],3,null,
        [new ATTACK("poison",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        weezing: new PKMN("Weezing",80,["poison"],["stage 1","koffing"],3,null,
        [new ABILITY("Toxic Bomb","When this [PKMN] is [{dmg}KO]d, put [{poison}1] [{poison}psn token] on each [PKMN] in play."),
        new ATTACK("normal",["normal","normal","normal"],"90","Self Destruct"," [{dmg}KO] this [PKMN].")],
        "RG","R"),
        caterpie: new PKMN("Caterpie",40,["bug"],["basic"],1,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","C"),
        metapod: new PKMN("Metapod",40,["bug"],["stage 1","caterpie"],1,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","U"),
        butterfree: new PKMN("Butterfree",40,["bug","flying"],["stage 2","metapod"],0,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","R"),
        gButterfree: new PKMN("Butterfree",120,["bug","flying"],["gmax","butterfree"],0,"gmax",
        [new ABILITY("GMAX BEFUDDLE","Once during your turn, you may choose any [Special]% [Condition token] and place it on your [opponent]'[s]% [active] [PKMN] (Standard [Special Condition] rules still apply).")]
        ,"RG","S"),
        weedle: new PKMN("Weedle",40,["bug","poison"],["basic"],1,null,
        [new ATTACK("poison",["normal"],"10","Poison Sting","Put a [{poison}psn token] on the [defending] [PKMN].")]
        ,"RG","C"),
        kakuna: new PKMN("Kakuna",60,["bug","poison"],["stage 1","weedle"],3,null,
        [new ABILITY("Metamorphasis","After you attack, but before [special conditions], you may% search your [deck] for a [PKMN] that [evolves] from this [PKMN] and% put it on this [PKMN]."),
        new ATTACK("bug",["normal"],"10+","Struggle Bug","If the [defending] [PKMN] has any [special condition]% [tokens] on them, this attack deals [{dmg}30] more [{dmg}dmg].")]
        ,"RG","U"),
        beedrill: new PKMN("Beedrill",90,["bug","poison"],["stage 2","kakuna"],1,null,
        [new ABILITY("Poison Needle","Once during your turn, you may discard [{poison}1] [{poison}# energy] from% your [hand] to place [1] [{poison}psn token] on [1] of your% [opponent]'[s] [PKMN]."),
        new ATTACK("bug",["normal","normal"],"10x","Flurry Needle","Flip a [coin] for each [{poison}psn token] on all [PKMN] in play. This% [attack] does [{dmg}10] [{dmg}dmg] for each [heads].")],
        "RG","R"),
        mBeedrill: new PKMN("Beedrill",120,["bug","poison"],["mega","beedrill"],1,"mega",
        [new ABILITY("Toxic Swarm","Whenever [1] of your [opponent]'[s] [{poison}psnd] [PKMN] would have a% [{poison}psn token] put on them, but already has [{poison}2] [{poison}psn tokens],% deal [{dmg}10] [{dmg}dmg] to that [PKMN].")]
        ,"RG","S"),
        paras: new PKMN("Paras",40,["bug","grass"],["basic"],1,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","C"),
        parasect: new PKMN("Parasect",40,["bug","grass"],["stage 1","paras"],1,null,
        [new ATTACK("bug",["bug","normal"],"30","Leech Life","For each of your [Paras] or [Parasect] in play, heal [{dmg}10] [{dmg}dmg]% from this [PKMN]")]
        ,"RG","U"),
        venonat: new PKMN("Venonat",40,["bug","poison"],["basic"],1,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","C"),
        venomoth: new PKMN("Venomoth",40,["bug","poison"],["stage 1","venonat"],0,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","U"),
        scyther: new PKMN("Scyther",40,["bug","flying"],["basic"],0,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","U"),
        pinsir: new PKMN("Pinsir",40,["bug"],["basic"],1,null,
        [new ATTACK("bug",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","R"),
        mPinsir: new PKMN("Pinsir",120,["bug","flying"],["mega","pinsir"],0,"mega",
        [new ABILITY("ABILITY NAME","Ability effect.")]
        ,"RG","S"),
        gastly: new PKMN("Gastly",40,["ghost","poison"],["basic"],0,null,
        [new ATTACK("ghost",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","C"),
        haunter: new PKMN("Haunter",40,["ghost","poison"],["stage 1"],0,null,
        [new ATTACK("ghost",["normal"],"10","Attack Name","Attack effect.")]
        ,"RG","U"),
        gengar: new PKMN("Gengar",100,["ghost","poison"],["stage 2","haunter"],0,null,
        [new ABILITY("phantom curse","Once per turn, you may send [1] of your [opponent]'[s]% [basic energy] from their [discard] to their [{ghost}lost zone].% Then, deal [{dmg}10] [{dmg}dmg] to this [PKMN]."),
         new ATTACK("ghost",["ghost","normal"],"10x","Phantom Pain","Does [{dmg}10] [{dmg}dmg] for each [energy] in both player's [lost zones].")],
         "RG","R"),
        mGengar: new PKMN("Gengar",120,["ghost","poison"],["mega","gengar"],2,"mega",
        [new ABILITY("ABILITY NAME","Ability effect.")]
        ,"RG","S"),
        gGengar: new PKMN("Gengar",120,["ghost","poison"],["gmax","gengar"],2,"gmax",
        [new ABILITY("GMAX TERROR","Ability effect.")]
        ,"RG","S"),
        jynx: new PKMN("Jynx",70,["ice","psychic"],["basic"],1,null,
        [new ATTACK("ice",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        articuno: new PKMN("Articuno",70,["ice","flying"],["basic"],0,null,
        [new ATTACK("ice",["ice","normal"],"10","Ice Attack","Attack Effect")]
        ,"RG","R"),
        dratini: new PKMN("Dratini",70,["dragon"],["basic"],1,null,
        [new ATTACK("dragon",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        dragonair: new PKMN("Dragonair",70,["dragon"],["stage 1","dratini"],1,null,
        [new ATTACK("dragon",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        dragonite: new PKMN("Dragonite",70,["dragon","flying"],["stage 2","dragonair"],1,null,
        [new ATTACK("dragon",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        clefairy: new PKMN("Clefairy",50,["fairy"],["basic"],1,null,
        [new ATTACK("fairy",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        clefable: new PKMN("Clefable",50,["fairy"],["stage 1","clefairy"],2,null,
        [new ATTACK("fairy",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        pidgey: new PKMN("Pidgey",50,["normal","flying"],["basic"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        pidgeotto: new PKMN("Pidgeotto",50,["normal","flying"],["stage 1","pidgey"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        pidgeot: new PKMN("Pidgeot",50,["normal","flying"],["stage 2","pidgeotto"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mPidgeot: new PKMN("Pidgeot",50,["normal","flying"],["mega","pidgeot"],0,"mega",
        [new ABILITY("ABILITY NAME","Ability effect.")]
        ,"RG","S"),
        rattata: new PKMN("Rattata",50,["normal"],["basic"],0,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        raticate: new PKMN("Raticate",50,["normal"],["stage 1","rattata"],0,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        spearow: new PKMN("Spearow",50,["normal","flying"],["basic"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        fearow: new PKMN("Fearow",50,["normal","flying"],["stage 1","spearow"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        jigglypuff: new PKMN("Jigglypuff",50,["normal","fairy"],["basic"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        wigglytuff: new PKMN("Wigglytuff",50,["normal","fairy"],["stage 1","jigglypuff"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        meowth: new PKMN("Meowth",50,["normal"],["basic"],1,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        gMeowth: new PKMN("Meowth",50,["normal"],["gmax"],1,"gmax",
        [new ABILITY("GMAX GOLD RUSH","Ability Name.")]
        ,"RG","S"),
        persian: new PKMN("Persian",50,["normal"],["stage 1","persian"],1,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        farfetch: new PKMN("Farfetchd",50,["normal","flying"],["basic"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        doduo: new PKMN("Doduo",50,["normal","flying"],["basic"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        dodrio: new PKMN("Dodrio",50,["normal","flying"],["stage 1","doduo"],0,null,
        [new ATTACK("flying",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        lickitung: new PKMN("Lickitung",50,["normal"],["basic"],0,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        chansey: new PKMN("Chansey",80,["normal"],["basic"],0,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        kangaskhan: new PKMN("Kangaskhan",50,["normal"],["basic"],2,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        mKangaskhan: new PKMN("Kangaskhan",50,["normal"],["mega"],2,"mega",
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","S"),
        tauros: new PKMN("Tauros",50,["normal"],["basic"],2,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","U"),
        ditto: new PKMN("Ditto",50,["normal"],["basic"],1,null,
        [new ABILITY("Transform","Once during the game, you may put any Stage 1 [PKMN] onto this [PKMN] to [evolve] it. You can't use this [Ability] during your first turn or on the turn this [PKMN] was put into play.")]
        ,"RG","R"),
        eevee: new PKMN("Eevee",50,["normal"],["basic"],1,null,
        [new ABILITY("Energy Evolution","When you attach an [energy] from your [hand] to this [PKMN],% you may search your [deck] for a [PKMN] that [evolves] from% this [PKMN] that is the same [TYPE] as that [energy] and use it% to [evolve] this [PKMN]."),
        new ATTACK("normal",["normal"],"0","Fetch","Draw [2] [Cards].")],
        "RG","C"),
        gEevee: new PKMN("Eevee",50,["normal"],["gmax"],2,"gmax",
        [new ABILITY("GMAX CUDDLE","Ability Name.")]
        ,"RG","S"),
        porygon: new PKMN("Porygon",50,["normal"],["basic"],2,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","C"),
        snorlax: new PKMN("Snorlax",50,["normal"],["basic"],4,null,
        [new ATTACK("normal",["normal"],"10","Attack", "Attack effect.")]
        ,"RG","R"),
        gSnorlax: new PKMN("Snorlax",50,["normal"],["gmax"],4,"gmax",
        [new ABILITY("GMAX REPLENISH","Ability Name.")]
        ,"RG","S"),
        agatha: new SUPPORTER("Agatha",new SKILL("effect","Supporter Effect"),"RG","U"),
        brock: new SUPPORTER("Brock",new SKILL("effect","Shuffle your [hand] into your [deck]. Then, draw a [card] for% each [retreat cost] over [2] on each of your [{rock}#] [{rock}PKMN]% (for a [PKMN] with [4] [retreat cost], you would draw [2] [cards])."),"RG","U"),
        bruno: new SUPPORTER("Bruno",new SKILL("effect","Supporter Effect"),"RG","U"),
        erika: new SUPPORTER("Erika",new SKILL("effect","During this turn, whenever [1] of your [{grass}#][{grass}PKMN] is [{heal}healed], you% may draw a [card]."),"RG","U"),
        green: new SUPPORTER("Green",new SKILL("effect","Discard up to [2] [PKMN] from your [HAND] and [draw] [3] [cards]% for each [PKMN] you discarded."),"RG","U"),
        janine: new SUPPORTER("Janine",new SKILL("effect","Put [2] [{poison}psn tokens] on [1] of your [opponent]'[s] [PKMN]."),"RG","U"),
        lance: new SUPPORTER("Lorelei",new SKILL("effect","Supporter Effect"),"RG","U"),
        leaf: new SUPPORTER("Leaf",new SKILL("effect","Search your [deck] for [{grass}2] [{grass}#] [{grass}energy] and put them into your% [hand]. If you have any [{grass}#] [{grass}PKMN] on your [bench] that have no% [{dmg}dmg] on them, you may attach [1] to any of those [PKMN]."),"RG","U"),
        lorelai: new SUPPORTER("Lorelei",new SKILL("effect","Supporter Effect"),"RG","U"),
        ltSurge: new SUPPORTER("Lt. Surge",new SKILL("effect","Supporter Effect"),"RG","U"),
        misty: new SUPPORTER("Misty",new SKILL("effect","During this turn, you may attach up to [{water}4] [{water}# energy] from% your [hand] to your [{water}#][{water}PKMN] in any way you like."),"RG","U"),
        sabrina: new SUPPORTER("Sabrina",new SKILL("effect","Move any number of [energy] attached to any of your [{psychic}#] [{psychic}PKMN]% to any other of your [{psychic}#] [{psychic}PKMN]."),"RG","U"),
        pkmnNurse: new SUPPORTER("PKMN Nurse",new SKILL("effect","Search your [deck] for up to [2] [{heal}healing] [items] and put them% into your [hand]."),"RG","U"),
        professorOak: new SUPPORTER("Professor Oak",new SKILL("effect","Discard your [hand] and draw [7] cards."),"RG","U"),
        red: new SUPPORTER("Red",new SKILL("effect","Shuffle your [hand] into your [deck] and draw [6] cards."),"RG","U"),
        bicycle: new ITEM(null,"Bicycle",new SKILL("effect","Draw [cards] until you have [4] [cards] in your [hand]."),"RG","C"),
        escapeRope: new ITEM(null,"Escape Rope",new SKILL("effect","Switch your [active] [PKMN] with [1] of your [benched] [PKMN]."),"RG","C"),
        ether: new ITEM(null,"Ether",new SKILL("effect","Put [2] [basic energy] from your [discard] into your [hand]."),"RG","C"),
        fullHeal: new ITEM("heal","Full Heal",new SKILL("effect","Remove all [spec condition tokens] from [1] of your [PKMN]."),"RG","C"),
        fullRestore: new ACESPEC("heal","Full Restore",new SKILL("effect"," [{heal}heal] [{dmg}all dmg] and remove all [special condition]% [tokens] from [1] of your [PKMN]."),"RG","R"),
        hyperPotion: new ITEM("heal","Hyper Potion",new SKILL("effect","Discard any number of [energy] from [1] of your [PKMN]. Then,% [{heal}heal] [{dmg}30] [{dmg}dmg] from that [PKMN] for each [energy discarded]."),"RG","U"),
        itemFinder: new ACESPEC(null,"Item Finder",new SKILL("effect","Discard [2] cards from your [hand]. Then, search your [discard]% for a [TRAINER], and put it into your [hand]."),"RG","R"),
        masterBall: new ACESPEC("ball","Master Ball",new SKILL("effect","Search your [deck] for a [PKMN] and put it into your [hand]."),"RG","R"),
        maxEther: new ITEM(null,"Max Ether",new SKILL("effect"," [discard] a [card] from your [hand]. Then, put [4] [basic]% [energy] from your [discard] into your [hand] (you may not% select the [card] you chose to [discard])."),"RG","U"),
        maxElixer: new ACESPEC(null,"Max Elixer",new SKILL("effect","Put [4] [basic energy] from your [discard] into your [hand].% Then, shuffle [2] [special energy] from your [discard] into% your [deck]."),"RG","R"),
        maxPotion: new ITEM("heal","Max Potion",new SKILL("effect"," [{heal}heal] [{dmg}all dmg] from [1] of your [PKMN]. Then, [discard all]% [energy] attached to that [PKMN]."),"RG","U"),
        maxRepel: new ACESPEC(null,"Max Repel",new SKILL("effect"," [discard] an [energy] attached to [1] of your [PKMN]. Then,% [discard] [2] [energy] attached to [1] of your [opponent]'[s] [PKMN]."),"RG","R"),
        maxRevive: new ITEM(null,"Max Revive",new SKILL("effect","Put a [PKMN] from your [discard] on top of your [deck]."),"RG","U"),
        nugget: new ITEM(null,"Nugget",new SKILL("effect","Whenever you draw this [item] from your [deck], immeidately% [discard] it and draw [2] cards."),"RG","U"),
        oaksParcel: new ITEM(null,"Oak Parcel",new SKILL("effect","Search your [deck] for up to [2] [basic energy] and put them% into your [hand]."),"RG","C"),
        pkmnComputer: new ACESPEC(null,"PKMN Computer",new SKILL("effect","Discard [2] cards from your [hand]. Then, search your [deck] for% any card, and put it into your [hand] (You do not have to show% your [opponent] the card)."),"RG","R"),
        pokeBall: new ITEM("ball","Poke Ball",new SKILL("effect","Put a [PKMN] from your hand into your [deck]. Then, search your% [deck] for a [PKMN] and put it into your [HAND]."),"RG","C"),
        potion: new ITEM("heal","Potion",new SKILL("effect"," [{heal}heal] [{dmg}20] [{dmg}dmg] from [1] of your [PKMN]."),"RG","C"),
        ppMax: new ACESPEC(null,"PP Max",new SKILL("effect","During this turn, your [PKMN]'[s] [attacks] do not require [energy].% Any effects that require [energy] still need that [energy]."),"RG","R"),
        rareCandy: new ITEM(null,"Rare Candy",new SKILL("effect","Choose [1] of your [basic] [PKMN] in play. If you have a [stage 2] [PKMN]% in your [hand] that [evolves] from that [PKMN], put that [PKMN] on% the [basic] [PKMN] to [evolve] it. You can't use this [item] on your% first turn or on a [basic] [PKMN] that was put into play this turn."),"RG","U"),
        repel: new ITEM(null,"Repel",new SKILL("effect","Flip a [coin]. If [heads], [discard] an [energy] from [1] of% your [opponent]'[s] [PKMN]."),"RG","U"),
        superPotion: new ITEM("heal","Super Potion",new SKILL("effect","Discard [1] [energy] attached to [1] of your [PKMN]. Then, [{heal}heal]% [{dmg}40] [{dmg}dmg] from that [PKMN]."),"RG","U"),
        superRod: new ITEM(null,"Super Rod",new SKILL("effect","Shuffle up to [3] [PKMN] from your [discard] into your [deck]."),"RG","U"),
        superRepel: new ITEM(null,"Super Repel",new SKILL("effect"," [discard] [1] [special energy] from [1] of your% [opponent]'[s] [PKMN]."),"RG","U"),
        ultraBall: new ITEM("ball","Ultra Ball",new SKILL("effect","Discard [2] [cards] from your [hand]. Then, search your [deck]% for a [PKMN] and put it into your [hand]."),"RG","U"),
        xAttack: new ITEM(null,"X Attack",new SKILL("effect","During this turn, when you [attack], deal [{dmg}10] more [{dmg}dmg] to% the [defending] [PKMN]."),"RG","U"),
        xDefense: new ITEM(null,"X Defense",new SKILL("effect","During your [opponent]'[s] next turn, your [active] [PKMN] takes% [{dmg}20] less [{dmg}dmg] from [attacks]."),"RG","U"),
        xAccuracy: new ITEM(null,"X Accuracy",new SKILL("effect","During this turn, when you [attack], if the effect of an% [attack] requires any number of [coin flips], you may chose% to have the first [coin flip] be [heads]."),"RG","U"),
        xSpecial: new ITEM(null,"X Special",new SKILL("effect","Choose [1] of your [PKMN] that has any [basic energy] attached.% Choose up to [2] [basic energy] attached to taht [PKMN] and put% them into your [deck]. Then, for each [energy] you returned in% this way, you may search your [deck] for a [basic energy], and% attach it to that [PKMN]."),"RG","U")
    },

    gs: {
        chikorita: new PKMN("Chikorita",60,["grass"],["basic"],1,null,
        [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] [{grass}energy] from your [hand] to this [PKMN]."),
        new ATTACK("grass",["grass","normal"],"30","Vine Whip","")]
        ,"GS","C"),
        bayleef: new PKMN("Bayleef",60,["grass"],["stage 1","Chikorita"],2,null,
        [new ABILITY("Energy Link","Once per turn, you may move [{grass}1] [{grass}# energy] from [1] of your% [{grass}#] [{grass}PKMN] to another one of your [{grass}#] [{grass}PKMN]."),
        new ATTACK("grass",["grass","normal"],"20","Razor Leaf","Deal [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s] [benched] [PKMN]")]
        ,"GS","U"),
        meganium: new PKMN("Meganium",130,["grass"],["stage 2","bayleef"],4,null,
        [new ABILITY("Energy Stream","You may move any number of [{grass}# energy] from [1] of your% [{grass}#] [{grass}PKMN] to another one of your [{grass}#] [{grass}PKMN]."),
        new ATTACK("grass",["grass","grass","normal"],"70","Giant Bloom","Heal [{dmg}20] [{dmg}dmg] from this [PKMN].")]
        ,"GS","R"),
        typhlosion: new PKMN("Typhlosion",100,["fire"],["stage 2","quilava"],3,null,
                            [new ABILITY("Afterburn","Once per turn, you may attach up to 2 [{fire}# energy] from your% [discard] to [1] of your [{fire}#][{fire}PKMN]. For each [{fire}# energy] attached,% that [PKMN] takes [{dmg}10][{dmg}dmg]."),
                             new ATTACK("fire",["fire","fire","fire","fire"],"100","Eruption","Discard all [{fire}# energy] from this [PKMN]. Deal [{dmg}20][{dmg}dmg] to each of% your [opponent]'[s] [benched] [PKMN].")],
                            "GS","R"),
        feraligatr: new PKMN("Feraligatr",110,["water"],["stage 2","croconaw"],3,null,
                            [new ABILITY("Downpour","Discard as many [{water}# energy] from your [hand] as you like% during your turn"),
                             new ATTACK("water",["water"],"10+","Riptide","Does [{dmg}10] more [{dmg}dmg] for each [{water}# energy] in your [discard].% Then shuffle all [{water}# energy] in your [discard] into your [deck].")],
                            "GS","R"),
        mantine: new PKMN("Mantine",80,["water","flying"],["basic"],0,null,
        [new ATTACK("water",["normal"],"0","Fluttering Splash","Search your [deck] for [{water}2] [{water}basic # energy] and put them into% your hand."),
        new ATTACK("water",["water","water"],"30","Diving Strike","Deal [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s benched] [PKMN].")]
        ,"GS","U"),
        larvitar:   new PKMN("Larvitar",50,["rock","ground"],["basic"],1,null,
                            [new ATTACK("rock",["normal"],"0","Mountain Eater"," [Discard] the top card of your [OPPONENT]'[S DECK]."),
                            new ATTACK("rock",["rock","normal"],"30","Rock Strike","This [PKMN] deals [{dmg}10] [{dmg}dmg] to itself.")]
                            ,"GS","C"),
        pupitar:   new PKMN("Pupitar",80,["rock","ground"],["stage 1","larvitar"],2,null,
                            [new ABILITY("Shell Evolution","If this [PKMN] was not put into play this turn, you may search your% [DISCARD] for a [PKMN] that [evolves] from this [PKMN] and use it to% [evolve] this [PKMN]. Then, deal [{dmg}20] [{dmg}dmg] to this [PKMN]."),
                            new ATTACK("rock",["normal"],"40","Rock Tackle","This [PKMN] deals [{dmg}10] [{dmg}dmg] to itself.")]
                            ,"GS","U"),
        tyranitar: new PKMN("Tyranitar",120,["rock","dark"],["stage 2","pupitar"],4,null,
                            [new ATTACK("rock",["rock","normal","normal"],"40","Rock Slide","This [attack] does [{dmg}10] [{dmg}dmg] to each [benched] [PKMN] with no% [{dmg}dmg], other than [{rock}#] [{rock}PKMN]."),
                            new ATTACK("dark",["dark","dark","normal","normal"],"50+","Dark Quake","This [Attack] does [{dmg}10] more [{dmg}dmg] for each [PKMN] in play that% has any [{dmg}dmg] on them.")]
                            ,"GS","R"),
        mTyranitar: new PKMN("Tyranitar",160,["rock","dark"],["mega","tyranitar"],4,"mega",
        [new ABILITY("Mountain Tyrant","The [attacks] of your [{rock}#] and [{dark}#] [PKMN] deal [{dmg}20] more [{dmg}dmg] to% a [defending] [PKMN] that has already taken [{dmg}dmg].")]
        ,"GS","S"),
        stantler: new PKMN("Stantler",50,["normal"],["basic",null],1,null,
                          [new ATTACK("normal",["normal"],"0","Call of the Wild","Search your deck for a [basic] [PKMN] and play it as your new% [Active] [PKMN] (Move this [PKMN] to your [bench])."),
                          new ATTACK("normal",["normal","normal"],"30","Stomp","")],
                          "GS","U"),
        gold: new SUPPORTER("Gold",new SKILL("effect","Discard an [energy] from your [hand]. Then, draw [4] cards."),"GS","U"),
        koga: new SUPPORTER("Koga",new SKILL("effect","Shuffle your [hand] into your [deck]. Then, draw a [card] for% each [benched] [PKMN] with any [{poison}psn tokens] on them."),"GS","U"),
        kurt: new SUPPORTER("Kurt",new SKILL("effect","Search your [deck] for up to [3] [ball items] and put them% into your [hand]."),"GS","U"),
        morty: new SUPPORTER("Morty",new SKILL("effect","Switch the [defending] [PKMN] with [1] of your [opponent]'[s]% [benched] [PKMN] by sending a [{ghost}# energy] from your% [discard] to the [lost zone] for that [PKMN][s] [retreat cost]."),"GS","U"),
        professorElm: new SUPPORTER("Professor Elm",new SKILL("effect","Shuffle your [hand] into your [deck] and [draw] a card for% each [evolved] [PKMN] in play."),"GS","U"),
        silver: new SUPPORTER("Silver",new SKILL("effect","Switch your [active] [PKMN] with [1] of your [benched] [PKMN]. Then,% switch your [opponent]'[s] [active] [PKMN] with [1] of their% [benched] [PKMN]."),"GS","U"),
        heavyBall: new ITEM("ball","Heavy Ball",new SKILL("effect","Search your [deck] for a [PKMN] with [3] or higher [retreat cost]% and put it into your [hand]."),"GS","U")
    },

    rs: {
        treecko: new PKMN("Treecko",60,["grass"],["basic"],0,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] [energy] from your [hand] to this [PKMN]."),
                             new ATTACK("grass",["grass",],"20","Razor Leaf","Return a [{grass}# energy] attached to this [PKMN] to your [hand].")]
                            ,"RS","C"),
        grovyle: new PKMN("Grovyle",80,["grass"],["stage 1","treecko"],0,null,
                            [new ABILITY("Forrage","Once per turn, you may put a [{grass}Basic # Energy] from your% [discard] into your [hand]."),
                            new ATTACK("grass",["grass","grass"],"30","Razor Leaf","Return a [{grass}# energy] attached to this [PKMN] to your [hand].")]
                            ,"RS","U"),
        sceptile: new PKMN("Sceptile",100,["grass"],["stage 2","grovyle"],1,null,
                            [new ABILITY("Energy Bloom","Once per turn, you may attach a [{grass} # Energy] from% your [hand] to this [PKMN]. If you do, deal [{dmg}10] [{dmg}dmg] to this [PKMN]."),
                            new ATTACK("grass",["grass","grass"],"40","Leaf Blade","Return a [{grass}# energy] attached to this [PKMN] to your [hand].")]
                            ,"RS","R"),
        mSceptile: new PKMN("Sceptile",140,["grass","dragon"],["mega","sceptile"],2,"mega",
                            [new ABILITY("Jagged Saber","The [attacks] of your [{grass}#] [PKMN] are increased by [{dmg}20] [{dmg}dmg] for% each [{grass}# Energy] attached to that [PKMN] during that turn.")]
                            ,"RG","S"),
        roselia: new PKMN("Roselia",50,["grass","poison"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Sweet Scent"," [heal] [{dmg}20] [{dmg}dmg] from one of your [{grass}#] or [{poison}#] [PKMN]."),
                            new ATTACK("poison",["poison","normal"],"20","Poison Barb","Put a [{poison}PSN TOKEN] on the [Defending] [PKMN].")]
                            ,"RS","C"),
        swampert: new PKMN("Swampert",110,["water","ground"],["stage 2","marshtomp"],3,null,
        [new ABILITY("Energy Flood"," [discard] a [{water}# energy] from your [hand] to attach [{ground}2] [{ground}basic]% [{ground}# energy] from your [hand] to [1] of your [{water}#] or [{ground}#] [PKMN]."),
        new ATTACK("water",["water","normal"],"30+","Muddy Water","Does [{dmg}10] more [{dmg}dmg] for each [{water}# energy] attached to this [PKMN].% Then, for each [{ground}# energy] attached to this [PKMN], deal% [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s] [benched] [PKMN].")]
        ,"RS","R"),
        mSwampert: new PKMN("Swampert",150,["water","ground"],["mega","swampert"],4,"mega",
        [new ABILITY("Quaking Whirlpool","If any of your [{water}#] or [{ground}#] [PKMN] has any [{water}# energy] attached, that% [PKMN]s [{ground}# energy] counts as [1] extra [{ground}basic # energy].")]
        ,"RS","S"),
        manectric: new PKMN("Manectric",80,["electric"],["stage 1","electrike"],0,null,
                            [new ATTACK("electric",["normal"],"30","Charge Bolt","Search your [deck] for an [{electric}# energy] and attach it to [1]% of your [{electric}#] [{electric}PKMN]."),
                            new ATTACK("electric",["electric","normal"],"40","Volt Switch","Switch this [PKMN] with [1] of your [benched] [PKMN].")]
                            ,"RS","R"),
        mManectric: new PKMN("Manectric",110,["electric"],["mega","manectric"],0,"mega",
        [new ABILITY("Turbo Bolt","If this [PKMN] became your [active] [PKMN] this turn, this [PKMN]s% [attacks] deal [{dmg}30] more [{dmg}dmg].")]
        ,"RS","S"),
        deoxsys: new PKMN("Deoxsys",70,["psychic"],["basic"],2,null,
        [new ABILITY("DNA Splice","Once per turn, you may [discard] a [{psychic}basic # energy]% from your [hand] to change this [PKMN][s] [ability] to another [1]% of your [{psychic}#] [{psychic}PKMN][{psychic}s] [abilities] for this turn."),
        new ATTACK("psychic",["psychic","normal"],"30+","Psychic","Does [{dmg}10] more [{dmg}dmg] for each [energy] attached to the% [defending] [PKMN].")]
        ,"RS","R"),
        swalot: new PKMN("Swalot",80,["poison"],["stage 1","gulpin"],4,null,
        [new ABILITY("Toxic Absorb","Once per turn, you may remove [{poison} all psn tokens] from [1] of% your [opponent]'[s] [PKMN]. If you do, you may [draw] [2] [cards]."),
         new ATTACK("poison",["poison","poison","normal"],"40","Sludge Bomb","Put [1] [{poison}psn token] on [2] of your [opponent]'[s] [PKMN].")]
        ,"RS","U"),
        poochyena: new PKMN("Poochyena",40,["dark"],["basic",null],1,null,
        [new ATTACK("dark",["dark"],"10","Howl","Discard a [basic energy] attached to the [defending] [PKMN]."),
         new ATTACK("dark",["dark","normal"],"20+","Bite","Flip a coin, if [heads], this [attack] does [{dmg}10] more [{dmg}dmg].")],
        "RS","C"),
        mightyena: new PKMN("Mightyena",60,["dark"],["stage 1","poochyena"],1,null,
        [new ABILITY("Brutal Howl","When you play this [PKMN] you may deal [{dmg}10][{dmg}dmg] to [1] of your% [opponent]'[s] [PKMN]. If you do, deal [{dmg}10][{dmg}dmg] to [1] of your [PKMN]% (not including this one)."),
        new ATTACK("dark",["dark","normal"],"30+","Crunch","Flip a coin, if [heads], this [attack] does [{dmg}20] more [{dmg}dmg].")],
        "RS","U"),
        courtney: new SUPPORTER("Courtney",new SKILL("effect","Look at the bottom card of your deck. If this card is a [PKMN], put it% into your [hand]. If the card is a [{ground}#] [{ground}energy], attach it to [1] of% your [{ground}#] [{ground}PKMN]. If the card is a [trainer], use the effect of that% [trainer] immediately. If it is anything else, or the card is% prevented from being used for any reason, discard the card."),"RS","U"),
        may: new SUPPORTER("May",new SKILL("effect","Put [4] [basic energy] from your [discard] into your [hand]."),"RS","U"),
        sidney: new SUPPORTER("Sidney",new SKILL("effect","If your [opponent]'[s] [bench] is not full, put a [basic] [PKMN] from% your [opponent]'[s] [discard] onto their [bench]. Then, put% [{dmg}10][{dmg}dmg] on that [PKMN]"),"RS","U"),
        wally: new SUPPORTER("Wally",new SKILL("effect","Search your [deck] for a [PKMN] that [evolves] from [1] of your [PKMN]% in play and put it onto that [PKMN]. You can use this [supporter]% during your first turn or on a [PKMN] that was put into play this turn."),"RS","U"),
        vsSeeker: new ACESPEC(null,"VS Seeker",new SKILL("effect","Search your [discard] for a [supporter] and use its effect% as the effect of this [item]. This does not count as your% [supporter] for the turn."),"RS","R")
    },

    dp: {
        turtwig: new PKMN("Turtwig",60,["grass","ground"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN].")]
                            ,"DP","C"),
        roserade: new PKMN("Roserade",70,["grass","poison"],["stage 1","roselia"],2,null,
                            [new ABILITY("POLLEN FEVER","When you attach a [{grass}# energy] from your [hand] to this [PKMN],% you may put a [{psychic}CONF TOKEN] on the [DEFENDING] [PKMN]. When% you attach a [{poison}# ENERGY] from your [HAND] to this [PKMN], you% may put a [{poison}psn token] on the [defending] [PKMN]."),
                             new ATTACK("grass",["grass","normal"],"30","Long Whip", "If the [defending] [PKMN] is [{poison}PSND], deal [{dmg}10] [{dmg}dmg] to [1] of your% [OPPONENT]'[s] [benched] [PKMN].")]
                            ,"DP","U"),
        riolu: new PKMN("Riolu",50,["fighting"],["baby","lucario"],1,null,
        [new ABILITY("Punching Up","This [PKMN] deals [{dmg}20] more [{dmg}dmg] to [evolved] [PKMN] (including% [Mega] and [Gmax] [PKMN])."),
        new ATTACK("fighting",["normal"],"10+","Low Kick","If the [defending] [PKMN] has [3] or more [retreat cost], this% [attack] deals [{dmg}20] more [{dmg}dmg].")],
        "DP","C"),
        wyrdeer: new PKMN("Wyrdeer",90,["normal","psychic"],["stage 1","stantler"],1,null,
                          [new ABILITY("Psyshield","When this [PKMN] is your [active][PKMN], prevent all [{dmg}dmg] done by your% [opponent]'[s] [active] [PKMN] to your [benched] [PKMN]."),
                           new ATTACK("psychic",["psychic","normal"],"40","Psyshield Bash","During your [opponent]'[s] next turn, reduce [{dmg}dmg] done to this% [PKMN] by [{dmg}10][{dmg}dmg] for each [{psychic}#][{psychic}energy] attached to this [PKMN].")],
                          "DP","R"),
        crasherWake: new SUPPORTER("Crasher Wake",new SKILL("effect","Return [1] of your [{water}#] [{water}PKMN] in play to your [hand]. If that [PKMN] had% any [{water}basic # energy] attached, you may attach those% [energy] to your other [{water}#] [{water}PKMN] instead of [discarding] them."),"DP","U"),
        dawn: new SUPPORTER("Dawn",new SKILL("effect","Search your [deck] for a [trainer] and put it into your [hand]."),"DP","U"),
        flint: new SUPPORTER("Flint",new SKILL("effect","Attach [{fire}2] [{fire}basic # energy] from your [discard] to [1] of% your [{fire}#] [{fire}PKMN]."),"DP","U"),
        professorRowan: new SUPPORTER("Professor Rowan",new SKILL("effect","Choose [1] card from your [hand]. Then, shuffle the remaining% cards into your [deck] and draw [4] cards."),"DP","U"),
        duskBall: new ITEM("ball","Dusk Ball", new SKILL("effect","Search your [deck] for a [PKMN] that is in your [{ghost}lost zone]. If you% have no [PKMN] in your [{ghost}lost zone], you may first send a [PKMN] from% your [discard] to the [{ghost}lost zone]."),"DP","U"),
        healBall: new ITEM("ball","Heal Ball", new SKILL("effect","If you [{heal}healed] [1] of your [PKMN] this turn, search your deck for a% [basic] [PKMN] and put it in your [hand]. If you [{heal}healed] [2] or more% [PKMN] this turn, search your [deck] for any [PKMN] and put it in% your [hand]."),"DP","U")
        
    },

    bw: {
      petilil: new PKMN("Petilil",40,["grass"],["basic",null],1,null,
      [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] [{grass}energy] from your [hand] to this [PKMN]."),
        new ATTACK("grass",["normal"],"10","Absorb"," [{heal}Heal] [{dmg}10] [{dmg}dmg] from this [PKMN].")],
      "BW","C"),
      lilligant: new PKMN("Lilligant",70,["grass"],["stage 1","petilil"],2,null,
      [new ABILITY("Healing Dance","Once per turn, when you attach a [{grass}# energy] to this [PKMN],% you may [{heal}heal] [{dmg}10] [{dmg}dmg] from [1] of your [{grass}#][{grass}PKMN]."),
       new ATTACK("grass",["grass","normal"],"30","Mega Drain"," [{heal}Heal] [{dmg}20] [{dmg}dmg] from this [PKMN].")],
      "BW","U"),
      virizion: new PKMN("Verizion",70,["grass"],["basic",null],1,null,
      [new ATTACK("normal",["normal"],"0","Double Draw","Draw [2] cards."),
       new ATTACK("grass",["grass","normal"],"20+","Sacred Sword","If any of your [PKMN] used [sacred sword] during your last turn,% this [attack] does [{dmg}30] more [{dmg}dmg].")],
      "BW","R"),
        garbodor: new PKMN("Garbodor",100,["poison"],["stage 1","trubbish"],4,null,
        [new ABILITY("Trash Collector","Once per turn, you may search you [deck] for an [item] and put% it into your [discard]."),
         new ATTACK("poison",["poison","poison"],"10x","Trashalanch","This [attack] does [{dmg}10] [{dmg}dmg] times the number of [items] in your% [discard] (max [{dmg}150] [{dmg}dmg]).")]
        ,"BW","R"),
        gGarbodor: new PKMN("Garbodor",150,["poison"],["gmax","garbodor"],5,"gmax",
        [new ABILITY("GMAX Malodor","If this [PKMN] is your [Active] [PKMN], All [Tools] and [Special]% [Energy] attached to the [defending] [PKMN] count as% [{poison}PSN Tokens].")]
        ,"BW","S"),
        litwick: new PKMN("Litwick",50,["ghost","fire"],["basic"],1,null,
        [new ABILITY("Ghostly Flame","While in your [hand], [deck], and [discard], this [PKMN] counts as% a [{fire}special # energy] as well as a [PKMN]."),
        new ATTACK("fire",["normal"],"0","Will o Whisp","Put a [{fire}brn token] on the [defending] [PKMN].")]
        ,"BW","C"),
        lampent: new PKMN("Lampent",70,["ghost","fire"],["stage 1", "litwick"],2,null,
        [new ABILITY("Ghostly Flame","If this [PKMN] is in your hand, and there is a [Litwick] in your% [discard], you may play this [PKMN] directly onto your [bench]. %Then, shuffle [1] [Litwick] from your [discard] into your [deck]."),
        new ATTACK("ghost",["ghost","normal"],"30+","Hexing Singe","If the [defending] [PKMN] has any [{fire}brn tokens] on them, this% [attack] does [{dmg}20] more [{dmg}dmg].")]
        ,"BW","U"),
        chandelure: new PKMN("Chandelure",100,["ghost","fire"],["stage 2", "lampent"],3,null,
        [new ATTACK("fire",["fire","normal"],"0","Will o Whisp","Put [{fire}1] [{fire}brn tokens] on [2] your [opponent]'[s] [PKMN]."),
        new ATTACK("ghost",["fire","ghost","normal"],"10x","Burning Souls","Discard [any number] of [{fire}# energy] from your [hand]. This% [attack] does [{dmg}10] [{dmg}dmg] for each [energy] discarded in this way.% Any [litwick] discarded by the effect of this [attack] deal% [{dmg}30] [{dmg}dmg] instead.")]
        ,"BW","R"),
        cobalion: new PKMN("Cobalion",70,["steel"],["basic",null],2,null,
        [new ATTACK("steel",["normal"],"0","Steel Press","Search your [deck] for up to [{steel}2 basic # energy] and put% them% into your [hand]."),
          new ATTACK("steel",["steel","normal"],"20+","Sacred Sword","If any of your [PKMN] used [sacred sword] during your last turn,% this [attack] does [{dmg}30] more [{dmg}dmg].")],
        "BW","R"),
        n: new SUPPORTER("N",new SKILL("effect","Each player shuffles their [hand] into their [deck] and draws% a card for each of their remaining [prizes]."),"BW","U"),
        chili: new SUPPORTER("Chili",new SKILL("effect","Draw [2] [cards]. For each of those [cards] that is a [{fire}# energy]%, your [active] [PKMN][s attacks] deal [{dmg}20] more [{dmg}dmg] this turn."),"BW","U"),
        grimsley: new SUPPORTER("Grimsley",new SKILL("effect","You may move up to [{dmg}30][{dmg}dmg] on your [opponent]'[s] [PKMN] to% any of your [opponent]'[s] other [PKMN]."),"BW","U"),
        professorJuniper: new SUPPORTER("Prof. Juniper",new SKILL("effect","Search your [deck] for up to [2] in any combination of [basic]% [energy] and [basic] [PKMN] and put them into your [hand]."),"BW","U")
    },


    xy: {
        chesnaught: new PKMN("Chesnaught",120,["grass","fighting"],["stage 2","quilladin"],3,null,
        [new ABILITY("Spikey Shield","When this [PKMN] takes [{dmg}dmg] caused by the [opponent], you may% deal [{dmg}10] [{dmg}dmg] to [2] of your [opponent]'[s] [PKMN]."),
        new ATTACK("grass",["grass","fighting","normal"],"50","Revenge","If this [PKMN] was [{dmg}damaged] during your [opponent]'[s] last turn,% this [attack] deals [{dmg}70] more [{dmg}dmg].")]
        ,"XY","R"),
        florges: new PKMN("Florges",100,["fairy"],["stage 2","floette"],3,null,
                            [new ABILITY("Fairy Field","Once per turn, you may move a [{fairy}# energy] attached to [1] of% your [benched] [{fairy}#] [{fairy}PKMN] to your [active] [{fairy}#] [PKMN] to switch the% [active] [PKMN] and the [benched] [PKMN]."),
                             new ATTACK("fairy",["fairy","fairy"],"10+","Bright Garden","Does [{dmg}10] more [{dmg}dmg] for each of your [benched] [{fairy}#] [PKMN] that% have at least [{fairy}1# energy] attached.")],
                            "XY","R"),
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
        professorSycamore: new SUPPORTER("Prof. Sycamore",new SKILL("effect","If you do not have a [mega] [PKMN] in play, search your [deck] for% a [mega] [PKMN] that [evolves] from [1] of your [PKMN] and put it onto% that [PKMN]. You can use this [supporter] on a [PKMN] that was put% into play this turn (but not if it is your first turn)."),"XY","U")
    },
    sm: {
        decidueye: new PKMN("Decidueye",90,["grass","ghost"],["stage 2","dartrix"],1,null,
        [new ABILITY("Ghost Arrow","You may send a [{grass}#] or [{ghost}#] [Energy] from your [hand] to the% [{ghost}lost zone] to deal [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s] [PKMN].%You may only do this once for each [type] of [energy] per turn."),
        new ATTACK("grass",["grass","normal","normal"],"0","Something","Deal [{dmg}30] [{dmg}dmg] to [2] of your [opponent]'[s] [PKMN].")]
        ,"SM","R"),
        shiinotic: new PKMN("Shiinotic",70,["grass","fairy"],["stage 1","morellul"],3,null,
                            [new ABILITY("Flickering Spores","Whenevery you attach a [{grass}#] or [{fairy}#] [energy] to [1] of your [{grass}#] or% [{fairy}#] [PKMN], [{heal}heal] [{dmg}10][{dmg}dmg] from that [PKMN]"),
                             new ATTACK("grass",["grass","normal"],"10+","Haunting Aroma","Does [{dmg}10] more [{dmg}dmg] for each of your [{grass}#] or [{fairy}#] [PKMN] that were% [{heal}healed] during this turn.")],
                            "SM","R"),
        minior: new PKMN("Minior",40,["rock","flying"],["basic",null],0,null,
        [new ABILITY("Falling Star","If your [bench] is not full, you may move you [active] [PKMN] to% your [bench] and play this [PKMN] as your new [active] [PKMN]."),
         new ATTACK("rock",["rock","normal"],"10","Gather","You may search your [deck] for a [{rock}basic #][{rock}PKMN] and put it% on your [bench].")],
        "SM","U"),
        naganadel: new PKMN("Naganadel",90,["poison","dragon"],["stage 1","poipole"],2,null,
        [new ABILITY("Toxic Stinger","You may [discard] a [{poison}#] [{poison}Energy] attached to this [PKMN] to put% [{poison}1] [{poison}PSN Token] on [1] of your [opponent]'[s] [PKMN]."),
        new ATTACK("poison",["poison","poison"],"0","Caustic Snipe","Deal [{dmg}10] [{dmg}dmg] to up to [3] of your [opponent]'[s] [{poison}psnd] [PKMN].")]
        ,"SM","R"),
        professorKukui: new SUPPORTER("Professor Kukui",new SKILL("effect","Draw [2] cards. During this turn, your [PKMN]s [attacks] do [{dmg}20]% more [{dmg}dmg] to the [defending] [PKMN]."),"SM","U")
    },

    ss: {
        grookey: new PKMN("Grookey",40,["grass"],["basic",null],1,null,
                          [new ATTACK("grass",["normal"],"0","Forage","Search your [deck] for a [{grass}# energy] and attach it to [1] of your% [benched] [{grass}#] [{grass}PKMN]"),
                           new ATTACK("grass",["grass","normal"],"20","Branch Poke","Flip a coin, if heads, deal [{dmg}10] [{dmg}dmg] to [1] of your [opponent]'[s]% [benched] [PKMN].")],
                          "SS","C"),
        thwackey: new PKMN("Thwackey",60,["grass"],["basic",null],2,null,
                          [new ABILITY("Lay of the Land","If this [PKMN] has any [{grass}# energy] attached, this [PKMN] has no% [retreat cost]."),
                           new ATTACK("grass",["grass","normal"],"20x","Double Hit","Flip a coin. This [attack] does [{dmg}20][{dmg}dmg] for each [heads].")],
                          "SS","U"),
        rillaboom: new PKMN("Rillaboom",100,["grass"],["stage 2","thwackey"],3,null,
                           [new ABILITY("Inspiring Beat","One during your turn, when [1] of your [{grass}#][{grass}PKMN] is [{heal}healed], you% may search your [deck] for a [{grass}# energy] and attach it to% that [{grass}PKMN]"),
                            new ATTACK("grass",["grass","grass","normal"],"40+","Drum Rush","You may discard [{grass}1 # energy] from each of your [{grass}#][{grass}PKMN]. This% attack deals [{dmg}20] more [{dmg}dmg] for each [{grass}# energy] discarded.")],
                           "SS","R"),
        gRillaboom: new PKMN("Rillaboom",140,["grass"],["gmax","rillaboom"],4,"gmax",
                            [new ABILITY("GMAX Drum Solo","Whenever you attach a [{grass}# energy] with the effect of% [inspiring beat], deal [{dmg}10] [{dmg}dmg] to the [defending] [PKMN].")],
                            "SS","S"),
        gCinderace: new PKMN("Cinderace",130,["fire"],["gmax","cinderace"],2,"gmax",
        [new ABILITY("GMAX Fireball","Whenever [1] of your [opponent]'[s] [{fire}brnd] [PKMN] would have a% [{fire}brn token] put on them, but already has [{fire}2] [{fire}brn tokens],% deal [{dmg}10] [{dmg}dmg] to that [PKMN].")],
        "SS","S"),
        hatterene: new PKMN("Hatterene", 110, ["psychic","fairy"],["stage 2","hattrem"],3,null,
        [new ABILITY("Silent Drain","This [PKMN] may use the [energy] attached to the [defending]% [PKMN] to pay for its [attacks]."),
        new ATTACK("fairy",["fairy","psychic","normal","normal"],"30x","Magic Powder","This [attack] does [{dmg}30] [{dmg}dmg] for each unique [energy type]% used to pay for this [attack] (max [{dmg}150] [{dmg}dmg]).")]
        ,"SS","R"),
        gHatterene: new PKMN("Hatterene", 150, ["psychic","fairy"],["gmax","hatterene"],4,"gmax",
        [new ABILITY("GMAX Smite", "Each of your [{psychic}#] [{psychic}PKMN] always have [1] [{psychic}#] [{psychic}Energy] attached to% them and each of your [{fairy}#] [PKMN] always have [1] [{fairy}#] [{fairy}Energy]% attached to them. Any [PKMN] that is both [{psychic}#] and [{fairy}#] have [1] of% each [Energy]. (You cannot discard these Energy with attacks% or use it to Retreat)")],
        "SS","S")
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
        stone: new Energy("rock",true,"Reduce all [{dmg}dmg] done to the [{rock}#][{rock}PKMN] this [energy] is attached% to by [{dmg}10].","stone","EG","R"),
        quake: new Energy("ground",true,"When the [{ground}#] [{ground}PKMN] this [energy] is attached to deals [{dmg}dmg]% to the [defending] [PKMN], you may deal [{dmg}10] [{dmg}dmg] to [1] of your% [opponent]'[s] [benched] [PKMN].","quake","EG","R"),
        toxic: new Energy("poison",true,"When the [{poison}#] [{poison}PKMN] this [energy] is attached to deals [{dmg}dmg] to% the [defending] [PKMN], put a [{poison}psn token] on that [PKMN].","toxic","EG","R"),
        swarm: new Energy("bug",true,"The [{bug}#] [{bug}PKMN] this [energy] is attached to does not count as% taking up a space on your [bench]. If this [energy] is removed% from a [PKMN], and your bench has more than [5] [PKMN], return% that [PKMN] and all cards attached to it to your [hand].","swarm","EG","R"),
        cyclone: new Energy("flying",true,"When you attach this [energy] from your [hand] to your% [active] [{flying}#] [{flying}PKMN], you may switch the [defending] [PKMN] with [1]% of your [opponent]'[s] [benched] [PKMN]. The [{flying} #] [{flying}PKMN] that this% [energy] is attached to has no [retreat cost].","cyclone","EG","R"),
        ascendant: new Energy("dragon",true,"When you attach this [energy] to [1] of your [{dragon}#] [{dragon}PKMN], you may% search your [deck] for a [PKMN] that [evolves] from that [PKMN] and% put it onto that [PKMN] (you can do this on the first turn a [PKMN] was% brought into play). If the [PKMN] this [energy] is attached to is a% [fully evolved] [PKMN], this [PKMN][s] [attacks] do [{dmg}10] more [{dmg}dmg].", "ascendant", "EG", "R"),
        cruel: new Energy("dark",true,"When the [{dark}#] [{dark}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], deal [{dmg}10] [{dmg}dmg] to the [defending] [PKMN].","cruel","EG","R"),
        iron: new Energy("steel",true,"When the [{steel}#] [{steel}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], this [PKMN] is not affected by any additional% effects caused by that [attack]. This [energy] increases the% [retreat cost] of the [PKMN] it's attached to is increased by [1].","iron","EG","R"),
        wonder: new Energy("fairy",true,"The [attacks] of the [{fairy}#][{fairy}PKMN] this [energy] is attached to deal% [{dmg}10] more [{dmg}dmg] for each other [{fairy}#][{fairy}PKMN] in play with a% [{fairy}Wonder Energy] attached.","wonder","EG","R"),
        doubleColorless: new Energy("normal",true,"This [energy] counts as [{normal}2] [{normal}# energy].","double colorless", "EG", "R"),
        rainbow: new Energy("normal",true,"This card provides [{normal}# energy]. While in play, this [energy]% provides every type of [Energy] but provides only [1] [energy]% at a time. When you attach this [energy] to a [PKMN], deal% [{dmg}10] [{dmg}dmg] to that [PKMN].","rainbow","EG","R")
    }
}