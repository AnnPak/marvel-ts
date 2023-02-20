import MediaItem from "../media-item/media-item";
import { FC } from "react";
import { THeroComics } from "../../utils/types";
import styles from "./media-list.module.scss";
import { useAppDispatch } from "../../store";
import { getMediaItem } from "../../store/media";

const MediaList: FC<{
  heroMedia: THeroComics[];
  type: "comics" | "series";
}> = ({ heroMedia, type }) => {
  const dispatch = useAppDispatch();

  const showModal = (itemId: number, type: "comics" | "series") => {
    dispatch(getMediaItem({ mediaId: itemId, mediaType: type }));
    document.body.style.overflow = "hidden";
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
            onClick={() => showModal(item.id, type)}
          />
        ))}
    </div>
  );
};

export default MediaList;
