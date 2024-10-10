import { Injectable } from '@angular/core';
import { Montre } from '../model/montre.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { GenreWrapper } from '../montres/genreWrapped.model';
const httpOptions = {  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
}; 

@Injectable({
  providedIn: 'root'
})
export class MontreService {

  apiURL: string = 'http://localhost:8092/montres/api';
  apiURLGen: string = 'http://localhost:8092/montres/gen'; 

  montres! : Montre [];
/*   genres : Genre[]; */

  constructor(private http : HttpClient) {
  
/* 
    this.genres=[{idGen : 1,nomGen : "Homme"},
      {idGen : 2,nomGen : "femme"}] */
/*     this.montres = [
      {idMontre : 1, nomMontre : "Rolex", prixMontre : 1000.500, dateCreation : new Date("11/10/2024") ,genre: {idGen : 1,nomGen : "Homme"}},
      {idMontre : 2, nomMontre : "Omega", prixMontre : 2000.500, dateCreation : new Date("12/10/2024" ) , genre:{idGen : 1,nomGen : "Homme"}},
      {idMontre : 3, nomMontre : "Casio", prixMontre : 100, dateCreation : new Date("5/09/2024"), genre :{idGen : 2,nomGen : "Femme"}}


    ]; */
   }

 /*   listeMontre():Montre[]{
    return this.montres;

   } */


   listeMontre(): Observable<Montre[]>{
    
    console.log('=>')
     return    this.http.get<Montre[]>(this.apiURL);

  }


/*   
   ajouterMontre(montre : Montre){
    this.montres.push(montre);
   } */


   ajouterMontre(mon: Montre):Observable<Montre>{ 
    return this.http.post<Montre>(this.apiURL, mon, httpOptions); 
  } 



  supprimerMontre(id : number) { 
    const url = `${this.apiURL}/${id}`; 
     return this.http.delete(url, httpOptions); 
         }
         
         /* 
   supprimerMontre( mon: Montre){
    const index = this.montres.indexOf(mon, 0);
    if (index > -1) {
    this.montres.splice(index, 1);
    } */


    
    //ou Bien
    /* this.montres.forEach((cur, index) => {
    if(mon.idMontre === cur.idMontre) {
    this.montres.splice(index, 1);
    }
    }); */
    
/* 
    consulterMontre(id:number): Montre{     
      return this.montres.find(m => m.idMontre == id)!; 
     
      }


 */


      consulterMontre(id: number): Observable<Montre> { 
        const url = `${this.apiURL}/${id}`; 
        return this.http.get<Montre>(url); 
        } 

 /*      updateMontre(m:Montre){
      //  this.supprimerMontre(m);
        //this.ajouterMontre(m);
        //this.trierMontres();
      } */


  updateMontre(mon :Montre) : Observable<Montre> 
{   
return this.http.put<Montre>(this.apiURL, mon, httpOptions); 
} 

      trierMontres(){ 
        this.montres = this.montres.sort((n1,n2) => { 
          if (n1.idMontre! > n2.idMontre!) { 
              return 1; 
          } 
         if (n1.idMontre! < n2.idMontre!) { 
              return -1; 
          } 
        return 0; 
      }); 
      } 
          
/* 
      listeGenres():Genre[] {
        return this.genres;
        }


        consulterGenre(id:number): Genre{
          return this.genres.find(gen => gen.idGen == id)!;
          }
 */




          listeGenres():Observable<GenreWrapper>{ 
            return this.http.get<GenreWrapper>(this.apiURLGen); 
         } 
        /*   listeGenres():Observable<Genre[]>{ 
            return this.http.get<Genre[]>(this.apiURL+"/gen"); 
          }  */

            rechercherParGenre(idGen: number):Observable< Montre[]> { 
              const url = `${this.apiURL}/monsgen/${idGen}`; 
              return this.http.get<Montre[]>(url); 
                }


                rechercherParNom(nom: string):Observable< Montre[]> {

                  const url = `${this.apiURL}/monsByName/${nom}`; 
              return this.http.get<Montre[]>(url);
                }


                ajouterGenre( gen: Genre):Observable<Genre>{ 
                  return this.http.post<Genre>(this.apiURLGen, gen, httpOptions); 
                  } 
              
    }