import { Genre } from "./genre.model";
import { Image } from "./image.model";


export class Montre{
    idMontre!: number;
    nomMontre! : string;
    prixMontre! : number;
    dateCreation! : Date ;
    genre! : Genre;
    image! : Image;
    imageStr!:string;
    images!: Image[];
}