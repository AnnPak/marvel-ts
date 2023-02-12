import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./comics-item.module.scss";

const ComicsItem: FC<THeroComics> = (item) => {
  const { title, description, thumbnail } = item;
  return (
    <div className={styles.comicsItem}>
      <div className={styles.comicsImgWrapper}>
        <div
          className={styles.comicsItemImg}
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

export default ComicsItem;
