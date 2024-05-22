import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ResponseListModel} from "../model/response-list.model";

export interface NewFavoriteServiceContract<Item> {
  microService: string;
  http: HttpClient;
  getAll(page: number, filters?: any): Observable<ResponseListModel<Item[]>>;
}
