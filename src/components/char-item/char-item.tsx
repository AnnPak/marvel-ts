import { Link } from "react-router-dom";
import img from "../../assets/hero.jpg";
import style from "./char-item.module.scss";

const CharItem = () => {
  return (
    <Link to={"/"} className={style.charItem}>
      <div className={style.charItemImgWrap}>
        <div
          className={style.charItemImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
        <p className={style.charItemDescr}>
          Decades after participating in military airdrops with Captain America
          during
        </p>
      </div>

      <p className={style.charItemName}>MENTALLO</p>
    </Link>
  );
};

export default CharItem;
