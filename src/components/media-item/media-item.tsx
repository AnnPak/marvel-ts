import { FC } from "react";
import { THeroComics } from "../../utils/types";

import styles from "./media-item.module.scss";
import { createHtml } from "../../utils/utils";

const MediaItem: FC<THeroComics & { onClick: () => void }> = (props) => {
  const {
    title,
    description = "There is no description for this item",
    thumbnail,
    onClick,
  } = props;
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
        <p
          className={styles.charItemDescr}
          dangerouslySetInnerHTML={createHtml(description)}
        ></p>
      </div>

      <p className={styles.charItemName}>{title}</p>
    </div>
  );
};

export default MediaItem;
