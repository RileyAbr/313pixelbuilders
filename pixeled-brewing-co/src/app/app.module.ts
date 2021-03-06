import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { BrewsComponent } from './brews/brews.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { BotNavbarComponent } from './bot-navbar/bot-navbar.component';
import { MobileTopLogoComponent } from './mobile-top-logo/mobile-top-logo.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    BrewsComponent,
    HomeComponent,
    GamesComponent,
    EventsComponent,
    ContactComponent,
    BotNavbarComponent,
    MobileTopLogoComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
