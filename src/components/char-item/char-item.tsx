import { FC } from "react";
import { Link } from "react-router-dom";

import { TCharItem } from "../../utils/types";
import { createHtml } from "../../utils/utils";

import style from "./char-item.module.scss";

const CharItem: FC<TCharItem> = (props) => {
  const {
    id,
    name,
    description = "There is no description for this character",
    thumbnail,
    comics,
    series,
  } = props;

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
          <p
            className={style.charItemDescr}
            dangerouslySetInnerHTML={createHtml(description)}
          ></p>

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
