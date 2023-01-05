import {EType} from "../common/types";
import {EStatus} from "../common/status";
import {Pokemon} from "../common/Pokemon.interface";

export const Gengar: Pokemon = {
    name: "Gengar",
    mooves: [
        {
            name: 'Shadow ball',
            type: EType.Ghost,
        },
        {
            name: 'Sludge bomb',
            type: EType.Poison,
        },
        {
            name: 'Dazzling Gleam',
            type: EType.Fairy,
        },
        {
            name: 'Will o wisp',
            type: EType.Fire,
            status: EStatus.Burn,
        },
        {
            name: 'Hypnosys',
            type: EType.Psychic,
            status: EStatus.Sleep,
        }
    ],
    types: [EType.Ghost, EType.Poison],
};