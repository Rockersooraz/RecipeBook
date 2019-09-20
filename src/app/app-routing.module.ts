import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
 // { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'recipe', loadChildren: './recipes/recipes.module#RecipesModule' },
];



@NgModule({

  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [RouterModule],

})

export class AppRoutingModule {

}
