import { FC } from "react";

import { TCharItem } from "../../utils/types";
import style from "./char-item.module.scss";
import { Link } from "react-router-dom";
import { createHtml } from "../../utils/utils";

const CharItem: FC<TCharItem> = (props) => {
  const { id, name, description, thumbnail, comics, series } = props;

  return (
    <Link to={`hero/${id}`} className={style.charItem}>
      <div className={style.charItemImgWrap}>
        <div
          className={style.charItemImg}
          style={{
            backgroundImage: `url(${
              thumbnail.path + "." + thumbnail.extension
            })`,
          }}
        ></div>

        <div className={style.charItemInfo}>
          {description ? (
            <p
              className={style.charItemDescr}
              dangerouslySetInnerHTML={createHtml(description)}
            ></p>
          ) : (
            <p className={style.charItemDescr}>
              There is no description for this character
            </p>
          )}

          <div className={style.charItemMediaInfo}>
            <span>Comics: {comics.available}</span>
            <span>Series: {series.available}</span>
          </div>
        </div>
      </div>

      <p className={style.charItemName}>{name}</p>
    </Link>
  );
};

export default CharItem;
