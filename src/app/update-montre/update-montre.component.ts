import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from '../services/montre.service';
import { Montre } from '../model/montre.model';
import { Genre } from '../model/genre.model';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-update-montre',
  templateUrl: './update-montre.component.html',
  styleUrl: './update-montre.component.css'
})
export class UpdateMontreComponent implements OnInit {

  currentMontre = new Montre();
  genres! : Genre[]; 
  updateGenId! : number;
  myImage!: string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

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
      this.myImage = 'data:' + mon.images[0].type + ';base64,' + mon.images[0].image;
      this.updateGenId = mon.genre?.idGen; 
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


  onAddImageMontre() {
    this.montreService
    .uploadImageEmpl(this.uploadedImage,this.uploadedImage.name,this.currentMontre.idMontre)
    .subscribe( (img : Image) => {
      console.log(img)
    this.currentMontre.images.push(img);
    });
    }

  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.montreService.supprimerImage(img.idImage).subscribe(() => {
    const index = this.currentMontre.images.indexOf(img, 0);
    if (index > -1) {
    this.currentMontre.images.splice(index, 1);
    }
    });
    }

    updateMontre() {
      this.currentMontre.genre = this.genres.find(gen => gen.idGen == this.updateGenId)!; 
      //tester si l'image du produit a été modifiée
      if (this.isImageUpdated)
      {
      this.montreService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
      this.currentMontre.image = img;
      this.montreService
      .updateMontre(this.currentMontre)
      .subscribe((mon) => {
      this.router.navigate(['montres']);
      });
      });
      }
      else{
      this.montreService
      .updateMontre(this.currentMontre)
      .subscribe((mon) => {
      this.router.navigate(['montres']);
      });
      }
      }

    




    onImageUpload(event: any) {
      if(event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated =true;
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => { this.myImage = reader.result as string; };
      }
      }
}
