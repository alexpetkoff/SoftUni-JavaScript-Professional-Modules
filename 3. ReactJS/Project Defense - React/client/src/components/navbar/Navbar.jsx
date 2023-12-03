import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart-icon.png';

import { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

function Navbar() {

    const [clicked, setClicked] = useState('home');
    const { auth, logoutHandler } = useContext(AuthContext);
    
    return (
        <div className={styles['navbar']}>
            <div className={styles['nav-logo']}>
                <img src={logo} alt="apple-icon" />
                <p>Apple Store</p>
            </div>
            <ul className={styles['nav-menu']}>
                <li onClick={() => setClicked('home')}><Link className={styles['link']} to='/'>Home</Link> {clicked === 'home' && <hr />}</li>
                <li onClick={() => setClicked('iphone')}><Link className={styles['link']} to="/iphone">iPhone</Link> {clicked === 'iphone' && <hr />}</li>
                <li onClick={() => setClicked('macbook')}><Link className={styles['link']} to="/macbook">Macbook</Link> {clicked === 'macbook' && <hr />}</li>
                <li onClick={() => setClicked('mac')}><Link className={styles['link']} to="/mac">Mac</Link> {clicked === 'mac' && <hr />}</li>
                <li onClick={() => setClicked('macstudio')}><Link className={styles['link']} to="/macStudio">Mac Studio</Link> {clicked === 'macstudio' && <hr />}</li>
            </ul>
            <div className={styles['nav-cart-login']}>
                {
                    !auth.accessToken ? (
                        <>
                            <Link to="/login">
                                <button onClick={() => setClicked('none')}>Login</button>
                            </Link>
                            <Link to="/register">
                                <button onClick={() => setClicked('none')}>Register</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/cart">
                                <img src={cart} alt="shopping-cart" />
                            </Link>
                            <div className={styles['cart-count']}>0</div>
                            <Link to="">
                                <button onClick={logoutHandler}>Logout</button>
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar;