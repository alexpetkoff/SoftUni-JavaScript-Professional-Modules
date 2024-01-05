import "./Cart.css";
import img from "./picture.jpg";
function Cart() {
    return (
        <div className="cart-container">
            <h2 className="user-cart-header">User's Cart</h2>
            <div className="items-cart-container">
                <div className="items-container-left">
                    <div className="item-img">
                        <img
                            src={img}
                            alt="products image"
                            className="product-img"
                        />
                    </div>
                    <div className="item-title">Macbook Air 13 - M1 chip</div>
                    <div className="item-price">$ 1000</div>
                    <div className="item-quantity">
                        <button className="item-minus">-</button>
                        <div className="item-count">3</div>
                        <button className="item-plus">+</button>
                    </div>
                    <button
                        className="item-remove"
                        alt="Remove product"
                        title="Remove product"
                    >
                        <span>X</span>
                    </button>
                </div>

                <div className="cart-container-right"></div>
            </div>
        </div>
    );
}

export default Cart;
