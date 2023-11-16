import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    const [selectedType, setSelectedType] = useState('All Products');

    const handleDropdownChange = (type) => {
        console.log(type);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">LaptopLandia</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a onClick={() => handleDropdownChange('All Products')} className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a onClick={() => handleDropdownChange('Apple')} className="dropdown-item" href="#!">Apple</a></li>
                                <li><a onClick={() => handleDropdownChange('Samsung')} className="dropdown-item" href="#!">Samsung</a></li>
                                <li><a onClick={() => handleDropdownChange('Lenovo')} className="dropdown-item" href="#!">Lenovo</a></li>
                                <li><a onClick={() => handleDropdownChange('Asus')} className="dropdown-item" href="#!">Asus</a></li>
                            </ul>
                        </li>

                        <li className="nav-item"><Link className="nav-link" href="/register">Register</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="/logout">Logout</Link></li>
                    </ul>

                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>

                </div>
            </div>
        </nav>
    );
}

export default Navigation;