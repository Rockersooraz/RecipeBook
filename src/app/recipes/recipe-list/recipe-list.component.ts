import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
    private router: Router, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  OnAddRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
 }


}
