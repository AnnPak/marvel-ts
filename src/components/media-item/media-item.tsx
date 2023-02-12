import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./media-item.module.scss";

const MediaItem: FC<THeroComics> = (item) => {
  const { title, description, thumbnail } = item;
  return (
    <div className={styles.MediaItem}>
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
