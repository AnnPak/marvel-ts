import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RootState, useAppDispatch, useAppSelector } from "../../../store";
import { fetchHero } from "../../../store/slice";
import { THero } from "../../../utils/types";
import appStyles from "../../app/app.module.scss";
import styles from "./hero.module.scss";
import ComicsItem from "../../comicsItem/comicsItem";

const HeroPage = () => {
  const { heroId } = useParams();
  const { hero } = useAppSelector((store: RootState) => store.RootReducer);
  const [currentHero, setCurrentHero] = useState<THero | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    heroId && dispatch(fetchHero(+heroId));
  }, [heroId, dispatch]);

  useEffect(() => {
    hero && setCurrentHero(hero[0]);
  }, [hero]);

  return (
    <section className={appStyles.container}>
      {currentHero && (
        <>
          <div className={styles.heroBlock}>
            <div className={styles.heroImgWrapper}></div>
            <div className={styles.heroInf}>
              <h1 className={styles.heroName}>{currentHero.name}</h1>
              <p className={styles.heroDescr}>{currentHero.description}</p>
            </div>
          </div>
          <div className={styles.comicsBlock}>
            <h2>Comics:</h2>
            {currentHero.comics.items?.map((item) => (
              <ComicsItem resourceURI={item.resourceURI} name={item.name} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default HeroPage;
