import { Component } from '@angular/core';
import { Genre } from '../model/genre.model';
import { MontreService } from '../services/montre.service';

@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styleUrl: './liste-genres.component.css'
})
export class ListeGenresComponent {

  genres! : Genre[]; 
  ajout:boolean=true; 

  updatedGen:Genre = {"idGen":0,"nomGen":""}; 

constructor(private montreService : MontreService) { } 
ngOnInit(): void { 
this.chargerGenres();

}

chargerGenres(){ 
  this.montreService.listeGenres(). 
  subscribe(gens => {this.genres = gens._embedded.genres; 
  console.log(gens); 
  }); 
  } 

genreUpdated(gen : Genre){
  console.log("henre reçue du composant",gen );
  this.montreService.ajouterGenre(gen). subscribe( ()=>  this.chargerGenres());
}

updateGen(gen:Genre) {
  this.updatedGen = gen;
  this.ajout=false;  

}
}