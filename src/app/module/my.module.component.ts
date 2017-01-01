import { Component } from '@angular/core';
import { MyModuleService } from './my.module.service';

@Component({
  selector: 'my-module',
  templateUrl: './my.module.component.html',
  styleUrls: ['./my.module.component.scss']
})
export class MyModuleComponent {
  constructor(srv: MyModuleService) {
    console.log("my module");
  }
}
