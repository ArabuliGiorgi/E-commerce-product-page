import { createContext, ReactNode, useContext, useState } from "react";
import data from "../products.json"

interface productType{
    id: number,
    name: string,
    company: string,
    description: string,
    price: number,
    discount: number,
    pictures: Array<string>,
    thumbnails: Array<string>
}
interface Products{
    products: productType[]
}

export interface Cart{
    id: number,
    quantity: number
}

const ProductContext = createContext<{
  inCart: Array<Cart>,
  setInCart: React.Dispatch<React.SetStateAction<Cart[]>>,
  data: Products
}>({
  inCart: [],
  setInCart: () => {},
  data: { products: [] }
});

export default function PCProvider({children}: {children: ReactNode}){
    const [inCart, setInCart] = useState<Array<Cart>>([]);

    return(
        <ProductContext.Provider value={{inCart, setInCart, data}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () =>{
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useInvoice must be within an InvoiceProvider");
    }
    return context;
}