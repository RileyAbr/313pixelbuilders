import { Component, OnInit } from '@angular/core';
import {Game} from './gamesModel';

import gameData from '../games.json';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  
  public showModal = false;
  selectedGame: Game;

  games: Game[] = gameData;

  constructor() {
    }

  ngOnInit() {
  }


  loadModal(game: Game): void {
    this.selectedGame = game;
  }



}
