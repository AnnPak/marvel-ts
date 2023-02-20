import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { CloseBtn } from "../buttons/buttons";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useAppDispatch } from "../../store";
import { deleteModalElement } from "../../store/media";
import { FC, PropsWithChildren, useEffect } from "react";
import classNames from "classnames";
import { TModal } from "../../utils/types";

import "react-slideshow-image/dist/styles.css";

const Modal: FC<PropsWithChildren<TModal>> = ({ isOpen, children }) => {
  const modalRoot = document.getElementById("react-modals")!;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const closeModalByEsc = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", closeModalByEsc);
    return () => window.removeEventListener("keydown", closeModalByEsc);
  });

  const closeModal = () => {
    dispatch(deleteModalElement());
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <>
      <ModalOverlay isOpen={isOpen} closeModal={() => closeModal()} />
      <div className={classNames(styles.modal, isOpen && styles.modalShow)}>
        <CloseBtn closeModal={() => closeModal()} />
        {children && children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
