import classNames from "classnames";

import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { showMoreHeroes } from "../../store/heroes";
import { THero } from "../../utils/types";
import { PrimaryButton } from "../buttons/buttons";
import CharItem from "../char-item/char-item";
import { CircleLoader, DotsLoader } from "../loader/loader";

import styles from "./char-list.module.scss";
import loaderStyles from "../loader/loader.module.scss";
import buttonStyles from "../buttons/buttons.module.scss";

const CharList = () => {
  const { heroes, currentOffset, fetchHeroesLoading, showMoreHeroesLoading } =
    useAppSelector((store: RootState) => store.heroes);
  const dispatch = useAppDispatch();

  const showMore = () => {
    dispatch(showMoreHeroes(currentOffset));
  };

  return (
    <>
      {heroes?.length && (
        <>
          <div className={styles.charlist}>
            {heroes?.map((hero: THero) => (
              <CharItem
                id={hero.id}
                name={hero.name}
                description={hero.description}
                key={hero.id}
                comics={hero.comics}
                series={hero.series}
                urls={hero.urls}
                thumbnail={hero.thumbnail}
              />
            ))}
          </div>
          <div
            className={classNames(
              styles.charlistShowMore,
              buttonStyles.showMoreBtn
            )}
          >
            <PrimaryButton
              text={showMoreHeroesLoading ? <DotsLoader /> : "Показать еще"}
              isLoading={showMoreHeroesLoading ? true : false}
              onClickFunc={() => showMore()}
            />
          </div>
        </>
      )}

      {fetchHeroesLoading && (
        <div className={loaderStyles.heroesLoading}>
          <CircleLoader />
        </div>
      )}
    </>
  );
};

export default CharList;
