import { CiDiscount1 } from "react-icons/ci";
import { IoHome, IoBagHandle } from "react-icons/io5";
import { BsPersonFillCheck } from "react-icons/bs";

export const optionslabels = [
  { label: "Pastéis", value: "pasteis" },
  { label: "Salgados", value: "salgados" },
  { label: "Refrigerantes", value: "refrigerantes" },
  { label: "Pastéis", value: "pasteis" },
  { label: "Pizzas", value: "pizzas" },
]

export const cardOptions = [
  {
    buttonLabel: "Comprar",
    text: "Pastel de vento",
    textHeading: "Pastel sem recheio",
    image: "../src/assets/img/pizza.jpg",
  },
  {
    buttonLabel: "Comprar",
    text: "Pastel de queijo",
    textHeading: "Pastel de queijo coalho",
    image: "../src/assets/img/comida_paulista.jpg",
  },
  {
    buttonLabel: "Comprar",
    text: "Pastel de carne",
    textHeading: "Pastel de carne",
    image: "../src/assets/img/culinaria-mineira.jpg",
  },
  {
    buttonLabel: "Comprar",
    text: "Pastel Misto",
    textHeading: "Pastel Misto",
    image: "../src/assets/img/culinaria_mineira_capa.jpg",
  },
];

export type OptionType = { label: string; value: string | number };

export enum typeButton {
  secondary = 'secondary',
  primary = 'primary',
}
export const optionsTypesOfProduct: OptionType[] = [
  { label: "Pizzas", value: "pizza" },
  { label: "Pasteis", value: "pasteis" },
  { label: "Humburguer", value: "humburguer" },
];

export enum TypeOfProduct {
  PIZZAS = "pizza",
  PASTEIS = "pasteis",
  HAMBURGUER = "hamburguer",
}
// Opcionais para Pizzas
export const opcionaisPizzas: { name: string, value: number }[] = [
  { name: "Pepperoni", value: 2.50 },
  { name: "Champignon", value: 1.75 },
  { name: "Azeitonas", value: 1.00 },
  { name: "Pimentão", value: 1.25 },
  { name: "Cebola", value: 1.00 },
  { name: "Tomate", value: 1.00 },
  { name: "Milho", value: 0.75 },
  { name: "Presunto", value: 2.00 },
  { name: "Bacon", value: 2.50 },
  { name: "Calabresa", value: 2.25 },
  { name: "Mussarela Extra", value: 2.00 },
  { name: "Parmesão Ralado", value: 1.50 },
  { name: "Rúcula", value: 1.50 },
  { name: "Frango Desfiado", value: 2.00 },
  { name: "Manjericão Fresco", value: 1.00 },
];

// Opcionais para Hambúrgueres
export const opcionaisHamburgueres: { name: string, value: number }[] = [
  { name: "Queijo Cheddar", value: 1.50 },
  { name: "Cebola Caramelizada", value: 1.75 },
  { name: "Ovo", value: 1.00 },
  { name: "Bacon", value: 2.00 },
  { name: "Molho Barbecue", value: 1.50 },
  { name: "Alface", value: 0.50 },
  { name: "Tomate", value: 0.75 },
  { name: "Cebola Roxa", value: 1.00 },
  { name: "Picles", value: 1.25 },
  { name: "Molho de Queijo", value: 1.50 },
  { name: "Jalapeños", value: 1.25 },
  { name: "Cogumelos Grelhados", value: 1.75 },
  { name: "Molho Aioli", value: 1.25 },
  { name: "Abacate", value: 2.50 },
  { name: "Molho de Mostarda e Mel", value: 1.50 },
];

// Opcionais para Pastéis
export const opcionaisPasteis: { name: string, value: number }[] = [
  { name: "Carne Moída", value: 3.00 },
  { name: "Queijo Mussarela", value: 2.50 },
  { name: "Frango Desfiado", value: 2.75 },
  { name: "Queijo Coalho", value: 2.25 },
  { name: "Palmito", value: 2.00 },
  { name: "Catupiry", value: 1.75 },
  { name: "Calabresa", value: 2.25 },
  { name: "Milho", value: 0.75 },
  { name: "Ervilha", value: 0.50 },
  { name: "Tomate", value: 1.00 },
  { name: "Bacon", value: 1.75 },
  { name: "Ovos Cozidos", value: 1.50 },
  { name: "Cebola", value: 1.00 },
  { name: "Azeitonas", value: 1.00 },
  { name: "Pimentão", value: 1.25 },
];
export const names = [
  {
    color: "#ffffff",
    nameButton: "Início",
    icon: <IoHome size={20} />,
    variant: "ghost",
    route: "/",
  },
  {
    color: "#ffffff",
    nameButton: "Promoções",
    icon: <CiDiscount1 size={20} />,
    variant: "ghost",
    route: "/promocoes",
  },
  {
    color: "#ffffff",
    nameButton: "Pedidos",
    icon: <IoBagHandle size={20} />,
    variant: "ghost",
    route: "/pedidos",
  },
  {
    color: "#ffffff",
    nameButton: "Entrar/Cadastrar",
    icon: <BsPersonFillCheck size={20} />,
    variant: "ghost",
    route: "/login",
  },
];

export const namesFooter = [
  {
    color: "#000000",
    nameButton: "Início",
    icon: <IoHome size={20} />,
    variant: "outline",
    flagNameButton: true,
    route: '/'
  },
  {
    color: "#000000",
    nameButton: "Promoções",
    icon: <CiDiscount1 size={20} />,
    variant: "outline",
    flagNameButton: true,
    route: '/promocoes'
  },
  {
    color: "#000000",
    nameButton: "Pedidos",
    icon: <IoBagHandle size={20} />,
    variant: "outline",
    flagNameButton: true,
    route: '/pedidos'
  },
  {
    color: "#000000",
    nameButton: "Perfil",
    icon: <BsPersonFillCheck size={20} />,
    variant: "outline",
    flagNameButton: true,
    route: '/login'
  },
];