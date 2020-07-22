const typeDb = {
    types: ["grass","fire","water","electric","psychic","fighting","rock","ground","poison","bug","ice","ghost","flying","dragon","dark","steel","fairy","normal"],
    matchups: {
        grass: [["fire","poison","bug","ice","flying"],["grass","water","electric","ground"]],
        fire: [],
        poison: [["psychic","ground"],["grass","fighting","poison","bug","fairy"]]
    }
}