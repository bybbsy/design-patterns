import { Cargo } from "../types/types";
import { Strategy } from "./Strategy.interface";

export class RussianPost implements Strategy {
    routeStake: number;
    fee: number;
    distancePerDay: number;

    constructor() {
        this.routeStake = 500;
        this.fee = 0.25;
        this.distancePerDay = 2;
    }

    calculate(cargo: Cargo): [number, string] {
        const shippingTime = Math.ceil(cargo.distance / this.distancePerDay);
        const sum = this.calculateSum(cargo);

        return [sum, shippingTime + 'd'];
    }

    private calculateSum(cargo: Cargo) {
        const fee = this.calculateFee(cargo);
        return (cargo.distance * this.routeStake) + fee;
    }
    
    private calculateFee(cargo: Cargo) {
        return cargo.distance * this.routeStake * this.fee;
    }
}