import { FC } from "react";
import styles from "./modal-overlay.module.scss";

const ModalOverlay: FC<{closePopup: () => void}> = ({closePopup}) => {
  return(
    <section
    className={styles.modalOverlay}
    onClick={() => closePopup()}
/>
  )
}

export default ModalOverlay;