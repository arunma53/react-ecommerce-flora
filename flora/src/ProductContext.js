import  { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// Create a context for the product data
export const ProductContext = createContext();

const BASE_API_URL = "https://3000-arunma53-ecommercebloom-j1qgq3cmr10.ws-us114.gitpod.io/api/products"
const CART_API_URL = "https://3000-arunma53-ecommercebloom-j1qgq3cmr10.ws-us114.gitpod.io/api/cart"

// Create a provider component
export default function ProductContextData(props) {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
     
    useEffect(()=>{
        const loadData = async () => {
             const response = await axios.get(BASE_API_URL);
             setProducts(response.data.products)

            const cartResponse = await axios.get(CART_API_URL);
            setCart(cartResponse.data);
        }
        loadData();
    },[]);

    const addToCart = async (product) => {
        const response = await axios.post(`${CART_API_URL}/${product.id}/add`, { quantity: 1 });
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const context = {
       getProducts:() =>{
        return products
       },
       addToCart,
       cart,
    };
    return (<ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider> );
} 
       