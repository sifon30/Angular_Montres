import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from '../services/montre.service';
import { Montre } from '../model/montre.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-montre',
  templateUrl: './update-montre.component.html',
  styleUrl: './update-montre.component.css'
})
export class UpdateMontreComponent implements OnInit {

  currentMontre = new Montre();
  genres! : Genre[]; 
  updateGenId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private montreService: MontreService){ 
  }
  ngOnInit(): void {

    this.montreService.listeGenres(). 
    subscribe(gens => {this.genres = gens._embedded.genres; 
                       console.log(gens); 
   }); 


    this.montreService.consulterMontre(this.activatedRoute.snapshot.params['id']).subscribe( mon =>{ this.currentMontre = mon;
      this.updateGenId = this.currentMontre.genre.idGen; 
     } ) ; 
   // console.log(this.activatedRoute.snapshot. params['id']);
   //this.genres =this.montreService.listeGenres();
/*     this.currentMontre = this.montreService.consulterMontre(this.activatedRoute.snapshot. params['id']); 
    this.updateGenId=this.currentMontre.genre.idGen; */
   //console.log(this.currentMontre); 
  }

/*   updateMontre(){
    //console.log(this.currentMontre);
    //this.currentMontre.genre=this.montreService.consulterGenre(this.updateGenId);
    this.montreService.updateMontre(this.currentMontre);
    this.router.navigate(["montres"]);
  }
 */


  updateMontre() { 
    this.currentMontre.genre = this.genres.find(gen => gen.idGen == this.updateGenId)!; 
    this.montreService.updateMontre(this.currentMontre).subscribe( mon  => {this.router.navigate(['montres']); }  
    ); 
    }
}
