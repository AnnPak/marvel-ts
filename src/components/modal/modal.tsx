import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { CloseBtn } from "../buttons/buttons";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useAppDispatch } from "../../store";
import { deleteModalElement } from "../../store/media";
import { FC } from "react";
import classNames from "classnames";
import { TModal } from "../../utils/types";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import moment from "moment";

const Modal: FC<TModal> = ({ isOpen, modalItem }) => {
  const modalRoot = document.getElementById("react-modals")!;
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(deleteModalElement());
  };

  if (modalItem) {
    const {
      title,
      description,
      thumbnail,
      dates,
      prices,
      images,
      textObjects,
    } = modalItem[0];

    const img = thumbnail?.path + "." + thumbnail?.extension;

    return createPortal(
      <>
        <ModalOverlay isOpen={isOpen} closeModal={() => closeModal()} />
        <div className={classNames(styles.modal, isOpen && styles.modalShow)}>
          {modalItem && (
            <div
              className={styles.modalBody}
              style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <CloseBtn closeModal={() => closeModal()} />

              <div className={styles.charModalBlur}>
                <div className={styles.charInfoBlock}>
                  <img className={styles.charInfoImg} src={img} alt={title} />
                  <div className={styles.charInfo}>
                    <h2>{title}</h2>
                    <p className={styles.charInfoDescr}>{description}</p>
                    <div className={styles.charDetailInfo}>
                      <ul>
                        {dates[0].date && (
                          <li>
                            <span>On sale date:</span>
                            <span>
                              {moment(dates[0].date).format("DD MMMM YYYY")}
                            </span>
                          </li>
                        )}

                        {prices[0].price && (
                          <li>
                            <span>Price:</span>
                            <span>{prices[0].price}$</span>
                          </li>
                        )}
                        {textObjects[0].language && (
                          <li>
                            <span>Language:</span>
                            <span>{textObjects[0].language}</span>
                          </li>
                        )}

                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {images?.length > 1 && (
                  <div className={styles.slideContainer}>
                    <h2>Other covers: </h2>

                    <Slide
                      slidesToShow={2}
                      slidesToScroll={1}
                      transitionDuration={300}
                    >
                      {images.map((slideImage, index) => (
                        <div key={index}>
                          <div
                            className={styles.divStyle}
                            style={{
                              backgroundImage: `url(${
                                slideImage.path + "." + slideImage.extension
                              })`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </Slide>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </>,
      modalRoot
    );
  } else {
    return createPortal(
      <>
        <ModalOverlay isOpen={isOpen} closeModal={() => closeModal()} />
        <div
          className={classNames(styles.modal, isOpen && styles.modalShow)}
        ></div>
      </>,
      modalRoot
    );
  }
};

export default Modal;
