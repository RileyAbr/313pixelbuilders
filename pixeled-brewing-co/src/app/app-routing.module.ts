import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Paths to Route-in
import { BrewsComponent } from './brews/brews.component';


const routes: Routes = [
  { path: 'brews', component: BrewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
