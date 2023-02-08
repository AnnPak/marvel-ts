import { FC } from "react";

import { TCharItem } from "../../utils/types";
import style from "./char-item.module.scss";

const CharItem: FC<TCharItem> = (props) => {
  const { id, name, description, thumbnail } = props;

  return (
    <div className={style.charItem} key={id}>
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
    </div>
  );
};

export default CharItem;
