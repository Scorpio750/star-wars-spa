import { Injectable } from '@angular/core'
import { Character } from '../models/Character'
import { CHARACTERS } from '../models/characterSeed'

@Injectable()
export class CharactersService {
	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS)
	}
}
