import { FC } from "react";
import { Link } from "react-router-dom";

import { TCharItem } from "../../utils/types";
import { createHtml } from "../../utils/utils";

import styles from "./char-item.module.scss";

const CharItem: FC<TCharItem> = (props) => {
  const { id, name, description, thumbnail, comics, series } = props;

  return (
    <Link to={`hero/${id}`} className={styles.charItem}>
      <div className={styles.charItemImgWrap}>
        <div
          className={styles.charItemImg}
          style={{
            backgroundImage: `url(${
              thumbnail.path + "." + thumbnail.extension
            })`,
          }}
        ></div>

        <div className={styles.charItemInfo}>
          {description ? (
            <p
              className={styles.charItemDescr}
              dangerouslySetInnerHTML={createHtml(description)}
            ></p>
          ) : (
            <p className={styles.charItemDescr}>
              There is no description for this character
            </p>
          )}

          <div className={styles.charItemMediaInfo}>
            <span>Comics: {comics.available}</span>
            <span>Series: {series.available}</span>
          </div>
        </div>
      </div>

      <p className={styles.charItemName}>{name}</p>
    </Link>
  );
};

export default CharItem;
