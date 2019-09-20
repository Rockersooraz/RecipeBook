import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingsRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({

  imports: [ RouterModule.forChild(shoppingsRoutes) ],
  exports: [RouterModule],

})

export class ShoppingsRoutingModule {}
