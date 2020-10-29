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
        vulpix: new PKMN("Vulpix",60,["fire"],["basic"],1,null,
        [new ATTACK("fire",["fire"],"0","Call for Family","Search your [DECK] for a [{fire}#] [{fire}PKMN] and put it into your [HAND]."),
        new ATTACK("fire",["fire","normal"],"20","Fire Fang", "Put a [{fire}brn token] on the [defending] [PKMN].")]
        ,"RG","C"),
        ninetales: new PKMN("Ninetales",90,["fire"],["stage 1","vulpix"],2,null,
        [new ABILITY("Roast Reveal","Once per turn, you may discard a [{fire}# ENERGY] from your hand% in order to draw [2] cards from your [deck]."),
        new ATTACK("fire",["fire","fire","normal"],"50","Roasting Heat", "Put a [{fire}BRN TOKEN] on [1] of your [opponent]'[s] [PKMN].")]
        ,"RG","R"),
        flareon: new PKMN("Flareon",80,["fire"],["stage 1","eevee"],1,null,
        [new ABILITY("Flame Guard","This [PKMN] is not affected by being [{fire}BRND]."),
        new ATTACK("fire",["fire"],"10x","Blaze Strike","Does [{dmg}10] [{dmg}dmg] for each [{fire}BRND] [PKMN] in play.")],
        "RG","R"),
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
        vaporeon: new PKMN("Vaporeon",90,["water"],["stage 1","eevee"],1,null,
        [new ABILITY("Aqua Refresh","Whenever you attach a [{water}# energy] from your hand to [1] of% your [PKMN], heal [{dmg}20] [{dmg}dmg] from that [PKMN]. This [ability] may only% be used an a [PKMN] once per turn."),
        new ATTACK("water",["water"],"10+","Splashing Wave","Does [{dmg}10] more [{dmg}dmg] for each of your [PKMN] with any [{water}# energy]% attached to them.")],
        "RG","R"),
        jolteon: new PKMN("Jolteon",80,["electric"],["stage 1","eevee"],1,null,
        [new ABILITY("Zap Dash","Your [PKMN] with any [{electric}# ENERGY] pay [2] less to [retreat]."),
        new ATTACK("electric",["electric"],"40","Charge Strike","Deal  [{dmg}10] [{dmg}dmg] to this [PKMN].")],
        "RG","R"),
        nidoking: new PKMN("Nidoking",120,["poison","ground"],["stage 2","nidorino"],4,null,
        [ new ATTACK("poison",["poison","poison"],"30","Sludge Wave","Put [{poison} 2] [{poison}psn tokens] on your [opponent]'[s] [PKMN] in any% way you like."),
        new ATTACK("poison",["poison","ground","normal","normal"],"60","Toxic Quake","Deal [{dmg}10] [{dmg}dmg] to each of your [opponent]'[s benched] [PKMN]% for each [{poison}psn token] on the [defending] [PKMN].")],
        "RG","R"),
        weezing: new PKMN("Weezing",80,["poison"],["stage 1","koffing"],3,null,
        [new ABILITY("Toxic Bomb","When this [PKMN] is [{dmg}KO]d, put [{poison}1] [{poison}psn token] on each [PKMN] in play."),
        new ATTACK("normal",["normal","normal","normal"],"90","Self Destruct"," [{dmg}KO] this [PKMN].")],
        "RG","R"),
        weedle: new PKMN("Weedle",40,["bug","poison"],["basic"],1,null,
        [new ATTACK("poison",["normal"],"10","Poison Sting","Put a [{poison}psn token] on the [defending] [PKMN].")]
        ,"RG","C"),
        kakuna: new PKMN("Kakuna",60,["bug","poison"],["stage 1","weedle"],3,null,
        [new ABILITY("Metamorphasis","After you attack, but before [special conditions], you may search your [deck] for a [PKMN] that[evolves] from this [PKMN] and put it on this [PKMN]."),
        new ATTACK("bug",["normal"],"10+","Struggle Bug","If the [defending] [PKMN] has any [special condition tokens] on them, this attack deals [{dmg}30] more [{dmg}dmg].")]
        ,"RG","U"),
        beedrill: new PKMN("Beedrill",90,["bug","poison"],["stage 2","kakuna"],1,null,
        [new ABILITY("Poison Needle","Once during your turn, you may discard [{poison}1] [{poison}# energy] from% your [hand] to place [1] [{poison}psn token] on [1] of your% [opponent]'[s] [PKMN]."),
        new ATTACK("bug",["normal","normal"],"10x","Flurry Needle","Flip a [coin] for each [{poison}psn token] on all [PKMN] in play. This% [attack] does [{dmg}10] [{dmg}dmg] for each [heads].")],
        "RG","R"),
        gengar: new PKMN("Gengar",100,["ghost","poison"],["stage 2","haunter"],0,null,
        [new ABILITY("phantom curse","Once per turn, you may send [1] of your [opponent]'[s]% [basic energy] from their [discard] to their [{ghost}lost zone].% Then, deal [{dmg}20] [{dmg}dmg] to this [PKMN]."),
         new ATTACK("ghost",["ghost","normal"],"10x","Phantom Pain","Does [{dmg}10] [{dmg}dmg] for each [energy] in both player's [lost zones].")],
         "RG","R"),
        eevee: new PKMN("Eevee",50,["normal"],["basic"],1,null,
        [new ABILITY("Energy Evolution","When you attach an [energy] from your [hand] to this [PKMN],% you may search your [deck] for a [PKMN] that [evolves] from% this [PKMN] that is the same [TYPE] as that [energy] and use it% to [evolve] this [PKMN]."),
        new ATTACK("normal",["normal"],"0","Fetch","Draw [2] [Cards].")],
        "RG","C"),
        brock: new SUPPORTER("Brock",new SKILL("effect","Shuffle your [hand] into your [deck]. Then, draw a [card] for% each [retreat cost] over [2] on each of your [{rock}#] [{rock}PKMN]% (for a [PKMN] with [4] [retreat cost], you would draw [2] [cards])."),"RG","U"),
        flint: new SUPPORTER("Flint",new SKILL("effect","Attach [{fire}2] [{fire}basic # energy] from your [discard] to [1] of% your [{fire}#] [{fire}PKMN]."),"RG","U"),
        green: new SUPPORTER("Green",new SKILL("effect","Discard up to [2] [PKMN] from your [HAND] and [draw] [3] [cards]% for each [PKMN] you discarded."),"RG","U"),
        janine: new SUPPORTER("Janine",new SKILL("effect","Put [2] [{poison}psn tokens] on [1] of your [opponent]'[s] [PKMN]."),"RG","U"),
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
        meganium: new PKMN("Meganium",130,["grass"],["stage 2","bayleef"],4,null,
        [new ABILITY("Energy Trans","You may move any number of [{grass}# energy] from [1] of your% [{grass}#] [{grass}PKMN] to another one of your [{grass}#] [{grass}PKMN]."),
        new ATTACK("grass",["grass","grass","normal"],"70","Giant Bloom","Heal [{dmg}20] [{dmg}dmg] from this [PKMN].")]
        ,"GS","R"),
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
        gold: new SUPPORTER("Gold",new SKILL("effect","Discard an [energy] from your [hand]. Then, draw [4] cards."),"GS","U"),
        koga: new SUPPORTER("Koga",new SKILL("effect","Shuffle your [hand] into your [deck]. Then, draw a [card] for% each [benched] [PKMN] with any [{poison}psn tokens] on them."),"HG","U"),
        kurt: new SUPPORTER("Kurt",new SKILL("effect","Search your [deck] for up to [3] [ball items] and put them% into your [hand]."),"GS","U"),
        morty: new SUPPORTER("Morty",new SKILL("effect","Switch the [defending] [PKMN] with [1] of your [opponent]'[s]% [benched] [PKMN] by sending a [{ghost}# energy] from your% [discard] to the [lost zone] for that [PKMN][s] [retreat cost]."),"GS","U"),
        professorElm: new SUPPORTER("Professor Elm",new SKILL("effect","Shuffle your [hand] into your [deck] and [draw] a card for% each [evolved] [PKMN] in play."),"GS","U"),
        silver: new SUPPORTER("Silver",new SKILL("effect","Switch your [active] [PKMN] with [1] of your [benched] [PKMN]. Then,% switch your [opponent]'[s] [active] [PKMN] with [1] of their% [benched] [PKMN]."),"GS","U"),
        heavyBall: new ITEM("ball","Heavy Ball",new SKILL("effect","Search your [deck] for a [PKMN] with [3] or higher [retreat cost]% and put it into your [hand]."),"GS","U")
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
                            new ATTACK("poison",["poison","normal"],"20","Poison Barb","Put a [{poison}PSN TOKEN] on the [Defending] [PKMN].")]
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
        may: new SUPPORTER("May",new SKILL("effect","Put [4] [basic energy] from your [discard] into your [hand]."),"RS","U"),
        wally: new SUPPORTER("Wally",new SKILL("effect","Search your [deck] for a [PKMN] that [evolves] from [1] of your [PKMN]% in play and put it onto that [PKMN]. You can use this [supporter]% during your first turn or on a [PKMN] that was put into play this turn."),"RS","U"),
        vsSeeker: new ACESPEC(null,"VS Seeker",new SKILL("effect","Search your [discard] for a [supporter] and use its effect% as the effect of this [item]. This does not count as your% [supporter] for the turn."),"RS","R")
    },

    dp: {
        turtwig: new PKMN("Turtwig",60,["grass","ground"],["basic"],1,null,
                            [new ATTACK("grass",["normal"],"0","Growth","Attach a [{grass}#] or [{poison}#] [energy] from your [hand] to this [PKMN].")]
                            ,"DP","C"),
        roserade: new PKMN("Roserade",70,["grass","poison"],["stage 1","roselia"],2,null,
                            [new ABILITY("POLLEN FEVER","When you attach a [{grass}# energy] from your [hand] to this [PKMN],% you may put a [{psychic}CONF TOKEN] on the [DEFENDING] [PKMN]. When% you attach a [{poison}# ENERGY] from your [HAND] to this [PKMN], you% may put a [{poison}psn token] on the [defending] [PKMN]."),
                             new ATTACK("grass",["grass","normal"],"30","Long Whip", "If the [defending] [PKMN] is [{poison}PSND], deal [{dmg}20] [{dmg}dmg] to [1] of your% [OPPONENT]'[s] [benched] [PKMN].")]
                            ,"DP","U"),
        riolu: new PKMN("Riolu",50,["fighting"],["baby","lucario"],1,null,
        [new ABILITY("Punching Up","This [PKMN] deals [{dmg}20] more [{dmg}dmg] to [evolved] [PKMN] (including% [Mega] and [Gmax] [PKMN])."),
        new ATTACK("fighting",["normal"],"10+","Low Kick","If the [defending] [PKMN] has [3] or more [retreat cost], this% [attack] deals [{dmg}20] more [{dmg}dmg].")],
        "DP","C"),
        crasherWake: new SUPPORTER("Crasher Wake",new SKILL("effect","Return [1] of your [{water}#] [{water}PKMN] in play to your [hand]. If that [PKMN] had% any [{water}basic # energy] attached, you may attach those% [energy] to your other [{water}#] [{water}PKMN] instead of [discarding] them."),"DP","U"),
        dawn: new SUPPORTER("Dawn",new SKILL("effect","Search your [deck] for a [trainer] and put it into your [hand]."),"DP","U"),
        erika: new SUPPORTER("Erika",new SKILL("effect","During this turn, whenever [1] of your [{grass}#][{grass}PKMN] is [{heal}healed], you% may draw a [card]."),"DP","U"),
        professorRowan: new SUPPORTER("Professor Rowan",new SKILL("effect","Choose [1] card from your [hand]. Then, shuffle the remaining% cards into your [deck] and draw [4] cards."),"DP","U")
        
    },

    bw: {
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
        n: new SUPPORTER("N",new SKILL("effect","Each player shuffles their [hand] into their [deck] and draws% a card for each of their remaining [prizes]."),"BW","U"),
        chili: new SUPPORTER("Chili",new SKILL("effect","Draw [2] [cards]. For each of those [cards] that is a [{fire}# energy]%, your [active] [PKMN][s attacks] deal [{dmg}20] more [{dmg}dmg] this turn."),"BW","U"),
        professorJuniper: new SUPPORTER("Prof. Juniper",new SKILL("effect","Search your [deck] for up to [2] in any combination of [basic]% [energy] and [basic] [PKMN] and put them into your [hand]."),"BW","U")
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
        professorSycamore: new SUPPORTER("Prof. Sycamore",new SKILL("effect","If you do not have a [mega] [PKMN] in play, search your [deck] for% a [mega] [PKMN] that [evolves] from [1] of your [PKMN] and put it onto% that [PKMN]. You can use this [supporter] on a [PKMN] that was put% into play this turn (but not if it is your first turn)."),"XY","U")
    },

    sm: {
        professorKukui: new SUPPORTER("Professor Kukui",new SKILL("effect","Draw [2] cards. During this turn, your [PKMN]s [attacks] do [{dmg}20]% more [{dmg}dmg] to the [defending] [PKMN]."),"SM","U")
    },

    ss: {
        gCinderace: new PKMN("Cinderace",130,["fire"],["gmax","cinderace"],2,"gmax",
        [new ABILITY("Scorching Aura","Whenever [1] of your [opponent]'[s] [{fire}brnd] [PKMN] would have a% [{fire}brn token] put on them, but already has [{fire}2] [{fire}brn tokens],% deal [{dmg}10] [{dmg}dmg] to that [PKMN].")],
        "SS","S"),
        hatterene: new PKMN("Hatterene", 110, ["psychic","fairy"],["stage 2","hattrem"],3,null,
        [new ABILITY("Silent Drain","This [PKMN] may use the [energy] attached to the [defending]% [PKMN] to pay for its [attacks]."),
        new ATTACK("fairy",["fairy","psychic","normal","normal"],"30x","Magic Powder","This [attack] does [{dmg}30] [{dmg}dmg] for each unique [energy type]% used to pay for this [attack] (max [{dmg}150] [{dmg}dmg]).")]
        ,"SS","R"),
        gHatterene: new PKMN("Hatterene", 150, ["psychic","fairy"],["gmax","hatterene"],4,"gmax",
        [new ABILITY("GMAX Smite", "???.")],
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
        quake: new Energy("ground",true,"When the [{ground}#] [{ground}PKMN] this [energy] is attached to deals [{dmg}dmg]% to the [defending] [PKMN], you may deal [{dmg}20] [{dmg}dmg] to your% [opponent]'[s] [benched] [PKMN], split any way.","quake","EG","R"),
        toxic: new Energy("poison",true,"When the [{poison}#] [{poison}PKMN] this [energy] is attached to deals [{dmg}dmg] to% the [defending] [PKMN], put a [{poison}psn token] on that [PKMN].","toxic","EG","R"),
        swarm: new Energy("bug",true,"The [{bug}#] [{bug}PKMN] this [energy] is attached to does not count as% taking up a space on your [bench]. If this [energy] is removed% from a [PKMN], and your bench has more than [5] [PKMN], return% that [PKMN] and all cards attached to it to your [hand].","swarm","EG","R"),
        cyclone: new Energy("flying",true,"When you attach this [energy] from your [hand] to your% [active] [{flying}#] [{flying}PKMN], you may switch the [defending] [PKMN] with [1]% of your [opponent]'[s] [benched] [PKMN]. The [{flying} #] [{flying}PKMN] that this% [energy] is attached to has no [retreat cost].","cyclone","EG","R"),
        ascendant: new Energy("dragon",true,"When you attach this [energy] to [1] of your [{dragon}#] [{dragon}PKMN], you may% search your [deck] for a [PKMN] that [evolves] from that [PKMN] and% put it onto that [PKMN] (you can do this on the first turn a [PKMN] was% brought into play). If the [PKMN] this [energy] is attached to is a% [fully evolved] [PKMN], this [PKMN][s] [attacks] do [{dmg}10] more [{dmg}dmg].", "ascendant", "EG", "R"),
        cruel: new Energy("dark",true,"When the [{dark}#] [{dark}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], deal [{dmg}10] [{dmg}dmg] to the [defending] [PKMN].","cruel","EG","R"),
        iron: new Energy("steel",true,"When the [{steel}#] [{steel}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], this [PKMN] is not affected by any additional% effects caused by that [attack]. This [energy] increases the% [retreat cost] of the [PKMN] it's attached to is increased by [1].","iron","EG","R"),
        iron: new Energy("steel",true,"When the [{steel}#] [{steel}PKMN] this [energy] is attached to is dealt [{dmg}dmg]% by the [defeding] [PKMN], this [PKMN] is not affected by any additional% effects caused by that [attack]. This [energy] increases the% [retreat cost] of the [PKMN] it's attached to is increased by [1].","wonder","EG","R"),
        doubleColorless: new Energy("normal",true,"This [energy] counts as [{normal}2] [{normal}# energy].","double colorless", "EG", "R"),
        rainbow: new Energy("normal",true,"This card provides [{normal}# energy]. While in play, this [energy]% provides every type of [Energy] but provides only [1] [energy]% at a time. When you attach this [energy] to a [PKMN], deal% [{dmg}10] [{dmg}dmg] to that [PKMN].","rainbow","EG","R")
    }
}