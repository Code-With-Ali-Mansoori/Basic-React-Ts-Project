import { createContext } from "react";

export type ProductTypes = {
  id?: number;
  img?: string;
  name?: string;
  price?: number;
  quantity? : number;
};

export type contextType = {
    Cart_Open : boolean;
    setcart_Open : (value : boolean) => void;

    cardId : number;
    setCardId : (value : number) => void;

    products : ProductTypes[];
    addProduct: (product: ProductTypes) => void;
    removeProduct : (id : number) => void;

    itemQty : number;
    setItemQty : (value : number) => void;
}

export const contextData = createContext<contextType | null>(null);