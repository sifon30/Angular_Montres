import { Genre } from "./genre.model";

export class Montre{
    idMontre!: number;
    nomMontre! : string;
    prixMontre! : number;
    dateCreation! : Date ;
    genre! : Genre;
}