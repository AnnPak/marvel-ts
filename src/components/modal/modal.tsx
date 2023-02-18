import styles from "./modal.module.scss";
import img from "../../assets/hero.jpg";
import { createPortal } from "react-dom";
import { CloseBtn } from "../buttons/buttons";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useAppDispatch } from "../../store";
import { deleteModalElement } from "../../store/media";
import { FC } from "react";
import classNames from "classnames";

const Modal: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const modalRoot = document.getElementById("react-modals")!;
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(deleteModalElement());
  };

  return createPortal(
    <>
      <ModalOverlay isOpen={isOpen} closeModal={() => closeModal()} />
      <div className={classNames(styles.modal, isOpen && styles.modalShow)}>
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <CloseBtn closeModal={() => closeModal()} />

          <div className={styles.charInfoBlur}>
            <img
              className={styles.charInfoImg}
              src={img}
              alt="CAPTAIN MARVEL (GENIS-VELL)"
            />
          </div>
        </div>
        <div className={styles.charInfoBlock}>
          <p className={styles.charInfoName}>CAPTAIN MARVEL (GENIS-VELL)</p>

          <p className={styles.charComicsTitle}>Comics:</p>

          <ul className={styles.charMediaList}>
            <li className={styles.charMediaItem}>
              Marvel New Year's Eve Special Infinite Comic (2017) #1
            </li>
            <li className={styles.charMediaItem}>A+X (2012) #6</li>
            <li className={styles.charMediaItem}>A-Force (2016) #6</li>
            <li className={styles.charMediaItem}>A-Force (2016) #7</li>
            <li className={styles.charMediaItem}>A-Force (2016) #8</li>
            <li className={styles.charMediaItem}>A-Force (2016) #9</li>
          </ul>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
