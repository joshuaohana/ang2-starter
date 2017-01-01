import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { MyModuleComponent }  from './my.module.component';
import { MyModuleService }    from './my.module.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ MyModuleComponent ],
  exports:      [ MyModuleComponent ],
  providers:    [ MyModuleService ]
})
export class MyModule { }
