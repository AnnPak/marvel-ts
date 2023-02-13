import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import { THero } from "../../../utils/types";
import {
  AppBannerComponent,
  AppBannerLoading,
} from "../../app-banner/app-banner";
import ComicsList from "../../media-list/media-list";
import { fetchHero } from "../../../store/heroes";
import { fetchHeroSeries } from "../../../store/series";
import { fetchComics } from "../../../store/comics";
import { CircleLoader } from "../../loader/loader";

import appStyles from "../../app/app.module.scss";
import styles from "./hero.module.scss";
import loaderStyles from "../../loader/loader.module.scss";
import bannerStyles from "../../app-banner/app-banner.module.scss";

const HeroPage = () => {
  const { heroId } = useParams();
  const { hero, fetchHeroLoading } = useAppSelector(
    (store: RootState) => store.heroes
  );

  const { fetchComicsLoading } = useAppSelector(
    (store: RootState) => store.comics
  );

  const { fetchSeriesLoading } = useAppSelector(
    (store: RootState) => store.series
  );

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
      {currentHero && !fetchHeroLoading && (
        <AppBannerComponent char={currentHero} />
      )}
      {fetchHeroLoading && <AppBannerLoading />}
      <section className={appStyles.container}>
        {currentHero && (
          <div className={styles.comicsBlock}>
            <h2>Comics:</h2>
            {heroComics.length ? (
              <ComicsList heroMedia={heroComics} />
            ) : (
              "There is no comics for this character "
            )}
          </div>
        )}

        {fetchComicsLoading && fetchSeriesLoading && (
          <div className={loaderStyles.heroesLoading}>
            <CircleLoader />
          </div>
        )}

        {heroSeries && (
          <div className={styles.comicsBlock}>
            <h2>Series:</h2>
            {heroSeries.length ? (
              <ComicsList heroMedia={heroSeries} />
            ) : (
              "There is no series for this character "
            )}
          </div>
        )}
      </section>
    </section>
  );
};

export default HeroPage;
