import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

ProductsContext.displayName = 'ProductsContext';

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

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

    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsProvider };