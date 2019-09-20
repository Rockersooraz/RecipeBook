import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
token: string;

  constructor(private router: Router) {}

signUpUser(email: string, password: string) {
  return new Promise<any>((resolve, reject) => {
    // tslint:disable-next-line:whitespace
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      resolve(res);
    }, err => reject(err));
  });
}

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
      .then(
      (token: string) => this.token = token
      );
      })
      .catch((err) => {
      console.log(err);
    });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
(token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
   return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
