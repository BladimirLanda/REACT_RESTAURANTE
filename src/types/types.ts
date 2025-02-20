//TYPES

type MenuItem = {
    id: number,
    name: String,
    price: number;
}

type OrderItem = MenuItem & {
    quantity: number;
}

type PropinaType = {
    id: string,
    value: number,
    label: string;
}

export type {
    MenuItem,
    OrderItem,
    PropinaType
}