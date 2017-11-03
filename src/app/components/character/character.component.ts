import { Component } from '@angular/core';
import { Character } from '../../models/Character';
import { CharactersService } from '../../services/character.service';

@Component({
  selector: 'characters',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  selectedCharacter: Character;
  characters: Character[];
  private charactersService: CharactersService;
  constructor(charactersService) { }

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
      const movieInfo = this.charactersService
        .getMovies(this.selectedCharacter.url);
      console.log(movieInfo);
  }
}