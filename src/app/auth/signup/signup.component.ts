import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  // onSignUp(form: NgForm) {
  //   const email = form.value.email;
  //   const password = form.value.password;
  //   this.authservice.signUpUser(email,password);
  //   }

    onSignUp(form: NgForm) {
      const email = form.value.email;
       const password = form.value.password;
      this.authservice.signUpUser(email, password)
      .then(res => {
        console.log(res);
        // this.errorMessage = "";
        // this.successMessage = "Your account has been created";
      }, err => {
        console.log(err);
        // this.errorMessage = err.message;
        // this.successMessage = "";
      })
    }



  }

