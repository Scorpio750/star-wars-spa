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
    movieLinks: string[];
    charMovies: string[];
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

        this.charactersService.getMovieEndpoints(this.selectedCharacter.url)
            .then((movieLinks: string[]) => { this.movieLinks = movieLinks; });
            console.log(this.movieLinks);
            // .subscribe(
            //     (res: any) => {
            //         selectedCharacter.movies = res.json()['films'];
            //         console.log(this.charMovies);
            //     },
            //     (err: any) => {
            //         console.log(err);
            //     });
    }