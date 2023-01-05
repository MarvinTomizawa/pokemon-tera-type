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
        },
        {
            name: 'Close Combat',
            type: EType.Fighting,
        },
        {
            name: 'Flamethrower',
            type:  EType.Fire,
            status: EStatus.Burn,
        },
        {
            name: 'Headbutt',
            type: EType.Fighting,
        },
        {
            name: 'Sunny Day',
            type: EType.Fire,
            terrain: EWeather_Terrain.Sunshine,
        },
        {
            name: 'Bulk Up',
            type: EType.Fighting,
        },
    ],
    types: [EType.Fighting, EType.Fire],
};