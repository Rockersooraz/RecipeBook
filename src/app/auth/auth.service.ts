// import { firebase } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
token: string;

signUpUser(email: string, password: string){
  return new Promise<any>((resolve, reject) => {
    // tslint:disable-next-line:whitespace
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      resolve(res);
    }, err => reject(err))
  })
}

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then(
      response => {
      firebase.auth().currentUser.getIdToken()
      .then(
      (token: string) => this.token = token
      )
      })
      .catch((err) => {
      console.log(err);
    });
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
(token:string) => this.token = token
    );
    return this.token;
  }

}
