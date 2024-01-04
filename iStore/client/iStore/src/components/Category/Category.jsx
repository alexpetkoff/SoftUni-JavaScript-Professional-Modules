import "./Category.css";
import picture from "./picture.jpg";

function Category({ category }) {
    console.log(category);
    return (
        <div className="container">
            <div className="grid-container">
                <div className="category-title">
                    <h2 className="category-title-header">Shop Mac</h2>
                    <p className="category-title-text">
                        Shop the latest laptop and desktops from Apple!
                    </p>
                </div>
                <aside className="category-filters">
                    <div className="aside-title">Filters</div>
                    <div className="filters-container">
                        <div className="filter-option">
                            <div className="filter-option-title">
                                Screen size:
                            </div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                        </div>
                        <div className="filter-option">
                            <div className="filter-option-title">SSD:</div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                        </div>
                        <div className="filter-option">
                            <div className="filter-option-title">Producer:</div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                            <div className="filter-option-check">
                                <input type="checkbox" className="checkbox" />
                                <span className="filter-type">13inch</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="category-products">
                    <div className="category-products-grid">
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text notavailable">
                                Не е наличен
                            </p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className="item-cell">
                            <img
                                className="item-img"
                                src={picture}
                                alt="Apple product"
                            />
                            <p className="item-title">
                                Apple Macbook Pro 16in | M2 Pro chip | 16GB RAM
                            </p>
                            <p className="item-price">2199.00 лв.</p>
                            <p className="item-text available">В наличност</p>
                            <div className="btns">
                                <a className="btn-more" href="#">
                                    <span className="btn-more-text">
                                        Виж повече
                                    </span>
                                </a>
                                <a href="#" className="btn-add">
                                    <ion-icon
                                        className="btn-add-icon"
                                        name="cart-outline"
                                    ></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
