import './Cart.css';
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Cart() {

    const { products, cart, removeFromCart } = useContext(ProductsContext);
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
            {
                cart.map((e, index) => {
                    {
                        return (<div key={index}>
                            <div className="cartitems-format cart-items-format-main">
                                <img src={e.imageUrl} alt="" className="carticon-product-icon" />
                                <p>{e.title}</p>
                                <p>${e.price}</p>
                                <button className="cartitems-quantity">{e.quantity}</button>
                                <p>${e.price*e.quantity}</p>
                                <button className="removeitem" onClick={() => { removeFromCart(e._id) }}>X</button>
                            </div>
                            <hr />
                        </div>)
                    }
                })
            }
        </div>
    );
}