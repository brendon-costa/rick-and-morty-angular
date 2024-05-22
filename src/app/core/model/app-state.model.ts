import {CharacterModel} from "../../modules/characteres/model/character.model";

export interface AppState {
  characters: CharacterModel[];
}

export type appSateTypes = 'characters';
