import {EType} from "./types";
import {EStatus} from "./status";

export interface PokemonMove {
    name: string;
    type: EType;
    status?: EStatus;
}

export interface Pokemon {
    name: string;
    types: EType[];
    mooves: PokemonMove[];
}