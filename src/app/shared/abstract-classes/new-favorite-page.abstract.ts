import {inject, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals} from "@po-ui/ng-templates";
import {CharacterService} from "../../modules/characteres/services/character.service";
import {ActionCreator, Store} from "@ngrx/store";
import {appSateTypes, AppState} from "../../core/model/app-state.model";
import {HttpErrorResponse} from "@angular/common/http";

export abstract class NewFavoritePageAbstract<Item> implements OnInit, OnDestroy {

  abstract customLiterals: PoPageDynamicSearchLiterals;
  abstract advancedSearchList: PoPageDynamicSearchFilters[];

  service: CharacterService = inject(CharacterService);
  store: Store<AppState> = inject(Store);

  apiItemList: Item[] = [];
  itemList: Item[] = [];
  currentPage: number = 1;
  loading = false;
  subscriptions: Subscription[] = [];
  advancedSearchParams: any;

  protected constructor(
    protected storeName: appSateTypes,
    protected addItem: ActionCreator<string, (props: any) => any>,
    protected deleteItem: ActionCreator<string, (props: any) => any>,
  ) {
  }

  ngOnInit() {
    this.getFavoriteCharacters();
    this.getAll(1);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(
      subscription => subscription.unsubscribe()
    );
  }


  getFavoriteCharacters() {
    const subscription = this.store.select(this.storeName).subscribe(response => {
      this.itemList = response;
      this.checkAdded();
    });
    this.subscriptions.push(subscription);
  }

  getAll(page: number, params?: any) {
    this.loading = true;
    const subscription = this.service.getAll(page, params).subscribe({
      next: (response) => {
        this.apiItemList = [...this.apiItemList, ...response.results];
        this.checkAdded();
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
      }
    });
    this.subscriptions.push(subscription);
  }

  checkAdded() {
    this.apiItemList = this.apiItemList.map(character => {
      return {...character, added: false};
    });
    this.itemList.forEach(favorite => {
      this.apiItemList = this.apiItemList.map(character => {
        if (character.id == favorite.id) {
          return {...character, added: true};
        } else {
          return character;
        }
      });
    });
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
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  cleanSearch() {
    this.currentPage = 1;
    this.apiItemList = [];
  }

  moreCharacter() {
    this.currentPage = this.currentPage + 1;
    this.getAll(this.currentPage, this.advancedSearchParams);
  }

  addCharacter(item: Item) {
    this.store.dispatch(this.addItem(item));
  }

  deleteCharacter(item: Item) {
    this.store.dispatch(this.deleteItem(item));
  }
}
