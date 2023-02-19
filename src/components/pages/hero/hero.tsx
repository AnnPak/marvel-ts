import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import { THero } from "../../../utils/types";
import {
  AppBannerComponent,
  AppBannerLoading,
} from "../../app-banner/app-banner";
import MediaList from "../../media-list/media-list";
import { fetchHero } from "../../../store/heroes";
import { fetchComics, fetchHeroSeries } from "../../../store/media";
import { CircleLoader } from "../../loader/loader";

import appStyles from "../../app/app.module.scss";
import styles from "./hero.module.scss";
import loaderStyles from "../../loader/loader.module.scss";
import bannerStyles from "../../app-banner/app-banner.module.scss";
import Modal from "../../modal/modal";
import ModalComics from "../../modal-comics/modal-comics";
import ModalSeries from "../../modal-series/modal-series";

const HeroPage = () => {
  const { heroId } = useParams();
  const { hero, fetchHeroLoading } = useAppSelector(
    (store: RootState) => store.heroes
  );

  const { modalComics, modalSeries } = useAppSelector(
    (store: RootState) => store.media
  );

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

      {currentHero && <HeroMediaItems />}

      <Modal isOpen={!!modalSeries.length || !!modalComics.length}>
        {modalComics[0] && <ModalComics modalItem={modalComics} />}
        {modalSeries[0] && <ModalSeries modalItem={modalSeries} />}
      </Modal>
    </section>
  );
};

const HeroMediaItems = () => {
  const { heroComics, heroSeries, fetchComicsLoading, fetchSeriesLoading } =
    useAppSelector((store: RootState) => store.media);

  return (
    <section className={appStyles.container}>
      {heroComics && (
        <div className={styles.comicsBlock}>
          <h2>Comics:</h2>
          {heroComics.length ? (
            <MediaList heroMedia={heroComics} type="comics" />
          ) : (
            "There is no comics for this character "
          )}
        </div>
      )}

      {heroSeries && (
        <div className={styles.comicsBlock}>
          <h2>Series:</h2>
          {heroSeries.length ? (
            <MediaList heroMedia={heroSeries} type="series" />
          ) : (
            "There is no series for this character "
          )}
        </div>
      )}
      {fetchComicsLoading && fetchSeriesLoading && (
        <div className={loaderStyles.heroesLoading}>
          <CircleLoader />
        </div>
      )}
    </section>
  );
};

export default HeroPage;
