import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteresRoutingModule } from './characteres-routing.module';
import {
  PoAvatarModule, PoButtonModule,
  PoDividerModule,
  PoDynamicModule, PoFieldModule,
  PoLoadingModule,
  PoModalModule,
  PoPageModule,
  PoStepperModule,
  PoTableModule, PoWidgetModule
} from "@po-ui/ng-components";
import {PoPageDynamicSearchModule, PoPageDynamicTableModule} from "@po-ui/ng-templates";
import {NewCharactersComponent} from "./pages/new-characters/new-characters/new-characters.component";
import {
  CharactersManagementsComponent
} from "./pages/characters-managements/characters-managements/characters-managements.component";
import {CharacterCardComponent} from "./pages/new-characters/character-card/character-card.component";


@NgModule({
  declarations: [
    NewCharactersComponent,
    CharactersManagementsComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    CharacteresRoutingModule,
    PoPageModule,
    PoPageDynamicTableModule,
    PoModalModule,
    PoDynamicModule,
    PoTableModule,
    PoLoadingModule,
    PoStepperModule,
    PoFieldModule,
    PoDividerModule,
    PoPageDynamicSearchModule,
    PoWidgetModule,
    PoAvatarModule,
    PoButtonModule,
  ]
})
export class CharactersModule { }
