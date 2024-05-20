import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteresRoutingModule } from './characteres-routing.module';
import {
  PoDividerModule,
  PoDynamicModule, PoFieldModule,
  PoLoadingModule,
  PoModalModule,
  PoPageModule,
  PoStepperModule,
  PoTableModule
} from "@po-ui/ng-components";
import {PoPageDynamicTableModule} from "@po-ui/ng-templates";


@NgModule({
  declarations: [],
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
  ]
})
export class CharactersModule { }
