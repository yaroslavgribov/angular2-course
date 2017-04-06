export enum Category {
    SHIRT,
    PANTS,
    SNEAKERS
}

export interface Product {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;
    quantity: number;
    id: number;
}

