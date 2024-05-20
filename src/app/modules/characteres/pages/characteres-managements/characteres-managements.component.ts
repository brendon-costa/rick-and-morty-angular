import { Component } from '@angular/core';
import {PoPageModule} from "@po-ui/ng-components";

@Component({
  selector: 'app-characteres-managements',
  standalone: true,
    imports: [
        PoPageModule
    ],
  templateUrl: './characteres-managements.component.html',
  styleUrl: './characteres-managements.component.scss'
})
export class CharacteresManagementsComponent {

}
