import { ShippingService } from "./Context";
import { RussianPost } from "./Strategy/RussianPost";
import { Sdek } from "./Strategy/Sdek";
import { Cargo } from "./types/types";


const cargo1: Cargo = {
    name: 'Box of beer',
    distance: 600,
    weight: 500,
}

const shippingService = new ShippingService(new RussianPost());

shippingService.getShippingInfo(cargo1);

shippingService.setShippingStrategy(new Sdek())
shippingService.getShippingInfo(cargo1);