import {Directive, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ResponseListModel} from "../model/response-list.model";
import {NewFavoritePageItemContract} from "../contract/new-favorite-page-item.contract";

@Directive()
export abstract class NewFavoriteServiceAbstract<Item extends NewFavoritePageItemContract> {

  abstract microService: string;
  http: HttpClient = inject(HttpClient);

  protected constructor() {  }

  getAll(page: number, filters?: any): Observable<ResponseListModel<Item[]>> {
    let params = {...{page}, ...filters};
    return this.http.get<ResponseListModel<Item[]>>(this.microService, {params});
  }
}
