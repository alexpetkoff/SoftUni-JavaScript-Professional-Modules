import { useNavigate } from "react-router-dom";

import styles from "../components/Modal.module.css";

function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate("/");
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={closeHandler}>
                <dialog open className={styles.modal}>
                    {children}
                </dialog>
            </div>
        </div>
    );
}

export default Modal;
