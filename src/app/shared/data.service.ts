import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private recipeservice: RecipeService, private authservice: AuthService) { }

saveData(){
  const header =  this.recipeservice.getRecipes();
  return this.http.put('https://ng-recipe-app-6009d.firebaseio.com/recipe.json',header);
}

getData(){
  const token =  this.authservice.getToken()
  return this.http.get<Recipe[]>('https://ng-recipe-app-6009d.firebaseio.com/recipe.json?auth=' + token)
  .pipe(map(
    (recipes) => {
    for(let recipe of recipes){
      if(!recipe['ingredients']){
        console.log(recipe);
        recipe['ingredients'] = [];
      }
    }
    return recipes;
  }
    )
  )
 .subscribe(
    (recipes: Recipe[]) => {
   this.recipeservice.setRecipe(recipes);
    },
    (error)=> console.log(error)
  );
}

}
