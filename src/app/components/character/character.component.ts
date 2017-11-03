import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  selectedCharacter: Character;
  characters: Character[];
  constructor(private charactersService: CharactersService) { }

  // onInit lifecycle hook
  ngOnInit(): void {
      this.getCharacters()
  }
  getCharacters(): void {
      this.charactersService.getCharacters()
          .then((characters: Character[]) => this.characters = characters);
  }
  onSelect(selectedCharacter): void {
      if (this.selectedCharacter === selectedCharacter) {
          this.selectedCharacter = undefined;
          return
      }
      this.selectedCharacter = selectedCharacter;
  }
}