import styles from '../components/Footer.module.css';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p>
                <button className={styles.someName} onClick={scrollToTop}>&#8593;</button>
            </div>
        </footer>
    );
}

export default Footer;