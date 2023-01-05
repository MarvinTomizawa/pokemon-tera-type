import {EType} from "./types";
import {EStatus} from "./status";
import { EWeather_Terrain } from "./Weather_Terrain";

export interface PokemonMove {
    name: string;
    type: EType;
    status?: EStatus;
    terrain?: EWeather_Terrain;
    category: ECategory;
}

export interface Pokemon {
    name: string;
    types: EType[];
    moves: PokemonMove[];
}