import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { Genre } from '../model/genre.model';
import { MontreService } from '../services/montre.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrl: './recherche-par-genre.component.css'
})
export class RechercheParGenreComponent implements OnInit {
  montres! : Montre[]; 
  IdGenre! : number; 
  genres! : Genre[]; 


  constructor(private montreService : MontreService){}

  ngOnInit(): void {

    this.montreService.listeGenres(). 
    subscribe(gens => {this.genres = gens._embedded.genres; 
      console.log(gens); 
  });



  }


onChange() { 
    this.montreService.rechercherParGenre(this.IdGenre). 
      subscribe(mons =>{this.montres=mons}); 
    } 





}
