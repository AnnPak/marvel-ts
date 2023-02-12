import styles from "./modal.module.scss";
import img from "../../assets/hero.jpg";
import { createPortal } from "react-dom";
import { CloseBtn } from "../buttons/buttons";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = () => {
  const modalRoot = document.getElementById("react-modals")!;

  const closeModal = () => {
    console.log("close");
  };

  return createPortal(
    <>
      <ModalOverlay closeModal={() => closeModal()} />
      <div className={styles.charInfo}>
        <div
          className={styles.charInfoTop}
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

          <ul className={styles.charComicsList}>
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
