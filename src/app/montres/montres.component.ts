import { Image } from './../model/image.model';
import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
})
export class MontresComponent  implements OnInit{


  montres !  : Montre[];
  genre? :Genre[];



  constructor(private montreService: MontreService,
    public authService: AuthService
  ){
    //this.montres=montreService.listeMontre();

  }

  ngOnInit(): void {



    this.chargerMontres(); 


    this.montreService.listeMontre().subscribe(mons => { 
      console.log(mons); 
      this.montres = mons;

    });  
    //this.montres =this.montreService.listeMontre();
  }



   
chargerMontres(){ 
  this.montreService.listeMontre().subscribe(mons => { 
    console.log(mons); 
    this.montres = mons; 
    this.montres.forEach((mons) => {
      mons.imageStr='data: '+mons.images[0].type+' ; base64, '+mons.images[0].image;});
    });
} 


  supprimerMontre(m: Montre) 
  { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
    this.montreService.supprimerMontre(m.idMontre).subscribe(() => { 
      console.log("montre supprimé"); 
      this.chargerMontres(); 
         }); 
  }



/*   supprimerMontre(mon: Montre)
{

  let conf = confirm("Etes-vous sûr ?");

 if (conf)
   this.montreService.supprimerMontre(mon);
//console.log(mon);
} */
}
