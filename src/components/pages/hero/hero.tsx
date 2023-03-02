import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import { fetchHero } from "../../../store/heroes";
import {
  deleteModalElement,
  fetchComics,
  fetchHeroSeries,
} from "../../../store/media";

import { THero } from "../../../utils/types";
import {
  AppBannerComponent,
  AppBannerLoading,
} from "../../app-banner/app-banner";
import MediaList from "../../media-list/media-list";
import { CircleLoader } from "../../loader/loader";
import Modal from "../../modal/modal";
import ModalComics from "../../modal-comics/modal-comics";
import ModalSeries from "../../modal-series/modal-series";

import appStyles from "../../app/app.module.scss";
import styles from "./hero.module.scss";
import loaderStyles from "../../loader/loader.module.scss";
import bannerStyles from "../../app-banner/app-banner.module.scss";

const HeroPage = () => {
  const { heroId } = useParams();

  const { hero, fetchHeroLoading } = useAppSelector(
    (store: RootState) => store.heroes
  );
  const { modalComics, modalSeries } = useAppSelector(
    (store: RootState) => store.media
  );
  const { isModalShow } = useAppSelector((store: RootState) => store.modal);
  const [currentHero, setCurrentHero] = useState<THero | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (heroId) {
      dispatch(fetchHero(+heroId));
      dispatch(fetchHeroSeries(+heroId));
      dispatch(fetchComics(+heroId));
    }
  }, [heroId, dispatch]);

  useEffect(() => {
    !!hero && setCurrentHero(hero[0]);
  }, [hero]);

  const deleteModalElementFunc = () => {
    dispatch(deleteModalElement());
  };

  return (
    <section className={bannerStyles.heroDetailPage}>
      {!!currentHero && !fetchHeroLoading && (
        <AppBannerComponent char={currentHero} />
      )}
      {!!fetchHeroLoading && <AppBannerLoading />}

      <HeroMediaItems />

      <Modal isOpen={isModalShow} deleteModalElement={deleteModalElementFunc}>
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
      <div className={styles.comicsBlock}>
        <h2>Comics:</h2>
        {!!heroComics && <MediaList heroMedia={heroComics} type="comics" />}

        {!Boolean(heroComics.length) && !fetchComicsLoading && (
          <p>There is no comics for this character</p>
        )}

        {!!fetchComicsLoading && (
          <div className={loaderStyles.heroesLoading}>
            <CircleLoader />
          </div>
        )}
      </div>

      <div className={styles.comicsBlock}>
        <h2>Series:</h2>
        {!!heroSeries && <MediaList heroMedia={heroSeries} type="series" />}

        {!Boolean(heroSeries.length) && !fetchSeriesLoading && (
          <p>There is no comics for this character</p>
        )}

        {!!fetchSeriesLoading && (
          <div className={loaderStyles.heroesLoading}>
            <CircleLoader />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroPage;
