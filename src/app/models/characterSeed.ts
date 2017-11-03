import { Character } from './Character'

//TODO: pull img urls from src side
export const CHARACTERS: Character[] = [
    {
        name: "Luke Skywalker",
        imgUrl: "../../assets/img/Luke Skywalker.png", 
        url: "https://swapi.co/api/people/1/",
        movies: []
    },
    {
        name: "Darth Vader",
        imgUrl: "../../assets/img/Darth Vader.png", 
        url: "https://swapi.co/api/people/4/",
        movies: []
    },
    {
        name: "Obi-wan Kenobi",
        imgUrl: "../../assets/img/Obi-wan Kenobi.png", 
        url: "https://swapi.co/api/people/unknown/",
        movies: []
    },
    {
        name: "R2-D2",
        imgUrl: "../../assets/img/R2-D2.png", 
        url: "https://swapi.co/api/people/3/",
        movies: []
    }
]