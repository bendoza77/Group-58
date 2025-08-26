import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ProductCard = ({image, name, price, id}) => {
    const { addToCard } = useContext(CartContext);

    return <button onClick={() => addToCard([image, name, price, id])}>Add to cart</button>


}

export default ProductCard;