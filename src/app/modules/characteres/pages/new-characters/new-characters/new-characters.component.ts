import { Component } from '@angular/core';
import {PoAvatarModule, PoButtonModule, PoPageModule, PoSearchModule, PoWidgetModule} from "@po-ui/ng-components";
import {PoPageDynamicSearchModule} from "@po-ui/ng-templates";

@Component({
  selector: 'app-new-characters',
  standalone: true,
  imports: [
    PoPageModule,
    PoWidgetModule,
    PoAvatarModule,
    PoSearchModule,
    PoPageDynamicSearchModule,
    PoButtonModule
  ],
  templateUrl: './new-characters.component.html',
  styleUrl: './new-characters.component.scss'
})
export class NewCharactersComponent {

  avatar = 'https://rickandmortyapi.com/api/character/avatar/43.jpeg';

  addCharacter() {
    console.log('addCharacter');
  }

  moreCharacter() {
    console.log('moreCharacter');
  }
}
