import "./Cart.css";
import img from "./picture.jpg";

function Cart() {
    return (
        <div className="cart-container">
            <h2 className="user-cart-header">Peter's Cart</h2>
            <div className="items-container-left">
                <div className="left-product-item">
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
                <div className="left-product-item">
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
            </div>

            <div className="cart-container-right">
                <div className="cart-container-right-header text">
                    <span className="sum-info-text">Total:</span>
                    <span className="sum-info-text">1000$</span>
                </div>
                <div className="cart-container-right-sum text">
                    <span className="sum-info-text">Sum:</span>
                    <span className="sum-info-text">1000 $</span>
                </div>
                <div className="cart-container-right-sum text">
                    <span className="sum-info-text">Tax(20%):</span>
                    <span className="sum-info-text">200 $</span>
                </div>
                <div className="cart-container-right-sum text">
                    <span className="sum-info-text">Without Tax:</span>
                    <span className="sum-info-text">800 $</span>
                </div>
                <button className="order-btn">Order</button>
            </div>
        </div>
    );
}

export default Cart;
