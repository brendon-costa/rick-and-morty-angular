import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {CharacterResultModel} from "../../../model/character.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals} from "@po-ui/ng-templates";
import {ForceOptionComponentEnum} from "@po-ui/ng-components";

@Component({
  selector: 'app-new-characters',
  templateUrl: './new-characters.component.html',
  styleUrl: './new-characters.component.scss'
})
export class NewCharactersComponent implements OnInit {

  characterList: CharacterResultModel[] = [];
  currentPage: number = 1;
  loading = false;
  subscriptions: Subscription[] = [];
  advancedSearchParams: any;
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
    private characterService: CharacterService,
  ) {  }

  ngOnInit() {
    this.getAll(1);
  }

  getAll(page: number, params?: any) {
    this.loading = true;
    const subscription = this.characterService.getAll(page, params).subscribe({
      next: (response) => {
        this.characterList = [...this.characterList, ...response.results];
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
      }
    });
    this.subscriptions.push(subscription);
  }

  fastSearch(search: string) {
    this.cleanSearch();
    this.advancedSearchParams = {name: search};
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  advancedSearch(params: any) {
    this.cleanSearch();
    this.advancedSearchParams = params;
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  disclaimerSearch(list: any[]) {
    this.cleanSearch();
    const params: any = {};
    list.forEach(item => {
      params[item.property] = item.value;
    });
    this.advancedSearchParams = params;
    console.log(this.advancedSearchParams);
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  cleanSearch() {
    this.currentPage = 1;
    this.characterList = [];
  }

  moreCharacter() {
    this.currentPage = this.currentPage + 1;
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  addCharacter() {
    console.log('addCharacter');
  }
}
