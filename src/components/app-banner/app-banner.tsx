import classNames from "classnames";

import styles from "./app-banner.module.scss";
import appStyles from "../app/app.module.scss";
import { PrimaryButtonLink } from "../buttons/buttons";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { fetchHero } from "../../store/slice";
import { THero } from "../../utils/types";
import { Link } from "react-router-dom";

const AppBanner = () => {
  const dispatch = useAppDispatch();
  const [char, setChar] = useState<THero | null>(null);

  const { hero, fetchHeroLoading, fetchHeroError } = useAppSelector(
    (store: RootState) => store.RootReducer
  );

  useEffect(() => {
    dispatch(fetchHero());
    const timerId = setInterval(() => dispatch(fetchHero()), 26000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    hero && setChar(hero[0]);
  }, [hero]);

  return (
    <>
      {char && (
        <div
          className={styles.randomChar}
          style={{
            backgroundImage: `url(${
              char.thumbnail.path + "." + char.thumbnail.extension
            })`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={styles.blurBlock}>
            <div
              className={classNames(
                appStyles.container,
                styles.randomCharContainer
              )}
            >
              <Link to={`hero/${char.id}`} className={styles.randomCharImgWrap}>
                <img
                  className={styles.randomCharImg}
                  src={char.thumbnail.path + "." + char.thumbnail.extension}
                  alt="WOLVERINE (ULTIMATE)"
                />
              </Link>

              <div className={styles.randomCharInfo}>
                <Link to={`hero/${char.id}`} className={styles.randomCharName}>
                  {char.name}
                </Link>
                <p className={styles.randomCharDescr}>
                  {char.description
                    ? char.description
                    : "There is no description for this character"}
                </p>
                <div className={styles.randomCharBtns}>
                  <PrimaryButtonLink link="/" text="Info" />
                  <PrimaryButtonLink link="/" text="Wiki" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppBanner;
