import { Cargo } from "../types/types";

export interface Strategy {
    routeStake: number,
    fee: number,
    distancePerDay: number,

    calculate(cargo: Cargo): [number, string]
}