import { createContext, useState } from "react"
import Header from "./components/Header";
import data from "./products.json"
import Product from "./components/Product";
import {Products} from "./interfaces/productType"
import { Cart } from "./interfaces/inCart";

export const myContext = createContext<{
  inCart: Array<Cart>,
  setInCart: React.Dispatch<React.SetStateAction<Cart[]>>,
  data: Products
}>({
  inCart: [],
  setInCart: () => {},
  data: { products: [] }
});

function App() {
  const [inCart, setInCart] = useState<Array<Cart>>([]);

  return (
    <myContext.Provider value={{inCart, setInCart, data}}>
      <Header></Header>
      <Product></Product>
    </myContext.Provider>
  )
}

export default App