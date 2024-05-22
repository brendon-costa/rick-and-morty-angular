import {Component} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {CharacterModel} from "../../../model/character.model";
import {PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals} from "@po-ui/ng-templates";
import {ForceOptionComponentEnum, PoBreadcrumb} from "@po-ui/ng-components";
import {addCharacter, deleteCharacter} from '../../../state/actions/characteres.actions';
import {NewFavoritePageAbstract} from "../../../../../shared/abstract-classes/new-favorite-page.abstract";

@Component({
  selector: 'app-new-characters',
  templateUrl: './new-characters.component.html',
  styleUrl: './new-characters.component.scss'
})
export class NewCharactersComponent extends NewFavoritePageAbstract<CharacterModel> {

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Personagens', link: '/' }, { label: 'Adicionar Personagem Favorito' }]
  };
  readonly customLiterals: PoPageDynamicSearchLiterals = {
    quickSearchLabel: 'Nome:',
  };
  readonly advancedSearchList: PoPageDynamicSearchFilters[] = [
    {property: 'name', label: 'Nome', gridColumns: 6},
    {
      property: 'gender', label: 'Gênero', gridColumns: 6,
      forceOptionsComponentType: ForceOptionComponentEnum.select, options: [
        {label: 'Feminino', value: 'Female'},
        {label: 'Masculino', value: 'Male'},
        {label: 'Sem gênero', value: 'Genderless'},
        {label: 'Desconhecido', value: 'unknown'},
      ]
    },
    {property: 'Espécie', label: 'species', gridColumns: 6},
    {
      property: 'status', label: 'Status', gridColumns: 6,
      forceOptionsComponentType: ForceOptionComponentEnum.select, options: [
        {label: 'Vivo', value: 'Alive'},
        {label: 'Morto', value: 'Dead'},
        {label: 'Desconhecido', value: 'unknown'},
      ]
    },
  ]

  constructor(
    private characterService: CharacterService
  ) {
    super('characters', addCharacter, deleteCharacter, characterService);
  }
}
