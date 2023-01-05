import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";
import { ECategory } from "../common/cayegory";

export const Gengar: Pokemon = {
    name: "Gengar",
    moves: [
        {
            name: 'Shadow ball',
            type: EType.Ghost,
            category: ECategory.SPAttack,
        },
        {
            name: 'Sludge bomb',
            type: EType.Poison,
            status: EStatus.Poison,
            category: ECategory.SPAttack,
        },
        {
            name: 'Dazzling Gleam',
            type: EType.Fairy,
            category: ECategory.SPAttack,
        },
        {
            name: 'Will o wisp',
            type: EType.Fire,
            status: EStatus.Burn,
            category: ECategory.Status,
        },
        {
            name: 'Hypnosys',
            type: EType.Psychic,
            status: EStatus.Sleep,
            category: ECategory.Status,
        }
    ],
    types: [EType.Ghost, EType.Poison],
};