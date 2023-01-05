import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";

export const BaseEnemy: Pokemon = {
    name: "Generico",
    moves: [
        {
            name: 'Shadow ball',
            type: EType.Ghost,
            status: EStatus.Poison
        },
    ],
    types: [EType.Ghost],
};