import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

ProductsContext.displayName = 'ProductsContext';

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/products', {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (productId) => {
        const productToAdd = products.find((product) => product._id === productId);

        if (productToAdd) {
            setCart((prevCart) => [...prevCart, productToAdd]);
            setCartCount((prevCount) => prevCount + 1);
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
        setCartCount((prevCount) => prevCount - 1);
    };

    return (
        <ProductsContext.Provider value={{ products, cartCount, addToCart, removeFromCart, cart }}>
            {children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider };