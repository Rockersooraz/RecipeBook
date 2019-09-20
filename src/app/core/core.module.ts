import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataService } from '../shared/data.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
  declarations:[
    HeaderComponent,
    HomeComponent
  ],
  imports:[
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent],
    providers:[
      ShoppingListService,
       RecipeService,
       DataService,
       AuthService,
       AuthGuard
    ]
})

export class CoreModule{}
