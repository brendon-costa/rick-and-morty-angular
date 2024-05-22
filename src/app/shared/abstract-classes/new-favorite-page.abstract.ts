import {Directive, inject, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {PoPageDynamicSearchFilters, PoPageDynamicSearchLiterals} from "@po-ui/ng-templates";
import {ActionCreator, Store} from "@ngrx/store";
import {appSateTypes, AppState} from "../../core/model/app-state.model";
import {HttpErrorResponse} from "@angular/common/http";
import {NewFavoritePageItemContract} from "../contract/new-favorite-page-item.contract";
import {NewFavoriteServiceContract} from "../contract/new-favorite-service.contract";

@Directive()
export abstract class NewFavoritePageAbstract<Item extends NewFavoritePageItemContract> implements OnInit, OnDestroy {

  abstract customLiterals: PoPageDynamicSearchLiterals;
  abstract advancedSearchList: PoPageDynamicSearchFilters[];

  store: Store<any> = inject(Store);

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
    protected service: NewFavoriteServiceContract<Item>,
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
    const subscription = this.store.select(this.storeName).subscribe((response) => {
      this.itemList = response;
      this.checkAdded();
    });
    this.subscriptions.push(subscription);
  }

  getAll(page: number, params?: any) {
    this.loading = true;
    const subscription = this.service.getAll(page, params).subscribe({
      next: (response) => {
        this.apiItemList = this.apiItemList.concat(response.results);
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
    const addedMap = new Map<number, boolean>();
    this.itemList.forEach(favorite => addedMap.set(favorite.id, true));
    this.apiItemList = this.apiItemList.map(character => ({
      ...character,
      added: addedMap.get(character.id) ?? false
    }));
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

  addCharacter(item: any) {
    this.store.dispatch(this.addItem(item));
  }

  deleteCharacter(item: any) {
    this.store.dispatch(this.deleteItem(item));
  }
}
