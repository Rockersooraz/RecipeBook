import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
private  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes',10),
    new Ingredient('onion',20)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //... is spread operator which change the array into list of elements
    this.ingredientsChanged.next(this.ingredients.slice());
}

updateIngredients(index: number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());

}

deleteIngredients(index: number){
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}



}
