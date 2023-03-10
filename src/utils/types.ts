export type THero = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: THeroInformationItem;
  series: THeroInformationItem;
  stories: THeroInformationItem;
  events: THeroInformationItem;
  urls: {
    type: string;
    url: string;
  }[];
};

export type THeroInformationItem = {
  available: number;
  collectionURI: string;
  items:
    | {
        resourceURI: string;
        name: string;
      }[]
    | {
        resourceURI: string;
        name: string;
        type: string;
      }[]
    | [];
  returned: number;
};

export type TInitialHeroState = {
  fetchHeroesLoading: boolean;
  fetchHeroesError: boolean;

  heroes: Array<THero> | null;
  hero: Array<THero> | null;
  currentOffset: number;

  fetchHeroLoading: boolean;
  fetchHeroError: boolean;

  showMoreHeroesLoading: boolean;
  showMoreHeroesError: boolean;
  showMoreHeroesSucces: boolean;
};

export type ComicsItem = THeroComics & {
  type: "comics";
  dates: {
    type: string;
    date: Date;
  }[];
  prices?: {
    type: string;
    price: number;
  }[];
  images?:
    | {
        path: string;
        extension: string;
      }[]
    | [];

  textObjects?: {
    type: string;
    language: string;
    text: string;
  }[];
};

export type SeriesItem = THeroComics & {
  type: "series";
  startYear: string;
  endYear: string;
  characters: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    };
  };
};

export type TInitialMediaState = {
  fetchComicsLoading: boolean;
  fetchComicsError: boolean;

  fetchSeriesLoading: boolean;
  fetchSeriesError: boolean;

  getMediaItemLoading: boolean;
  getMediaItemError: boolean;

  heroSeries: THeroComics[] | [];
  heroComics: THeroComics[] | [];
  modalComics: ComicsItem[] | [];
  modalSeries: SeriesItem[] | [];
};

export type THeroComics = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type THeroSeries = THeroComics;

export type TCharItem = Pick<
  THero,
  "id" | "name" | "description" | "comics" | "urls" | "thumbnail" | "series"
>;

export type TPrimaryButton = {
  text: string | JSX.Element;
  isLoading?: boolean;
  onClickFunc?: () => void;
};

export type TModal = {
  isOpen: boolean;
  ref?: React.RefObject<HTMLButtonElement>;
  deleteModalElement: () => void;
};
