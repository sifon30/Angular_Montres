import { Genre } from "../model/genre.model";

export class GenreWrapper{ 
    _embedded!: { genres: Genre[]}; 
} 