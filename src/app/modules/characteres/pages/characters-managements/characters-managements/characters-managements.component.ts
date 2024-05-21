import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../../core/model/app-state.model";
import {Subscription} from "rxjs";
import {CharacterResultModel} from "../../../model/character.model";
import {PoDialogService, PoPageAction, PoTableAction, PoTableColumn} from "@po-ui/ng-components";
import {Router} from "@angular/router";
import {deleteCharacter} from "../../../state/actions/characteres.actions";

@Component({
  selector: 'app-characters-managements',
  templateUrl: './characters-managements.component.html',
  styleUrl: './characters-managements.component.scss'
})
export class CharactersManagementsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  favoriteCharacters: CharacterResultModel[] = [];
  readonly actions: PoPageAction[] = [
    { label: 'Novo favorito', action: () => {this.route.navigate(['/new-character']).then()}},
  ];
  readonly columns: PoTableColumn[] = [
    {property: 'name', label: 'Nome'},
    {property: 'gender', label: 'Gênero'},
    {property: 'species', label: 'Espécie'},
    {property: 'status', label: 'Status'},
  ];
  readonly actionsTable: Array<PoTableAction> = [
    { action: this.removeFavoriteCharacter.bind(this), icon: 'po-icon po-icon-delete', label: 'Remover' }
];

  constructor(
    private store: Store<AppState>,
    private route: Router,
    private poDialog: PoDialogService,
  ) {}

  ngOnInit() {
    this.getFavoriteCharacters();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe()
    );
  }

  getFavoriteCharacters() {
    const subscription = this.store.select('characters').subscribe(response => {
      this.favoriteCharacters = response;
    });
    this.subscriptions.push(subscription);
  }

  removeFavoriteCharacter(character: CharacterResultModel) {
    this.poDialog.confirm({
      title: 'Confirmação',
      message: 'Tem certeza que deseja deletar esse personagem dos seus favoritos?',
      confirm: (): void => {
        this.store.dispatch(deleteCharacter({ characterId: character.id }));
      }
    })
  }
}
