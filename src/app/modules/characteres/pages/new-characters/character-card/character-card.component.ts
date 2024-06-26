import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CharacterModel} from "../../../model/character.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() character: CharacterModel | undefined;
  @Input() added: boolean = false;
  @Output() deleteAction: EventEmitter<number> = new EventEmitter<number>();
  @Output() addAction: EventEmitter<CharacterModel> = new EventEmitter<CharacterModel>();

  buttonAction() {
    if (this.added && this.character) {
      this.deleteAction.emit(this.character.id);
    } else {
      this.addAction.emit(this.character);
    }
  }
}
