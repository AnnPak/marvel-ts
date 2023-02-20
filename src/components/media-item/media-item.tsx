import { FC } from "react";
import { THeroComics } from "../../utils/types";

import styles from "./media-item.module.scss";

const MediaItem: FC<THeroComics & { onClick: () => void }> = (props) => {
  const { title, description, thumbnail, onClick } = props;
  return (
    <div className={styles.MediaItem} onClick={() => onClick()}>
      <div className={styles.comicsImgWrapper}>
        <div
          className={styles.MediaItemImg}
          style={{
            backgroundImage: `url(${
              thumbnail.path + "." + thumbnail.extension
            })`,
          }}
        ></div>
        <p className={styles.charItemDescr}>
          {description
            ? description
            : "There is no description for this character"}
        </p>
      </div>

      <p className={styles.charItemName}>{title}</p>
    </div>
  );
};

export default MediaItem;
