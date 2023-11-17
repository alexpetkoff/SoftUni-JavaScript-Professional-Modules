import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart-icon.png';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles['nav-logo']}>
                <img src={logo} alt="" />
                <p>Apple Store</p>
            </div>
            <ul className={styles['nav-menu']}>
                <li>Home <hr /></li>
                <li>iPhone</li>
                <li>Macbook</li>
                <li>Mac</li>
                <li>Mac Studio</li>
            </ul>
            <div className={styles['nav-cart-login']}>
                <button>Login</button>
                <img src={cart} alt="shopping-cart"/>
            </div>
        </div>
    );
}
