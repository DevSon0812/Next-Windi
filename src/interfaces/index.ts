export interface ICategoriesProps {
    id?: number;
    image: string;
    label: string;
}

export interface IProductsProps {
    id?: number;
    name: string;
    price: number;
    category?: string;
    image: string;
    sale?: boolean;
}
