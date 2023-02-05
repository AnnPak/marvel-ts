import styles from "./app-banner.module.scss";
import img from "../../assets/hero.jpg";
import classNames from "classnames";

const AppBanner = () => {
  return (
    <div
      className={styles.randomChar}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.randomCharBlur}>
        <div
          className={classNames(styles.container, styles.randomCharContainer)}
        >
          <img
            className={styles.randomCharImg}
            src={img}
            alt="WOLVERINE (ULTIMATE)"
          />
          <div className={styles.randomCharInfo}>
            <p className={styles.randomCharName}>WOLVERINE (ULTIMATE)</p>
            <p className={styles.randomCharDescr}>
              Decades after participating in military airdrops with Captain
              America during WWII, James Howlett was abducted and experimented
              upon by a covert government unit, who bonded unbreakable
              adamantium to his skele
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
