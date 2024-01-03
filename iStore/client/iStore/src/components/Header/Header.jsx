import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <div className="page-header">
            <div className="menu-container">
                <h1 className="logo">iStore</h1>
                <nav className="main-nav">
                    <ul className="menu-list">
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                Mac
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                iPhone
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                iPad
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                Watch
                            </a>
                        </li>
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                Accessories
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="user-area">
                    <ul className="menu-list">
                        <li className="menu-list-item">
                            <Link to="/login" className="right-menu-guest">
                                Login
                            </Link>
                        </li>
                        <li className="menu-list-item">
                            <Link to="/register" className="right-menu-guest">
                                Register
                            </Link>
                        </li>
                        <li className="menu-list-item">
                            <a href="#" className="right-menu-guest">
                                <ion-icon name="cart-outline"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
