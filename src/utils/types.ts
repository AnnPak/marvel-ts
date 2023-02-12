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
};

export type TInitialComicsState = {
  fetchComicsLoading: boolean;
  fetchComicsError: boolean;

  heroComics: THeroComics[] | [];
};

export type TInitialSeriesState = {
  fetchHeroSeriesLoading: boolean;
  fetchHeroSeriesError: boolean;

  heroSeries: THeroComics[] | [];
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
  text: string;
  onClickFunc?: () => void;
};