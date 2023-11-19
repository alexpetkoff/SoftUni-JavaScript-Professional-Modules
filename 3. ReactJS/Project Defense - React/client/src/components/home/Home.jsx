import styles from './Home.module.css';
import laptop from '../../assets/macbookAir.png';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles['home-left']}>
                <h2>New Arrivals</h2>
                <div>
                    <div className={styles["home-hand-icon"]}>
                        <p>The new</p>
                        <img src="" alt="" />
                    </div>
                    <p>Macbook Air</p>
                    <p>with M3 chip!</p>
                </div>
                <div className={styles["home-latest-btn"]}>
                    <div>Shop</div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles["home-right"]}>
                <img src={laptop} alt="macbook" />
            </div>
        </div>
    );
}