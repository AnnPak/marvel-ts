import { nanoid } from "nanoid";
import MediaItem from "../media-item/media-item";
import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./media-list.module.scss";
import { useAppDispatch } from "../../store";
import { addElementToModal } from "../../store/media";

const MediaList: FC<{ heroMedia: THeroComics[] }> = ({ heroMedia }) => {
  const dispatch = useAppDispatch();

  const showModal = (item: THeroComics) => {
    dispatch(addElementToModal(item));
  };

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
            onClick={() => showModal(item)}
          />
        ))}
    </div>
  );
};

export default MediaList;
