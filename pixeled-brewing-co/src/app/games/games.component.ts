import { Component, OnInit } from '@angular/core';
import {Game} from './gamesModel';
// import { DbService } from '../db.service';

import data from '../db.json';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public showModal = false;
  selectedGame: Game;

  games: Game[];
  // temporary solution while waiting on proper database.
  constructor() {
     this.games = [(<any> data)];
    }

  ngOnInit() {
  }


  loadModal(game: Game): void {
    this.selectedGame = game;
  }



}
