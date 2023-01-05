import types from "./common/types";
import status from "../common/status";

export const Tauros = {
    name: "Tauros",
    moves: [
        {
            name: 'Close combat',
            type: types.Fighting,
        },
        {
            name: 'Thrash',
            type: types.Fighting,
        },
        {
            name: '',
            type: types,
            status: status,
        }
    ],
    types: [types.Normal, types.Fighting],
};