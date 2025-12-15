import { useState } from "react";
import {contextData} from "../Context/contextCreate.ts";
import type {contextType} from '../Context/contextCreate.ts';
import type {ProductTypes} from './contextCreate.ts'; 

type ProviderProps  = {
  children : React.ReactNode
}

const ContextProv = ({children} : ProviderProps ) => {

  const [Cart_Open, setcart_Open] = useState<boolean>(false);
  const [cardId, setCardId ] = useState<number>(0);
  const [itemQty, setItemQty] = useState<number>(0);
  const [products, setProducts] = useState<ProductTypes[]>([])

  const addProduct = (product: ProductTypes) => {
    setProducts(prev => {
      const updatedCart = [...prev, product];
      return updatedCart;
    })
  };

  const removeProduct = (id: number) => {
    setProducts(prev => prev.filter(item => item.id !== id));
  };

  const globalValue : contextType = {
    Cart_Open,
    setcart_Open,

    cardId,
    setCardId,

    products,
    addProduct,
    removeProduct,

    itemQty,
    setItemQty
  }

  return (
    <>
      <contextData.Provider value={globalValue}>
        {children}
      </contextData.Provider>
    </>
  )
}

export default ContextProv;