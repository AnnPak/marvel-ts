import { FC } from "react";
import { SeriesItem } from "../../utils/types";

import styles from "../modal/modal.module.scss";

const ModalSeries: FC<{ modalItem: SeriesItem[] }> = ({ modalItem }) => {
  const { thumbnail, title, description, startYear, endYear, characters } =
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
                {startYear && (
                  <li>
                    <span>On sale date:</span>
                    <span>{startYear}</span>
                  </li>
                )}

                {endYear && (
                  <li>
                    <span>Price:</span>
                    <span>{endYear}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSeries;
