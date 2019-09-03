import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
    new Recipe(
      'American Grilled Meat',
    'hand made very delicious meat',
    'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/recipes/tangy_skillet_chicken_recipe/300x300_tangy_skillet_chicken_recipe.jpg?resize=300px:*',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Spanich', 5)
    ]),

    new Recipe(
      'pizza',
     'Extra cheesy pizza',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SLfolKvdy3CSvPoEt3vyWxy7meZkRRSEvRwdFx4tBC_2pkjxMQ://www.gettyimages.com/detail/photo/pizza-from-the-top-deluxe-royalty-free-image/182148711://https://www.gettyimages.com/detail/photo/pizza-from-the-top-deluxe-royalty-free-image/182148711.https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80.com/img/uploads/article_images/big/1556535597_banner-3-541x360-1.jpg',
      [
        new Ingredient('Chesse',5),
        new Ingredient('tupins',1)
      ])
    ];

    constructor(private slService: ShoppingListService){}

getRecipes(){
  return this.recipes.slice();
}

getRecipe(index:number){
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);

}

}
