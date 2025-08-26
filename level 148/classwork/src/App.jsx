import { useState } from "react";
import { CartContext } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ColorContext } from "./context/ColorContext";
import HappyColor from "./components/HappyColor";

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCard = (product) => {

    setCart(prev => {
      return [...prev, product];
    })

  }

  return (
    <>
      <CartContext.Provider value={{setCart, cart, addToCard}}>
        <ProductList />
        <Cart />
      </CartContext.Provider>

      <ColorContext.Provider value={"green"}>
        <HappyColor />
      </ColorContext.Provider>
    </>
  );


}

export default App
