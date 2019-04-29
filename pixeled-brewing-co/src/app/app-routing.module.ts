import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Paths to Route-in
import { HomeComponent } from './home/home.component';
import { BrewsComponent } from './brews/brews.component';
import { GamesComponent } from './games/games.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'brews', component: BrewsComponent},
  { path: 'games', component: GamesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
