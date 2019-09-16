import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReShopApp';
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA9AH5vPGtT38kh1Q1bTUaRUuw7VXqyU98",
      authDomain: "ng-recipe-app-6009d.firebaseapp.com"
    });

}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
