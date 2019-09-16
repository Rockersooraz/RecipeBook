import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
recipe: Recipe;
id: number;
subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

 this.subscription = this.route.params.
 subscribe(
   (params: Params) => {
    this.id = +params['id'];
    this.recipe = this.recipeService.getRecipe(this.id);
   }
 );

}
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipee(){
    this.router.navigate(['edit'], {relativeTo: this.route});


  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe']);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
