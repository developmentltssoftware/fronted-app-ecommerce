import { ClientType } from "./client.type"
import { ProductType } from "./product.type"

export type BagType = {
    id: string | number,
    client: ClientType,
    product: ProductType[],
    dateOrder?: Date;
    dateUpdateOrder?: Date;
};
export type BagContext = {
    idBag: string | number;
    addOneProductInBag: (data: BagType) => Promise<void>;
    deleteOneProductOfBag: (id: string | number) => void;
    updateOneProductInBag: (id: string | number, data: BagType) => Promise<void>;
    listOneProductOfBag: (id: string | number) => void;
    listProductsOfBag: (id: string | number) => void,
};