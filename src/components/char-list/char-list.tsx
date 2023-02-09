import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { showMoreHeroes } from "../../store/slice";
import { THero } from "../../utils/types";
import { PrimaryButton } from "../buttons/buttons";
import CharItem from "../char-item/char-item";
import styles from "./char-list.module.scss";

const CharList = () => {
  const { heroes } = useAppSelector((store: RootState) => store.RootReducer);
  const dispatch = useAppDispatch();

  const showMore = () => {
    dispatch(showMoreHeroes());
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
              comics={hero.comics}
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
