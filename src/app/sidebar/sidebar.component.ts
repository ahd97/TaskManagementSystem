import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user:any;
  name:string;

  constructor(private router:Router, private authService:SocialAuthService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("social_usr")!=null){
      this.user=JSON.parse(sessionStorage.getItem("social_usr"));
    }
    if(sessionStorage.getItem("usr")){
      this.user=JSON.parse(sessionStorage.getItem("usr"));
    }
    this.name=this.user['firstName']+" "+this.user['lastName'];
  }

  logout(){
    if(sessionStorage.getItem('social_usr')){
      sessionStorage.removeItem('social_usr');
      this.authService.signOut();
      this.router.navigate(['login']);  
    }
    if(sessionStorage.getItem('usr')){
      sessionStorage.removeItem('usr');
      this.router.navigate(['login']);
    }
  }

}
