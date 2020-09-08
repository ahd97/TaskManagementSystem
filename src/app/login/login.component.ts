import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true;
  user: SocialUser;
  usr=JSON.parse(localStorage.getItem("users"));
  mail:string;
  password:string;
  usr_mail="admin@gmail.com";
  pswd="admin@123";
  loggedIn: boolean;
  formGroup:FormGroup;

  constructor(private authService: SocialAuthService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this._formBuilder.group({
      email: new FormControl(null,Validators.required),
      pswd: new FormControl(null,Validators.required)
    });
  }

  subscribeAuthState(){
    this.authService.authState.subscribe((user) => {
      if(user!=null){
        this.user = user;
        this.loggedIn = (user != null);
        sessionStorage.setItem("social_usr",JSON.stringify(this.user));
        this.router.navigate(['dashboard']);
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
    if((this.mail===this.usr['email']) && (this.password===this.usr['password'])){
      console.log(this.usr);
      sessionStorage.setItem("usr",JSON.stringify(this.usr));
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Wrong email id and password.");
    }
  }

}