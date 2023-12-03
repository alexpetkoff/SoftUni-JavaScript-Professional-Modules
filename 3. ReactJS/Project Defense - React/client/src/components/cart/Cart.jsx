import './Cart.css';
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Cart() {

    const { products,cart } = useContext(ProductsContext);
    console.log(cart);
    
    return (
       <div className="cartitems">
        <div className="cart-items-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartitems-format">
                <img src="" alt="" className="carticon-producticon" />
                <p></p>
                <p></p>
                <button className="cartitems-quantity"></button>
                <p></p>
                <button className="removeitem">Remove</button>
            </div>
            <hr />

        </div>
       </div>
    );
}