import classNames from "classnames";

import styles from "./app-banner.module.scss";
import appStyles from "../app/app.module.scss";
import { PrimaryButtonLink } from "../buttons/buttons";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import React, { FC, useEffect, useState } from "react";
import { fetchHero } from "../../store/heroes";
import { THero } from "../../utils/types";
import { Link } from "react-router-dom";

const AppBanner1 = () => {
  const dispatch = useAppDispatch();
  const [char, setChar] = useState<THero | null>(null);

  const { hero, fetchHeroLoading, fetchHeroError } = useAppSelector(
    (store: RootState) => store.heroes
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

  return <>{char && <AppBannerComponent char={char} />}</>;
};

export const AppBannerComponent: FC<{ char: THero }> = ({ char }) => {
  return (
    <div
      className={styles.bannerChar}
      style={{
        backgroundImage: `url(${
          char.thumbnail.path + "." + char.thumbnail.extension
        })`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.blurBlock}>
        <div
          className={classNames(appStyles.container, styles.bannerContainer)}
        >
          <Link to={`hero/${char.id}`} className={styles.bannerImgWrap}>
            <img
              className={styles.bannerCharImg}
              src={char.thumbnail.path + "." + char.thumbnail.extension}
              alt={char.name}
            />
          </Link>

          <div className={styles.bannerCharInfo}>
            <h1 className={styles.bannerCharName}>{char.name}</h1>
            <p className={styles.bannerCharDescr}>
              {char.description
                ? char.description
                : "There is no description for this character"}
            </p>
            <div className={styles.bannerCharBtns}>
              <PrimaryButtonLink link="/" text="Info" />
              <PrimaryButtonLink link="/" text="Wiki" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AppBanner = React.memo(AppBanner1);
export default AppBanner;
