import Header from "./components/Header";
import Product from "./components/Product";
import PCProvider from "./contexts/productContext";

function App() {
  return (
    <PCProvider>
      <Header/>
      <Product/>
    </PCProvider>
  )
}

export default App