import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart-icon.png';

import { useState } from 'react';

export default function Navbar() {

    const [clicked, setClicked] = useState('home');

    return (
        <div className={styles.navbar}>
            <div className={styles['nav-logo']}>
                <img src={logo} alt="apple-icon" />
                <p>Apple Store</p>
            </div>
            <ul className={styles['nav-menu']}>
                <li onClick={() => setClicked('home')}>Home {clicked === 'home' ? <hr /> : <></>}</li>
                <li onClick={() => setClicked('iphone')}>iPhone {clicked === 'iphone' ? <hr /> : <></>}</li>
                <li onClick={() => setClicked('macbook')}>Macbook {clicked === 'macbook' ? <hr /> : <></>}</li>
                <li onClick={() => setClicked('mac')}>Mac {clicked === 'mac' ? <hr /> : <></>}</li>
                <li onClick={() => setClicked('macstudio')}>Mac Studio {clicked === 'macstudio' ? <hr /> : <></>}</li>
            </ul>
            <div className={styles['nav-cart-login']}>
                <button>Login</button>
                <img src={cart} alt="shopping-cart" />
                <div className={styles['cart-count']}>0</div>
            </div>
        </div>
    );
}
