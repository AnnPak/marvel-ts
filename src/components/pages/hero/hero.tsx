import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import { fetchHero } from "../../../store/heroes";
import { THero } from "../../../utils/types";
import appStyles from "../../app/app.module.scss";
import styles from "./hero.module.scss";

import { fetchComics } from "../../../store/comics";
import { AppBannerComponent } from "../../app-banner/app-banner";
import bannerStyles from "../../app-banner/app-banner.module.scss";
import ComicsList from "../../comics-list/comics-list";
import { fetchHeroSeries } from "../../../store/series";

const HeroPage = () => {
  const { heroId } = useParams();
  const { hero } = useAppSelector((store: RootState) => store.heroes);
  const { heroComics } = useAppSelector((store: RootState) => store.comics);
  const { heroSeries } = useAppSelector((store: RootState) => store.series);
  const [currentHero, setCurrentHero] = useState<THero | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (heroId) {
      dispatch(fetchHero(+heroId));
      dispatch(fetchComics(+heroId));
      dispatch(fetchHeroSeries(+heroId));
    }
  }, [heroId, dispatch]);

  useEffect(() => {
    hero && setCurrentHero(hero[0]);
  }, [hero]);

  return (
    <section className={bannerStyles.heroDetailPage}>
      {currentHero && <AppBannerComponent char={currentHero} />}

      <section className={appStyles.container}>
        <div className={styles.comicsBlock}>
          <h2>Comics:</h2>
          {heroComics.length ? (
            <ComicsList heroComics={heroComics} />
          ) : (
            "There is no comics for this character "
          )}
        </div>

        <div className={styles.comicsBlock}>
          <h2>Series:</h2>
          {heroSeries.length ? (
            <ComicsList heroComics={heroSeries} />
          ) : (
            "There is no series for this character "
          )}
        </div>
      </section>
    </section>
  );
};

export default HeroPage;
