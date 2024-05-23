import React, { useState, createContext, useEffect } from 'react';

// Create a context for the product data
export const ProductContext = createContext();

// Create a provider component
export default function ProductContextProvider(props) {
    const [products, setProducts] = useState([]);

    // Function to fetch product data from the API
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://3000-arunma53-ecommercebloom-j1qgq3cmr10.ws-us114.gitpod.io/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Use useEffect to fetch product data when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    // Create a context value that includes the products and any functions you want to expose
    const contextValue = {
        products,
        getProducts: () => products,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    );
}
