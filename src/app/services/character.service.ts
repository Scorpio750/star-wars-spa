import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Character } from '../models/Character'
import { CHARACTERS } from '../models/characterSeed'

@Injectable()
export class CharactersService {
	private http: Http;
	constructor(http: Http) {
		this.http = http;
	}
	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS)
	}
	getMovies(url: string) {
		return this.http.get(url)
	}

}
 