import { createAction, props } from '@ngrx/store';
import { CharacterModel} from "../../model/character.model";

export const addCharacter = createAction(
  '[Character Component] Add Character', props<{character: CharacterModel}>()
);
export const updateCharacter = createAction(
  '[Character Component] Update Character', props<{character: CharacterModel}>()
);
export const deleteCharacter = createAction(
  '[Character Component] Delete Character', props<{characterId: number}>()
);
