import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";
import { EWeather_Terrain } from "../common/Weather_Terrain";
import { ECategory } from "../common/Category";

export const BaseEnemy: Pokemon = {
    name: "Gyarados",
    moves: [
        {
            name: 'Aqua Tail',
            type: EType.Water,
            category: ECategory.Attack,
        },
        {
            name:'Crunch',
            type: EType.Dark,
            category: ECategory.Attack,
        },
        {
            name: 'Hurricane',
            type: EType.Flying,
            category: ECategory.SPAttack,
            status: EStatus.Confusion,
        },
        {
            name: 'Ice Fang',
            type: EType.Ice,
            category: ECategory.Attack,
            status: EStatus.Freeze,
        },
        {
            name: 'Taunt',
            type: EType.Dark,
            category: ECategory.Status,
        },
        { 
            name: 'Dragon Dance',
            type: EType.Dragon,
            category: ECategory.Status,
        },

    ],
    types: [EType.Flying,EType.Water],
};