import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontresComponent } from './montres/montres.component';
import { AddMontreComponent } from './add-montre/add-montre.component';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MontreGuard } from './montre.guard';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "montres", component : MontresComponent},
  {path: "add-montre", component : AddMontreComponent ,canActivate:[MontreGuard]},
  {path: "updateMontre/:id",  component: UpdateMontreComponent} ,
  {path: "rechercheParGenre", component : RechercheParGenreComponent} ,
  {path: "rechercheParNom", component : RechercheParNomComponent}, 
  {path: "listeGenres", component : ListeGenresComponent}, 
  {path:  'login', component: LoginComponent} ,
  {path:  'app-forbidden', component: ForbiddenComponent}, 
  {path:'register',component:RegisterComponent}, 
  { path: 'verifEmail', component: VerifEmailComponent }, 
  
  { path: "", redirectTo: "montres", pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
