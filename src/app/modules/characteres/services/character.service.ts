import {Injectable} from '@angular/core';
import {environmentDev} from "../../../../environment/environment.dev";
import {CharacterModel} from "../model/character.model";
import {NewFavoriteServiceContract} from "../../../shared/contract/new-favorite-service.contract";
import {NewFavoriteServiceAbstract} from "../../../shared/abstract-classes/new-favorite-service.abstract";

@Injectable({
  providedIn: 'root'
})
export class CharacterService
  extends NewFavoriteServiceAbstract<CharacterModel>
  implements NewFavoriteServiceContract<CharacterModel>
{
  microService: string = environmentDev.api + '/character';
  constructor() {
    super();
  }
}
