import './Cart.css';
import { useContext, useState } from "react";
import ProductsContext from "../../contexts/ProductsContext";
import CheckoutModal from './CheckoutModal';

export default function Cart() {

    const { getTotalAmount, products, cart, removeFromCart, setCart, setCartCount } = useContext(ProductsContext);
    const [showModal, setShowModal] = useState(false);

    const onClose = () => {
        setShowModal(false);
    }
    console.log(cart)
    const onCheckOut = () => {
        setShowModal(true);
        setCartCount(0);
        setCart(prev => prev = []);
    }

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
                cart.length === 0
                    ? <h1 className="no-content">No Items added in your cart!</h1>
                    : cart.map((e) => {
                        {
                            return (<div key={e._id}>
                                <div className="cartitems-format cart-items-format-main">
                                    <img src={e.imageUrl} alt="" className="carticon-product-icon" />
                                    <p>{e.title}</p>
                                    <p>${e.price}</p>
                                    <button className="cartitems-quantity">{e.quantity}</button>
                                    <p>${e.price * e.quantity}</p>
                                    <button className="removeitem" onClick={() => { removeFromCart(e._id) }}>X</button>
                                </div>
                                <hr />
                            </div>)
                        }
                    })
            }
            {showModal && <CheckoutModal onClose={onClose} />}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals:</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    {cart.length > 0 ? (
                        <button onClick={onCheckOut}>CHECKOUT</button>
                    ) : (
                        <button disabled title="Your cart is empty. Add items to proceed to checkout.">
                            CHECKOUT
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}