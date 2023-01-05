import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";

export const TaurosW: Pokemon = {
    name: "Tauros (W)",
    moves: [
        {
            name: 'Wave Crash',
            type: EType.Water,
        },
    ],
    types: [EType.Ghost],
};