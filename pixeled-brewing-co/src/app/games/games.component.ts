import { Component, OnInit } from '@angular/core';
import {Game} from './gamesModel';
import { DbService } from '../db.service';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games : Game[]
  = [
    {name : "Super Chexx Bubble Hockey",
     descr : "Super Chexx Bubble Hocky is a table hockey arcade game. It can be played by two opposing players who control all five hockey players and the goalie for their side for singles or as two on two game for doubles. The players can also choose their own team.",
    working: true},
     {name : "NBA Jam",
     descr : "NBA Jam is a basketball arcade game. The players are able to jump many times above their own height, making slam dunks that defy both human capabilities and the laws of physics in the game. There are no fouls, free throws, or violations in the game. Players can also enter special codes to unlock hidden players in the game.",
     working: true},
     {name : "NFL Blitz 2000 gold",
     descr : "NFL Blitz 2000 Gold is an American football themed arcade games. Players can choose an official NFL team and compete in American football games with very few real-world rules.",
     working: true},
     {name : "Madden Football",
     descr : "Madden Football is an American football video game. It delivers an NFL experience through competing against friends, taking your team from pre-season to Super Bowl Champions, and allowing you to be at the center of every play so you can achieve gridiron greatness. Players can choose their favorite teams, build their own rosters, upgrade their players through challenges and online matchups, and team up with friends.",
     working: false},
     {name : "Super Off Road",
     descr : "Super Off Road is an arcade video game. In the game, up to three players compete against each other or the computer in racing around several top-view indoor off-road truck tracks of increasing difficulty. Players can choose different tracks and races. The goal of this game is to reach the end of the season with the most money earned, which they can earn the money by the places they get.",
     working: true},
     {name : "Area 51 Site 4",
     descr : "Area 51 Site 4 is a light gun arcade game, and can be played in either single player or cooperative. The player has to shoot the enemies such as zombies and aliens. The final mission for this is to go into a huge ware house to destroy a giant red alien with multiple limbs, and shooting zombies and aliens.",
     working: true},
     {name : "Darius Burst",
     descr : "Darius Burst is a horizontal scrolling shooter. Players fight the Belsar Army through several stages and can choose to fight in different zones along different paths, ultimately reaching a different final boss and ending.",
     working: false},
     {name : "NBA Showtime",
     descr : "NBA Showtime is a basketball video game which features 2 on 2 play with the ability to pick two players from any NBA team’s starting line-up for each shove on another player. The game contains many secret characters, and it also features the “on fire” feature. Play otherwise is similar to NBA rules.",
     working: true},
     {name : "Donkey Kong",
     descr : "Donkey Kong requires the player to jump between gaps and over obstacles or approaching enemies, destroy objects, collecting items, and completing each stage. The game is divided into four different single-screen stages, these four stages combine to form a level. The level will increase once complete the fourth stage, and the game repeats the stage with progressive difficulty.",
     working: true},
     {name : "DigDug",
     descr : "DigDub is an arcade video game. The player progresses through multiple rounds by eliminating enemies that live under the ground. The player drills down into the ground and makes their own passages. They eliminate enemies by dropping rocks on them or pumping them up with air until they explode.",
     working: true},
  ];
  //temporary solution while waiting on proper database.
  constructor() { }

  ngOnInit() {
    
  }

  public showModal = false;
  selectedGame: Game;

  loadModal(game: Game): void {
    this.selectedGame = game;
  }



}
