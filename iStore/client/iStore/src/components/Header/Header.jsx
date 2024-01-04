import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Header() {
    const { logoutHandler, auth } = useContext(AuthContext);
    const isLoggedIn = auth.accessToken ? true : false;
    console.log(isLoggedIn);

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
                        {!isLoggedIn && (
                            <>
                                <li className="menu-list-item">
                                    <Link
                                        to="/login"
                                        className="right-menu-guest"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link
                                        to="/register"
                                        className="right-menu-guest"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}

                        {isLoggedIn && (
                            <>
                                <li className="menu-list-item">
                                    <Link
                                        href="#"
                                        className="right-menu-user"
                                        onClick={logoutHandler}
                                    >
                                        LogOut
                                    </Link>
                                </li>
                                <li className="menu-list-item">
                                    <Link href="#" className="right-menu-user">
                                        <ion-icon
                                            size="small"
                                            name="cart-outline"
                                        ></ion-icon>
                                        <span className="cart-count">12</span>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
