import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataser: DataService) { }

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

}
