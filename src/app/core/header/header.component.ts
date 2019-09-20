
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;

  constructor(private dataser: DataService, private authservice: AuthService) { }

  ngOnInit() {
  }

  dataSaveServer(){
    this.dataser.saveData().
    subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }


  loadData(){
    this.dataser.getData();
  }

  onLogout(){
    this.authservice.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }


}
