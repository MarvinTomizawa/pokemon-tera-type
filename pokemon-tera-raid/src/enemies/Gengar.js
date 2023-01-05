import types from "./common/types";
import status from "../common/status";

export const Gengar = {
    name: "Gengar",
    moves: [
        {
            name: 'Shadow ball',
            type: types.Ghost,
        },
        {
            name: 'Sludge bomb',
            type: types.Poison,
        },
        {
            name: 'Dazzling Gleam',
            type: types.Fairy,
        },
        {
            name: 'Will o wisp',
            type: types.Fire,
            status: status.Burn,
        },
        {
            name: 'Hypnosys',
            type: types.Psychic,
            status: status.Sleep,
        }
    ],
    types: [types.Ghost, types.Poison],
};