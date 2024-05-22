import {CharacterResultModel} from "../../modules/characteres/model/character.model";

export interface AppState {
  characters: CharacterResultModel[];
}

export type appSateTypes = 'characters';
