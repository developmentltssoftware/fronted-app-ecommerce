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

export const typeBebidas: { label: string, value: string, price: number }[] = [
    { label: 'Coca Cola lata', value: "coca-cola-lata", price: 4.30 },
    { label: 'Fanta uva lata', value: "fanta-uva-lata", price: 4.30 },
    { label: 'Fanta laranja lata', value: "fanta-laranja-lata", price: 4.30 },
    { label: 'Guaraná lata', value: "guarana-lata", price: 4.30 },
    { label: 'Sprit lata', value: "sprit-lata", price: 4.30 }, 
    { label: 'Coca Cola 2l', value: "coca-cola-2l", price: 4.30 },
    { label: 'Fanta Uva 2l', value: "fanta-uva-2l", price: 4.30 },
    { label: 'Fanta Laranja 2l', value: "fanta-laranja-2l", price: 4.30 },
    { label: 'Agua com Gás', value: "Agua_comgas.jpeg", price: 4.30 },   
    { label: 'Agua sem Gás', value: "agua_sem_gas.jpeg", price: 4.30 },   
    { label: 'Sprit 2l', value: "sprit-2l", price: 4.30 }, 
    { label: 'Cajuina 2L', value: "cajuina-2l", price: 4.30 }, 
    { label: 'Guaraná 2L', value: "guarana-2l", price: 4.30 }, 
    /* { label: 'Coca-Cola', value: "coca-cola", price: 5.00 },
    { label: 'Guaraná Antarctica', value: "guarana", price: 4.50 }, */
    { label: 'Kuat 2l', value: "kuat", price: 4.00 }, 
]

export const typePizza: { label: string, value: string, price: number }[] = [
    { label: 'Pizza Mussarela', value: "coca-cola-lata", price: 20.00},
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

export const typePastel: { label: string, value: string, price: number }[] = [
    { label: 'Pastel de Queijo', value: "pastel-queijo", price: 5.00 },
    { label: 'Pastel de Carne', value: "pastel-carne", price: 6.00 },
    { label: 'Pastel de Frango', value: "pastel-frango", price: 5.50 },
    { label: 'Pastel de Pizza', value: "pastel-pizza", price: 6.50 },
    { label: 'Pastel de Calabresa', value: "pastel-calabresa", price: 6.00 },
    { label: 'Pastel de Palmito', value: "pastel-palmito", price: 5.50 },
    { label: 'Pastel de Camarão', value: "pastel-camarao", price: 7.00 },
    { label: 'Pastel de Bacalhau', value: "pastel-bacalhau", price: 7.50 },
    { label: 'Pastel de Carne Seca', value: "pastel-carne-seca", price: 7.00 },
    { label: 'Pastel de Nutella', value: "pastel-nutella", price: 8.00 },
    { label: 'Pastel de Banana', value: "pastel-banana", price: 4.50 },
];
export const typeHamburguer: { label: string, value: string, price: number }[] = [
    { label: 'Hambúrguer Simples', value: "hamburguer-simples", price: 10.00 },
    { label: 'Hambúrguer Cheese', value: "hamburguer-cheese", price: 12.00 },
    { label: 'Hambúrguer Duplo', value: "hamburguer-duplo", price: 15.00 },
    { label: 'Hambúrguer Triplo', value: "hamburguer-triplo", price: 18.00 },
    { label: 'Hambúrguer Vegetariano', value: "hamburguer-vegetariano", price: 13.00 },
    { label: 'Hambúrguer Frango', value: "hamburguer-frango", price: 12.00 },
    { label: 'Hambúrguer Bacon', value: "hamburguer-bacon", price: 14.00 },
    { label: 'Hambúrguer Barbecue', value: "hamburguer-barbecue", price: 14.00 },
    { label: 'Hambúrguer Cheddar', value: "hamburguer-cheddar", price: 14.00 },
    { label: 'Hambúrguer Especial', value: "hamburguer-especial", price: 16.00 },
    { label: 'Hambúrguer de Picanha', value: "hamburguer-picanha", price: 20.00 },
];

export const typeRefrigerante: { label: string, value: string, price: number }[] = [
    { label: 'Coca-Cola', value: "coca-cola", price: 5.00 },
    { label: 'Guaraná Antarctica', value: "guarana", price: 4.50 },
    { label: 'Fanta Laranja', value: "fanta-laranja", price: 4.50 },
    { label: 'Fanta Uva', value: "fanta-uva", price: 4.50 },
    { label: 'Sprite', value: "sprite", price: 4.50 },
    { label: 'Kuat', value: "kuat", price: 4.00 },
    { label: 'Schweppes', value: "schweppes", price: 4.00 },
    { label: 'Soda Limonada', value: "soda-limonada", price: 4.00 },
    { label: 'Dolly Guaraná', value: "dolly-guarana", price: 3.50 },
    { label: 'Dolly Uva', value: "dolly-uva", price: 3.50 },
    { label: 'Dolly Laranja', value: "dolly-laranja", price: 3.50 },
];
