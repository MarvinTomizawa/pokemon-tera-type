import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";
import { EWeather_Terrain } from "../common/Weather_Terrain";

export const TaurosF: Pokemon = {
    name: "Tauros (F)",
    moves: [
        {
            name: 'Flare Blitz',
            type: EType.Fire,
            status: EStatus.Burn,
            category: ECategory.Attack,
        },
        {
            name: 'Close Combat',
            type: EType.Fighting,
            category: ECategory.Attack,
        },
        {
            name: 'Flamethrower',
            type:  EType.Fire,
            status: EStatus.Burn,
            category: ECategory.SPAttack,
        },
        {
            name: 'Headbutt',
            type: EType.Normal,
            category: ECategory.Attack,
            status: EStatus.Flinch,
        },
        {
            name: 'Sunny Day',
            type: EType.Fire,
            terrain: EWeather_Terrain.Sunshine,
            category: ECategory.Status,
        },
        {
            name: 'Bulk Up',
            type: EType.Fighting,
            category: ECategory.Status,
        },
    ],
    types: [EType.Fighting, EType.Fire],
};