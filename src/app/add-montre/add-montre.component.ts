import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
  styleUrl: './add-montre.component.css'
})
export class AddMontreComponent implements OnInit {
  newMontre = new Montre();
  genres! : Genre[];
newIdGen! : number;
newGenre! : Genre;
  message: string | undefined;
  
  constructor(private montreService: MontreService,
               private router : Router){ }
ngOnInit(): void {


  this.montreService.listeGenres(). 
  subscribe(gens => {this.genres = gens._embedded.genres; 
                     console.log(gens); 
 }); 
  //this.genres= this.montreService.listeGenres();
}

/* addMontre(){
  console.log(this.newIdGen);
  //this.newGenre=this.montreService.consulterGenre(this.newIdGen);
  this.newMontre.genre=this.newGenre;
  this.montreService.ajouterMontre(this.newMontre);

  this.router.navigate(["montres"]);

  //this.message= "montre" + this.newMontre.nomMontre +"ajouter avec success";


  } */


  addMontre(){ 
    this.newMontre.genre = this.genres.find(gen => gen.idGen == this.newIdGen)!; 

    this.montreService.ajouterMontre(this.newMontre) .subscribe(mon => { 
      console.log(mon); 
this.router.navigate(['montres']); 
      });  
   }
}
