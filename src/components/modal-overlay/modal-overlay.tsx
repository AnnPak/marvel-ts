import { FC } from "react";
import styles from "./modal-overlay.module.scss";
import classNames from "classnames";

const ModalOverlay: FC<{ closeModal: () => void; isOpen: boolean }> = ({
  closeModal,
  isOpen,
}) => {
  return (
    <section
      className={classNames(
        styles.modalOverlay,
        !!isOpen && styles.showModalOverlay
      )}
      onClick={() => closeModal()}
    />
  );
};

export default ModalOverlay;
