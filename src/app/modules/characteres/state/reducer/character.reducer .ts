import { createReducer, on } from '@ngrx/store';
import {CharacterResultModel} from "../../model/character.model";
import {addCharacter, deleteCharacter, updateCharacter} from "../actions/characteres.actions";

export const initialState: CharacterResultModel[] = [];

export const characterReducer = createReducer(
  initialState,
  on(addCharacter, (state, { character }) => [...state, character]),
  on(updateCharacter, (state, { character }) => state.map(item => item.id === character.id ? character : item)),
  on(deleteCharacter, (state, { characterId }) => state.filter(item => item.id !== characterId)),
);
