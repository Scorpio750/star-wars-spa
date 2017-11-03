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
        alert('An error occurred' + error); // for demo purposes only
        return Promise.reject(error.message || error);
	}

}
