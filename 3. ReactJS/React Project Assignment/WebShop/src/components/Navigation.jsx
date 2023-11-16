import { useEffect, useState } from 'react';

function Navigation() {

    const [selectedType, setSelectedType] = useState('All Products');

    // Function to handle dropdown change

    const handleDropdownChange = (type) => {
        console.log(type);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">LaptopLandia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Register</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Logout</a></li>

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