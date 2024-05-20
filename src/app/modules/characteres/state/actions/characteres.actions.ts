import { createAction, props } from '@ngrx/store';
import { CharacterResultModel} from "../../model/character.model";

export const addCharacter = createAction(
  '[Character Component] Add Character', props<{character: CharacterResultModel}>()
);
export const updateCharacter = createAction(
  '[Character Component] Update Character', props<{character: CharacterResultModel}>()
);
export const deleteCharacter = createAction(
  '[Character Component] Delete Character', props<{characterId: number}>()
);
