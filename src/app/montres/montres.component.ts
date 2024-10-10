import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
})
export class MontresComponent  implements OnInit{


  montres !  : Montre[];



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
