import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
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

    onSelect(selectedCharacter): void {
        if (this.selectedCharacter === selectedCharacter) {
            this.selectedCharacter = undefined;
            return
        }
        this.selectedCharacter = selectedCharacter;

        this.charactersService.getMovies(this.selectedCharacter.url)
            .subscribe(
                (res: any) => {
                    selectedCharacter.movies = res.json()['films'];
                    console.log(this.charMovies);
                },
                (err: any) => {
                    console.log(err);
                });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

}