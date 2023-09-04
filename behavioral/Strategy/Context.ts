import { Strategy } from "./Strategy/Strategy.interface";
import { Cargo } from "./types/types";

export class ShippingService {
    strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setShippingStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    getShippingInfo(cargo: Cargo) {
        const [price, shippingTime] = this.strategy.calculate(cargo);
        console.log(`Shipping cargo "${cargo.name}" (${cargo.weight} kg) on distance: ${cargo.distance} km`);
        console.log(`Price: ${price} rubles`);
        console.log(`Shipping time: ${shippingTime}`);
    }
}