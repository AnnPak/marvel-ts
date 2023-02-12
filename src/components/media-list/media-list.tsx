import { nanoid } from "nanoid";
import MediaItem from "../media-item/media-item";
import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./media-list.module.scss";

const ComicsList: FC<{ heroMedia: THeroComics[] }> = ({ heroMedia }) => {
  return (
    <div className={styles.comicsList}>
      {heroMedia &&
        heroMedia?.map((item) => (
          <MediaItem
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
