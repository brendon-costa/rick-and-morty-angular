import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacteresManagementsComponent} from "./pages/characteres-managements/characteres-managements.component";

const routes: Routes = [
  {path: '', component: CharacteresManagementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteresRoutingModule { }
