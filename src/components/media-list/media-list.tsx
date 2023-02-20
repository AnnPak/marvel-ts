import { FC } from "react";

import { THeroComics } from "../../utils/types";
import { useAppDispatch } from "../../store";
import { getMediaItem } from "../../store/media";
import { showModal } from "../../store/modal";
import MediaItem from "../media-item/media-item";

import styles from "./media-list.module.scss";

const MediaList: FC<{
  heroMedia: THeroComics[];
  type: "comics" | "series";
}> = ({ heroMedia, type }) => {
  const dispatch = useAppDispatch();

  const openModal = (itemId: number, type: "comics" | "series") => {
    dispatch(getMediaItem({ mediaId: itemId, mediaType: type }));
    dispatch(showModal());
    document.body.classList.add("modal-open");
  };

  return (
    <div className={styles.comicsList}>
      {heroMedia &&
        heroMedia?.map((item) => (
          <MediaItem
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            onClick={() => openModal(item.id, type)}
          />
        ))}
    </div>
  );
};

export default MediaList;
