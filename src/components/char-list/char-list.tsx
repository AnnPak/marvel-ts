import { RootState, useAppSelector } from "../../store";
import CharItem from "../char-item/char-item";
import styles from "./char-list.module.scss";

const CharList = () => {
  const { heroes } = useAppSelector((store: RootState) => store.RootReducer);

  return (
    <div className={styles.charlist}>
      {heroes &&
        heroes?.map((hero) => (
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
  );
};

export default CharList;
