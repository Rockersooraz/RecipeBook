import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataService } from './shared/data.service';
import { RecipeService } from './recipes/recipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingsModule } from './shopping-list/shoppings.module';


@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    ShoppingsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CoreModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
