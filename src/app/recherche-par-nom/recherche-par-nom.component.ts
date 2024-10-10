import { Component, OnInit } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit {

  nomMontre! : string;
  montres! :Montre[];

  allMontres! : Montre[]; 
 searchTerm!: string; 
  constructor ( private montreService : MontreService){
    
  }

  ngOnInit(): void {
    this.montreService.listeMontre().subscribe(mons => { 
      console.log(mons); 
      this.montres = mons; 
      });
  }

  rechercherMons(){ 
    this.montreService.rechercherParNom(this.nomMontre). 
    subscribe(mons => { 
    this.montres = mons;        
    console.log(mons)}); 
    } 


    onKeyUp(filterText : string){ 
      this.montres = this.allMontres.filter(item => 
   item.nomMontre.toLowerCase().includes(filterText)); 
     } 
}
