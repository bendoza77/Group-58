import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <h1>The cart</h1>
            {cart.map(el => {
                return <div key={el[3]}>
                    <img src={el[0]} alt="" />
                    <p>Name: {el[1]}</p>
                    <p>Price: {el[2]}</p>
                    <button  onClick={() => setCart(cart.filter(num => el[3] !== num[3]))}>remove</button>
                </div>
            })}
        </>
    );




}

export default Cart;