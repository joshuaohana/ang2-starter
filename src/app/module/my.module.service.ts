import { Injectable } from '@angular/core';

@Injectable()
export class MyModuleService {

  constructor() {
    console.log("my module service");
  }

  getData() {
    return {
      title: 'data',
      data: [1,2,3,4,5]
    };
  }
}
