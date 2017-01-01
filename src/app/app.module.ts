import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { MyModule } from './module/my.module';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full'},
  { path: 'page', component: PageComponent },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MyModule
  ],
  declarations: [
    AppComponent,
    PageComponent,
    Page2Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
