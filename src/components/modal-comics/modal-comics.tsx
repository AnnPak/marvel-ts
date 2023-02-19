import { FC } from "react";
import { ComicsItem } from "../../utils/types";

import styles from "../modal/modal.module.scss";
import moment from "moment";
import { Slide } from "react-slideshow-image";

const ModalComics: FC<{ modalItem: ComicsItem[] }> = ({ modalItem }) => {
  const { thumbnail, title, description, dates, prices, textObjects, images } =
    modalItem[0];
  const img = thumbnail?.path + "." + thumbnail?.extension;

  return (
    <div
      className={styles.modalBody}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.charModalBlur}>
        <div className={styles.charInfoBlock}>
          <img className={styles.charInfoImg} src={img} alt={title} />
          <div className={styles.charInfo}>
            <h2>{title}</h2>
            <p className={styles.charInfoDescr}>{description}</p>
            <div className={styles.charDetailInfo}>
              <ul>
                {dates && dates[0]?.date && (
                  <li>
                    <span>On sale date:</span>
                    <span>{moment(dates[0].date).format("DD MMMM YYYY")}</span>
                  </li>
                )}

                {prices && prices[0]?.price && (
                  <li>
                    <span>Price:</span>
                    <span>{prices[0].price}$</span>
                  </li>
                )}
                {textObjects && textObjects[0]?.language && (
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

        {images && images?.length > 1 && (
          <div className={styles.slideContainer}>
            <h2>Other covers: </h2>

            <Slide slidesToShow={2} slidesToScroll={1} transitionDuration={300}>
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
  );
};

export default ModalComics;
