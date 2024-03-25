export enum TypeImage {
    PIZZAS = "pizzas",
    PASTEIS = "pasteis",
    HAMBURGUER = "hamburguer",
    REFRIGERANTES = 'refrigerantes',
    MOUSSE = "mousse",
    DESERVE = "deserve",
}

export enum typeToImageToProduct {
    'mossue' = "mossue",
    'pizza' = "pizza",
    'humburguer' = "humburguer",
    'pastel' = "pastel",
}

export const typeBebidas: { label: string, value: string }[] = [
    { label: 'Coca Cola lata', value: "coca-cola-lata.png" },
    { label: 'Fanta uva lata', value: "fanta-uva-lata" },
    { label: 'Fanta laranja lata', value:  "fanta-laranja-lata" },
    { label: 'Guarana lata' , value:  "guarana-lata" },
    { label: 'Sprit lata', value: "sprit-lata" }, 
    { label: 'Coca Cola 2l' , value: "coca-cola-2l" },
    {label: 'Fanta Uva 2l' ,value: "fanta-uva-2l" },
    {label: 'Fanta Laranja 2l', value: "fanta-laranja-2l" },
    { label:'Agua com Gás' ,value: "Agua_comgas.jpeg"},   
    { label:'Agua sem Gás' ,value: "agua_sem_gas.jpeg"},   
    { label:'Sprit 2l' ,value: "sprit-2l"},   
]

export const typePizza: { label: string, value: string, price: number }[] = [
    { label: 'Pizza Mussarela', value: "coca-cola-lata.png", price: 20.00},
    { label: 'Pizza Mista', value: "fanta-uva-lata", price: 20.00 },
    { label: 'Pizza Portuguesa', value: "fanta-laranja-lata", price: 20.00 },
    { label: 'Pizza Calabresa', value: "guarana-lata", price: 20.00 },
    { label: 'Pizza Carne do Sol', value: "sprit-lata", price: 20.00 },
    { label: 'Pizza Bacon', value: "coca-cola-2l", price: 20.00 },
    { label: 'Pizza Bacon com Frango', value: "fanta-uva-2l", price: 20.00 },
    { label: 'Pizza Frango com Queijo', value: "fanta-laranja-2l", price: 20.00 },
    { label: 'Pizza Carne do Sol com Bacon', value: "Agua_comgas.jpeg", price: 20.00 },
    { label: 'Pizza Chocolate', value: "agua_sem_gas.jpeg", price: 20.00 },
    { label: 'Pizza 4 queijos', value: "sprit-2l", price: 20.00 },
]

