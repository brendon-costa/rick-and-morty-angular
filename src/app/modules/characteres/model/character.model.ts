import {NewFavoritePageItemContract} from "../../../shared/contract/new-favorite-page-item.contract";

export interface CharacterModel extends NewFavoritePageItemContract {
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
