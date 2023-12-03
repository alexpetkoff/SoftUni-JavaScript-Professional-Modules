import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext(null);

ProductsContext.displayName = 'ProductsContext';

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);

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

    const updateCartCount = () => {
        setCartCount((prevCount) => prevCount + 1);
    }

    return(
        <ProductsContext.Provider value={{products, cartCount, updateCartCount}}>
            {children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider };