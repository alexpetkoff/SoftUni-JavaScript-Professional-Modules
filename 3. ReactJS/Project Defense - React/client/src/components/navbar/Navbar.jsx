import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles['nav-logo']}>
                <img src={logo} alt="" />
                <p>Apple Store</p>
            </div>
            <ul className={styles['nav-menu']}>
                <li>Home</li>
                <li>iPhone</li>
                <li>Macbook</li>
                <li>Mac</li>
                <li>Mac Studio</li>
            </ul>
            <div className={styles['nav-cart-login']}>
                <button>Login</button>
                <img src="" alt="shopping-cart"/>
            </div>
        </div>
    );
}
