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

export type TInitialState = {
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

export type TCharItem = Pick<
  THero,
  "id" | "name" | "description" | "comics" | "urls" | "thumbnail"
>;

export type TPrimaryButton = {
  text: string;
  onClickFunc?: () => void;
};
