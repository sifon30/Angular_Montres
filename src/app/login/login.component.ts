import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 
  user = new User(); 
  erreur=0;
  err:number = 0; 


  constructor(private authService : AuthService, 
    private  router: Router){}

    
 ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onLoggedin() 
  { 
     this.authService.login(this.user).subscribe({ 
      next: (data) => { 
        let jwToken = data.headers.get('Authorization')!; 
        this.authService.saveToken(jwToken); 
        this.router.navigate(['/']);   
      }, 
      error: (err: any) => { 
        this.err = 1;  
      } 
      }); 
  } 

}
