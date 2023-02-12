import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { showMoreHeroes } from "../../store/heroes";
import { THero } from "../../utils/types";
import { PrimaryButton } from "../buttons/buttons";
import CharItem from "../char-item/char-item";
import styles from "./char-list.module.scss";
import { nanoid } from "nanoid";

const CharList = () => {
  const { heroes, currentOffset } = useAppSelector(
    (store: RootState) => store.heroes
  );
  const dispatch = useAppDispatch();

  const showMore = () => {
    dispatch(showMoreHeroes(currentOffset));
  };

  return (
    <>
      <div className={styles.charlist}>
        {heroes &&
          heroes?.map((hero: THero) => (
            <CharItem
              id={hero.id}
              name={hero.name}
              description={hero.description}
              key={nanoid()}
              comics={hero.comics}
              series={hero.series}
              urls={hero.urls}
              thumbnail={hero.thumbnail}
            />
          ))}
      </div>
      <div className={styles.charlistShowMore}>
        <PrimaryButton text={"Показать еще"} onClickFunc={() => showMore()} />
      </div>
    </>
  );
};

export default CharList;
