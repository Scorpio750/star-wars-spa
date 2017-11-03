import { Component } from '@angular/core';
import { Character } from '../../models/Character';
@Component({
  selector: 'app-root',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  charList: Character[];
}
