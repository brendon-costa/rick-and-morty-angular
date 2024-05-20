import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environmentDev} from "../../../../environment/environment.dev";
import {map, Observable} from "rxjs";
import {CharacterModel} from "../model/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private microService: string = environmentDev.api + '/character';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(page: number, filters?: any): Observable<CharacterModel> {
    let params = {...{page}, ...filters};
    return this.http.get<CharacterModel>(this.microService, {params}).pipe(
      map(response => {
        response.results = response.results.map(result => {
          result.added = false;
          return result;
        })
        return response;
      })
    );
  }
}
