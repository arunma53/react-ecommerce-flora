import {useContext} from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from 'react-router-dom';


export default function ProductListing() {
    const context = useContext(ProductContext);
    const navigate = useNavigate();
    
    const handleAddToCart = (product) => {
        context.addToCart(product);
        navigate('/cart');
    };


    return <ul className="list-group">
        {
            context.getProducts().map(r=> <li  key={r.id}className="list-group-items">
                <h1>{r.name}</h1>
                <div>
                    {r.cost}
                </div>
                <div>
                    <img src={r.image_url} alt={r.name} style={{ maxWidth: '200px', height: 'auto' }} />
                </div>
                <div>
                    {r.location}
                </div>
                <button onClick={() => handleAddToCart(r)} className="btn btn-primary">
                            Add to Cart
                        </button>
            </li>)
        }
    </ul>
}