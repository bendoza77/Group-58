import ProductCard from "./ProductCard.jsx";

const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "MacBook Pro 14\"",
            price: 1999,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "iPhone 14",
            price: 999,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "AirPods Pro",
            price: 249,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "iPad Air",
            price: 599,
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Apple Watch",
            price: 399,
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <>
            <div>
                {products.map(el => {
                    return (
                        <div key={el.id}>
                            <img src={el.image} alt="" />
                            <p>Name: {el.name}</p>
                            <p>Price: {el.price}</p>
                            <ProductCard id={el.id} image={el.image} price={el.price} name={el.name} />
                        </div>
                    );
                })}
            </div>
        </>
    );


}

export default ProductList