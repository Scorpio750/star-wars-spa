import { Component, ElementRef } from '@angular/core';
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
    charMovies: object;

    constructor(private charactersService: CharactersService) {
    }

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

        this.charactersService.getMovies(this.selectedCharacter.url)
            .subscribe((res: any) => {
                this.charMovies = res.json();
                console.log(this.charMovies);
        });
    }
}