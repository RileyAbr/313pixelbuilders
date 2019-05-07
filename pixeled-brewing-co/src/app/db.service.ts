import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

import { Brew } from './brews/brews.module';
import { Event } from './events/events.module';
import { Game } from './games/gamesModel';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  readonly baseUrl = 'http://localhost:4200/';

  constructor(private http: HttpClient) { }

  getBrews(): Observable<Brew[]> {
    return this.http.get<Brew[]>(this.baseUrl + 'getBrews.php');
  }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl + 'getEvents.php');
}
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl + 'getGames.php');
  }
}
