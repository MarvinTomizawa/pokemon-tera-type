import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";
import { ECategory } from "../common/cayegory";
import { EWeather_Terrain } from "../common/Weather_Terrain";

export const TaurosW: Pokemon = {
    name: "Tauros (W)",
    moves: [
        {
            name: 'Wave Crash',
            type: EType.Water,
            category: ECategory.Attack,
        },
        {
            name: 'Close Combat',
            type: EType.Fighting,
            category: ECategory.Attack,
        },
        {
            name: 'Surf',
            type: EType.Water,
            category: ECategory.SPAttack,
        },
        {
            name: 'Headbutt',
            type: EType.Normal,
            status: EStatus.Flinch,
            category: ECategory.Attack,
        },
        {
            name: 'Rain Dance',
            type: EType.Water,
            terrain: EWeather_Terrain.Rain,
            category: ECategory.status,
        },
        {
            name: 'Bulk Up',
            type: EType.Fighting,
            category: ECategory.Status,
        },
    ],
    types: [EType.Fighting, EType.Water],
};