import { FC } from "react";
import styles from "./modal-overlay.module.scss";

const ModalOverlay: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <section className={styles.modalOverlay} onClick={() => closeModal()} />
  );
};

export default ModalOverlay;
