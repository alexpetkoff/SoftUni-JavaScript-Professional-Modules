import styles from './Footer.module.css';

import { useState, useEffect } from 'react';

export default function Footer() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className={styles.footer}>
            {showButton && (<button className={styles.buttonUp} onClick={scrollToTop}>
                <span className={styles['arrow-icon']}></span>
            </button>)}
            <p>&copy; 2023 Apple Store. All rights reserved.</p>
            <p>Created by: Alexander Petkov</p>
        </footer>
    );
}