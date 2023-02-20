import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

import { CloseBtn } from "../buttons/buttons";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useAppDispatch } from "../../store";
import { TModal } from "../../utils/types";

import styles from "./modal.module.scss";
import "react-slideshow-image/dist/styles.css";
import { hideModal } from "../../store/modal";

const Modal: FC<PropsWithChildren<TModal>> = ({
  isOpen,
  children,
  deleteModalElement,
}) => {
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
    deleteModalElement();
    dispatch(hideModal());
    document.body.classList.remove("modal-open");
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
