import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregisternav',
  templateUrl: './loginregisternav.component.html',
  styleUrls: ['./loginregisternav.component.css']
})
export class LoginregisternavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectLogin(){
    this.router.navigate(['login']);
  }

  redirectRegister(){
    this.router.navigate(['register']);
  }

}
