
export interface CharacterModel {
  info: CharacterInfoModel;
  results: CharacterResultModel[];
}

export interface CharacterInfoModel {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface CharacterResultModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }
  location: {
    name: string;
    url: string;
  }
  image: string;
  episode: string[];
  url: string;
  created: string;
}
