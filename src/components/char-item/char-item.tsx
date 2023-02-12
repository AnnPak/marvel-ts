import { FC } from "react";

import { TCharItem } from "../../utils/types";
import style from "./char-item.module.scss";
import { Link } from "react-router-dom";

const CharItem: FC<TCharItem> = (props) => {
  const { id, name, description, thumbnail } = props;

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
        <p className={style.charItemDescr}>
          {description
            ? description
            : "There is no description for this character"}
        </p>
      </div>

      <p className={style.charItemName}>{name}</p>
    </Link>
  );
};

export default CharItem;
