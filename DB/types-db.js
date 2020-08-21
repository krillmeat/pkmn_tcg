const typeDb = {
    types: ["grass","fire","water","electric","psychic","fighting","rock","ground","poison","bug","ice","ghost","flying","dragon","dark","steel","fairy","normal"],
    matchups: {
        grass: [["fire","poison","bug","ice","flying"],["grass","water","electric","ground"]],
        fire: [["water","rock","ground"],["grass","fire","bug","ice","steel","fairy"]],
        water: [["grass","electric"],["fire","water","ice","steel"]],
        electric: [["ground"],["electric","flying","steel"]],
        psychic: [["bug","ghost","dark"],["psychic","fighting"]],
        fighting: [["psychic"],[]],
        rock: [["grass","water","fighting","ground","steel"],["fire","poison","flying","normal"]],
        ground: [["grass","water","ice"],["electric","poison","rock"]],
        poison: [["psychic","ground"],["grass","fighting","poison","bug","fairy"]],
        ghost: [["ghost","dark"],["psychic","normal"]],
        ice: [["fire"],["water"]],
        flying: [["electric","rock","ice"],["grass","fighting","ground","bug"]],
        dragon: [["ice","dragon","fairy"],["grass","fire","water","electric"]],
        dark: [["fighting","bug","fairy"],["ghost","dark"]],
        fairy: [["poison","steel"],["fighting","bug","dragon","dark"]],
        normal: [["fighting"],["ghost"]]
    }
}