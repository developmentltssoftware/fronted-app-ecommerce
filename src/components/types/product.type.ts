
export type Optionais = {
    ingredients: string;
    quantity: number;
};
export type ProductType = {
    client: ClientTypes,
    idProduct: string | number,
    nameProduct: string,
    price: number,
    quantity: number,
    type: string,
    opcionais?: Optionais[];
};
export type ProductTypeContext = {
    idProduct: string | number,
    createOneProduct: (data: ProductType) => Promise<void>,
    listOneProduct: (id: string | number) => void,
    listProducts: () => void,
    deleteOneProduct: (id: string | number) => void,
    updateOneProduct: (id: string | number, data: ProductType) => Promise<void>,
};