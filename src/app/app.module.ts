import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MontresComponent } from './montres/montres.component';
import { AddMontreComponent } from './add-montre/add-montre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { HttpClientModule, provideHttpClient, withFetch ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeGenresComponent } from './liste-genres/liste-genres.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
@NgModule({
  declarations: [
    AppComponent,
    MontresComponent,
    AddMontreComponent,
    UpdateMontreComponent,
    RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeGenresComponent,
    UpdateGenreComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    VerifEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [

    { provide : HTTP_INTERCEPTORS, 
      useClass : TokenInterceptor, 
      multi : true},

    provideClientHydration(),
    provideHttpClient(withFetch()) // Enable fetch API for HttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
