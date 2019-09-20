import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations:[
    DropdownDirective,
  ],
  exports:[DropdownDirective],
  providers: []
})

export class SharedModule{

}
