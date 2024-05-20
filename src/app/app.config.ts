import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import {characterReducer} from "./modules/characteres/state/reducer/character.reducer ";
import {StoreModule} from "@ngrx/store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      BrowserAnimationsModule,
      PoHttpRequestModule,
      StoreModule.forRoot({ characters: characterReducer })
    ]),
  ],
};
