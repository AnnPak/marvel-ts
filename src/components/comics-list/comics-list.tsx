import { nanoid } from "nanoid";
import ComicsItem from "../comics-item/comics-item";
import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./comics-list.module.scss";

const ComicsList: FC<{ heroComics: THeroComics[] }> = ({ heroComics }) => {
  return (
    <div className={styles.comicsList}>
      {heroComics &&
        heroComics?.map((item) => (
          <ComicsItem
            key={nanoid()}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
          />
        ))}
    </div>
  );
};

export default ComicsList;
