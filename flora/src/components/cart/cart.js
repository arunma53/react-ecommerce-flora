import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import "./cart.css";

export default function CartPage() {
    const context = useContext(ProductContext);
    const cart = context.cart;

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    return (
        <div className="cart-page">
            <h1>Cart Items</h1>
            <ul className="list-group">
                {cart.map((item, index) => (
                    <li key={index} className="list-group-item cart-item">
                        <img src={item.image_url} alt={item.name} />
                        <div className="cart-item-info">
                            <h2>{item.name}</h2>
                            <p>{item.location}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="cart-item-price">
                            <span>${(item.cost * item.quantity / 100).toFixed(2)}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                Total: ${(calculateTotal() / 100).toFixed(2)}
            </div>
        </div>
    );
}
