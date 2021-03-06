import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Character } from '../models/Character'
import { CHARACTERS } from '../models/characterSeed'

@Injectable()
export class CharacterService {
	private http: Http;
	constructor(http: Http) {
		this.http = http;
	}
	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS)
	}
	getMovieEndpoints(url: string): Promise<string[]>{
		return this.http.get(url)
						.toPromise()
						.then(res => res.json()['films'] as string[])
						.catch(this.handleError);
	}
	getMovie(url: string): Promise<string>{
		return this.http.get(url)
						.toPromise()
						.then(res => res.json())
	}
    private handleError(error: any): Promise<any> {
		alert('Sorry, we couldn\'t retrieve movie data for that character.');
        return Promise.reject(error.message || error);
	}

}
