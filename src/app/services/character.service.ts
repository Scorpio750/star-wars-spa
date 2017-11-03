import { Injectable } from '@angular/core'
import { Character } from '../models/Character'
import { CHARACTERS } from '../models/characterSeed'
import { Http } from '@angular/http';

@Injectable()
export class CharactersService {
	private http: Http;

	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS)
	}

	getMovies(url: string) {
		return this.http.get(url);
	}
}
