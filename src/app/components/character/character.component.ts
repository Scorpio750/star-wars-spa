import { Component } from '@angular/core';
import { Http } from '@angular/http';
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
    private http: Http;
    
    constructor(private charactersService: CharactersService, http: Http) { 
        this.http = http;
    }

    // onInit lifecycle hook
    ngOnInit(): void {
        this.getCharacters()
    }
    getCharacters(): void {
        this.charactersService.getCharacters()
            .then((characters: Character[]) => this.characters = characters);
    }
    getMovies(url: string) {
        return this.http.get(url)
    }
    onSelect(selectedCharacter): void {
        if (this.selectedCharacter === selectedCharacter) {
            this.selectedCharacter = undefined;
            return
        }
        this.selectedCharacter = selectedCharacter;
       console.log(this.getMovies(this.selectedCharacter.url));
    }
}