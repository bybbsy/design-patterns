import { Cargo } from "../types/types";
import { Strategy } from "./Strategy.interface";

export class Sdek implements Strategy {
    routeStake: number;
    fee: number;
    distancePerDay: number;
    mileageDiscount: number;

    constructor() {
        this.routeStake = 700;
        this.fee = 0.15;
        this.distancePerDay = 4;
        this.mileageDiscount = 0.1;
    }

    calculate(cargo: Cargo): [number, string] {
        const sum = this.calculateSum(cargo);
        const shippingTime = Math.round(cargo.distance / this.distancePerDay);
        return [sum, shippingTime + 'd'];
    }

    private calculateFee(cargo: Cargo) {
        return cargo.distance * this.routeStake * this.fee;
    }
    
    private calculateSum(cargo: Cargo) {
        const fee = this.calculateFee(cargo);
        const sumWithFee = (cargo.distance * this.routeStake) + fee;

        const sumWithDiscount = sumWithFee - this.calculateDiscount(cargo.distance, sumWithFee);
        return sumWithDiscount;
    }

    private calculateDiscount(distance: number, sum: number) {
        if(distance > 500) {
            return sum * 0.1
        } else if (distance > 700) {
            return sum * 0.15;
        } else if (distance > 1000) {
            return sum * 0.2;
        }
        return 0;
    }
}