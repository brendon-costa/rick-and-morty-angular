import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersManagementsComponent} from "./pages/characters-managements/characters-managements/characters-managements.component";
import {NewCharactersComponent} from "./pages/new-characters/new-characters/new-characters.component";

const routes: Routes = [
  {path: '', component: CharactersManagementsComponent},
  {path: 'new-character', component: NewCharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteresRoutingModule { }
