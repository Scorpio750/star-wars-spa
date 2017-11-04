import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Character } from '../../models/Character';
import { CharacterService } from '../../services/character.service';

@Component({
    selector: 'characters',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent {
    selectedCharacter: Character;
    characters: Character[];
    movieLinks: string[];
    movieList: string[];
    private http: Http;

    constructor(private characterService: CharacterService, http: Http) {
        this.http = http;
    }

    // onInit lifecycle hook
    ngOnInit(): void {
        this.getCharacters()
    }

    getCharacters(): void {
        this.characterService.getCharacters()
            .then((characters: Character[]) => this.characters = characters);
    }

    onSelect(selectedCharacter): void {

        // clear previously selected character's movies
        this.movieLinks = [];
        if (this.selectedCharacter) {
            this.selectedCharacter.movies = [];
        }

        if (this.selectedCharacter === selectedCharacter) {
            this.selectedCharacter = undefined;
            return
        }
        this.selectedCharacter = selectedCharacter;

        this.characterService
            .getMovieEndpoints(this.selectedCharacter.url)
            .then((movieLinks: string[]) => { 
                this.parseMovieEndpoints(movieLinks);
            });
    }
    parseMovieEndpoints(movieLinks: string[]): void  {
        for (const link of movieLinks) {
            this.characterService
                .getMovie(link)
                .then((res) => { 
                    // parse title and release date
                    const movieData = 'Title:\t' + res['title'] + ' | Release Date:\t' + new Date(res['release_date']).toDateString();
                    this.movieLinks.push(movieData);
                });
        }
        this.selectedCharacter.movies = this.movieLinks;
    }
}