import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id: number;

  constructor(private recipeService: RecipeService,private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
      }
      );
   }

    //this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});



}
