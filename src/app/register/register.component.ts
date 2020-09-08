import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName:string;
  lastName:String;
  email:string;
  password:string;
  users:any;
  hide=true;
  formGroup:FormGroup;

  constructor(private router:Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this._formBuilder.group({
      fName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]),
      lName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]),
      mail : new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
      pswd : new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  register(){
    this.users={'firstName': this.firstName, 'lastName': this.lastName, 'email': this.email, 'password': this.password};
    localStorage.setItem('users',JSON.stringify(this.users));
    this.router.navigate(['login']);
  }
}
