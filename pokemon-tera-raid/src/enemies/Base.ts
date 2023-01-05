import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";
import { EWeather_Terrain } from "../common/Weather_Terrain";
import { ECategory } from "../common/Category";

export const BaseEnemy: Pokemon = {
    name: "Generico",
    moves: [
        {
            name: 'Shadow ball',
            type: EType.Ghost,
            status: EStatus.Poison,
            category: ECategory.SP
        },
    ],
    types: [EType.Ghost],
};