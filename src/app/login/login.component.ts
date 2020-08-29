import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  user: SocialUser;
  usr: any;
  mail:string;
  password:string;
  usr_mail="admin@gmail.com";
  pswd="admin@123";
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  subscribeAuthState(){
    this.authService.authState.subscribe((user) => {
      if(user!=null){
        this.user = user;
        this.loggedIn = (user != null);
        sessionStorage.setItem("social_usr",JSON.stringify(this.user));
        this.router.navigate(['form']);
        console.log(user);
      }
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.subscribeAuthState();
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.subscribeAuthState();
  }

  signInManual(){
    if((this.mail===this.usr_mail) && (this.password===this.pswd)){
      this.usr={'email':this.mail,'password':this.password};
      console.log(this.usr);
      sessionStorage.setItem("usr",JSON.stringify(this.usr));
      this.router.navigate(['form']);
    }
    else{
      alert("Wrong email id and password.");
    }
  }

}
