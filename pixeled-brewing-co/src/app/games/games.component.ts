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

  games: Game[] = [{"name":"Super Chexx Bubble Hockey","description":"Super Chexx Bubble Hocky is a table hockey arcade game. It can be played by two opposing players who control all five hockey players and the goalie for their side for singles or as two on two game for doubles. The players can also choose their own team.", "working": true},
  {"name":"NBA Jam","description":"NBA Jam is a basketball arcade game. The players are able to jump many times above their own height, making slam dunks that defy both human capabilities and the laws of physics in the game. There are no fouls, free throws, or violations in the game. Players can also enter special codes to unlock hidden players in the game.", "working": true},
  {"name":"NFL Blitz 2000 gold","description":"NFL Blitz 2000 Gold is an American football themed arcade games. Players can choose an official NFL team and compete in American football games with very few real-world rules. ", "working": true},
  {"name":"Madden Football","description":"Madden Football is an American football video game. It delivers an NFL experience through competing against friends, taking your team from pre-season to Super Bowl Champions, and allowing you to be at the center of every play so you can achieve gridiron greatness. Players can choose their favorite teams, build their own rosters, upgrade their players through challenges and online matchups, and team up with friends.", "working": true},
  {"name":"Super Off Road","description":"Super Off Road is an arcade video game. In the game, up to three players compete against each other or the computer in racing around several top-view indoor off-road truck tracks of increasing difficulty. Players can choose different tracks and races. The goal of this game is to reach the end of the season with the most money earned, which they can earn the money by the places they get. ", "working": true},
  {"name":"Area 51 Site 4","description":"Area 51 Site 4 is a light gun arcade game, and can be played in either single player or cooperative. The player has to shoot the enemies such as zombies and aliens. The final mission for this is to go into a huge ware house to destroy a giant red alien with multiple limbs, and shooting zombies and aliens. ", "working": true},
  {"name":"Darius Burst","description":"Darius Burst is a horizontal scrolling shooter. Players fight the Belsar Army through several stages and can choose to fight in different zones along different paths, ultimately reaching a different final boss and ending.", "working": true},
  {"name":"Gauntlet Dark Legacy","description":"Darius Burst is a horizontal scrolling shooter. Players fight the Belsar Army through several stages and can choose to fight in different zones along different paths, ultimately reaching a different final boss and ending.", "working": true},
  {"name":"NBA Showtime","description":"NBA Showtime is a basketball video game which features 2 on 2 play with the ability to pick two players from any NBA teamâ€™s starting line-up for each shove on another player. The game contains many secret characters, and it also features the â€œon fireâ€ feature. Play otherwise is similar to NBA rules.", "working": true},
  {"name":"Donkey Kong","description":"Donkey Kong requires the player to jump between gaps and over obstacles or approaching enemies, destroy objects, collecting items, and completing each stage. The game is divided into four different single-screen stages, these four stages combine to form a level. The level will increase once complete the fourth stage, and the game repeats the stage with progressive difficulty.", "working": true},
  {"name":"DigDug","description":"DigDub is an arcade video game. The player progresses through multiple rounds by eliminating enemies that live under the ground. The player drills down into the ground and makes their own passages. They eliminate enemies by dropping rocks on them or pumping them up with air until they explode.", "working": true},
  {"name":"Captain America and the Avengers","description":"Captain America and the Avengers is an arcade game which features the Avengers in a side-scrolling brawling and shooting adventure to defeat the evil Red Skull. Players can choose to play as one of four members of the Avengers. Each character can fight hand-to-hand, throw select items when on the ground, and use a ranged special attack. ", "working": true},
  {"name":"Teenage Mutant Ninja Turtles","description":"The player can chooses from one of the four Ninja Turtles. They must give chase, save their comrade, and defeat the evil Shredder. ", "working": true},
  {"name":"Teenage Mutant Ninja Turtles: Turtles in Time","description":"Teenage Mutant Ninja Turtles: Turtles in Time was available for the arcades in two and four-player versions. Players guide the turtles through a series of levels. ", "working": true},
  {"name":"WWF Superstars","description":"WWF Superstars is an arcade wrestling game. Players select two wrestlers to form a tag team and up to two players can play at once. The players take their team through a series of matches with other tag teams in New York City and them Tokyo.", "working": true},
  {"name":"Star Wars Trilogy","description":"Star Wars Trilogy is a 3D rail shooter based on the original trilogy of Star Wars. Players can choose one of three different missions, each from a different film in the original trilogy. Each mission consists of a few stages. Players will enter a bonus round of lightsaber combat once they finish two or three missions.", "working": true},
  {"name":"Battle Arena Toshinden 2","description":"Battle Arena Toshinden 2 is a weapon-based 3D fighting game. Each character has his or her own unique set of basic moves, special attacks, and a desperation attack.", "working": true},
  {"name":"Simpsons Bowling","description":"Simpsons Bowling features multiple Simpson characters. Each of the characters has their own specific statistics, and they also features a specific ending after you complete a game of bowling.", "working": true},
  {"name":"Marvel vs Capcom","description":"Marvel vs Capcom is a series of crossover fighting games that incorporates tag team battles. Players form teams of two or three characters, and they are attempt to damage and knock out their opponents. ", "working": true},
  {"name":"Skull & Crossbones","description":"Skull & Crossbones is a swashbuckling adventure. It has seven game levels. Once the first six levels are competed, the players go to the final level, the Wizard's Lair.", "working": true},
  {"name":"Windjammers","description":"Windjammers is a fast-paced sports arcade game. It is really similar to air hockey. The players continuously shoot the disc at the goal zone of the opponent attempting to score.", "working": true},
  {"name":"Bust a Move","description":"Bust a Move is a tile-matching arcade puzzle game for one or two players. The players are trying to eliminate the bubbles from the screen by linking three or more spheres of the same color together. Once they clear all the bubbles, they advance to the next level.", "working": true},
  {"name":"Strikers 1945 Plus","description":"Strikers 1945 plus is a shoot them up video game. Players choose one of six planes and try to beat the final boss in the game.", "working": true},
  {"name":"Metal Slug X","description":"Metal Slug X is a run and gun video game. The players must shoot constantly at a continual stream of enemies in order to reach the end of each level.", "working": true},
  {"name":"Time Crisis 3","description":"Time Crisis 3 is a on-rails light fun shooter arcade video game. Players are going to shoot all on-screen enemies in an area within specific time limit to continue on to the next area and complete the level.", "working": true},
  {"name":"The house of the Dead 2","description":"The House of the Dead 2 is a first-person rail shooter light gun arcade game with a horror theme. ", "working": true},
  {"name":"Golden Tee 98","description":"Golden Tee 98 is a golf arcade game which includes casual 18-hole golf, closest to the pin, and online tournaments modes.", "working": true},
  {"name":"The Simpsons","description":"The Simpsons is an arcade beat them up developed. Players can control members of the Simpsons family as they fight various enemies in order to rescue the kidnapped Maggie.", "working": true},
  {"name":"X-men","description":"X-Men is a side-scrolling beat them up arcade game. Players choose one of the playable X-Men, and control him to defeat their enemy Magneto in the game.", "working": true},
  {"name":"Street Fighter 2","description":"Street Fighter 2 is a competitive fighting game. Each player has their own fighting style. The players engage opponents in one-on-one close quarter combat in a series of best-two-out-of-three matches.", "working": true},
  {"name":"Roadblasters","description":"Roadblasters is a combat racing arcade game. The players must navigate an armed sports car through 50different rally races, getting to the finish line before running out of fuel.", "working": true},
  {"name":"Rampage","description":"In Rampage, players take control of gigantic monsters trying to survive against onslaught of military forces. Each round is completed when a particular city is completely reduced to rubble.", "working": true},
  {"name":"Dragonâ€™s Lair","description":"Dragonâ€™s Lair is a laserdisc video game. In the game, the protagonist Dirk the Daring is a knight attempting to rescue Princess Daphne from the evil dragon Singe who has locked the princess in the foul wizard Mordroc's castle.", "working": true},
  {"name":"Space Ace","description":"Space Ace is a laserdisc video game.  In the game, players are trying to rescue Kimberly, their wanna-be girlfriend, from the evil Commander Borf who has his Infanto Ray that can turn the players into a baby.", "working": true},
  {"name":"BurgerTime","description":"In BurgerTime, the player is chef Peter Pepper, who must walk over hamburger ingredients located across a maze of platforms while avoiding enemy foods.", "working": true},
  {"name":"Moon Patrol","description":"In Moon Patrol, the players control a Moon buggy that travels over the Moonâ€™s surface. While driving it, they need to avoid the obstacles such as craters and mines that appears.", "working": true},
  {"name":"Zaxxon","description":"Zaxxon is an isometric shooter arcade game. The players pilot a ship through heavily defended space fortresses to hit as many targets as possible without being shot down or running out of fuel.", "working": true},
  {"name":"Mario Bros.","description":"In Mario Bros. Mario and his brother Luigi are plumbers, and they have to defeat all the enemies that have been coming from the sewers.", "working": true},
  {"name":"Frogger","description":"In Frogger, the players need to direct frogs to their homes one by one by crossing a busy road and navigating a river full of hazards.", "working": true},
  {"name":"Space Invaders Deluxe","description":"In Space Invaders Deluxe, the players are going to shoot the endless waves of aliens descending towards them. The players will advance to the next level when all enemies within a formation have been defeated.", "working": true},
  {"name":"Tron","description":"Tron consists of four sub-games based on events and characters in the movie, IO Tower, MCP Cone, Light Cycles, Battle Tanks. Players are trying to score points and advance through the gameâ€™s twelve levels by completing each of the sub-games.", "working": true},
  {"name":"Pac-Man","description":"Pac-Man involves the titular character in an enclosed maze filled with dots or pellets. Players are going to consume all of the pellets while avoiding four multi-colored ghosts that wonder around the maze.", "working": true},
  {"name":"Ms. Pac-Man","description":"Ms. Pac-Man is similar to Pac-Man. Ms. Pac-Man has four different mazes, and players are also trying to earns points by eating pellets and avoiding monsters to advance to the next level.", "working": true},
  {"name":"Atari Star Wars","description":"Atari Star Wars puts the player inside an X-Wing Fighter craft travelling through space to shoot down enemy Tie-Fighters. Once the enemies are cleared the player arrives at the Death Star to shoot down Towers and turrets. The player is able to barrel down the Death Stars trench to the game's ultimate spectacular grand finale.", "working": true},
  {"name":"Asteroids Deluxe","description":"Asteroids Deluxe is a vector graphic multi-directional shooter arcade game. Players are going to control a ship to score points by destroying asteroids and flying saucers. ", "working": true},
  {"name":"Centipede","description":"Centipede is a fixed shooter arcade game. The players fight off centipedes, spiders, scorpions and ants, completing a round after eliminating the centipede that winds down the playing field.", "working": true},
  {"name":"Joust","description":"In Joust, the players are going to progress through levels by defeating groups of enemy knights riding buzzards by using a button and joystick to control a knight riding a flying ostrich.", "working": true},
  {"name":"Defender","description":"Defender is a horizontally scrolling shoot them up arcade video game. The game is set on an unnamed planet where the players must defeat waves of invading aliens while protecting astronauts.", "working": true},
  {"name":"Galaga","description":"Galaga puts the players in control of a spacecraft with enemy aliens arriving in formation at the beginning of a stage, either trying to destroy, collide with, or capture the spaceship, with the player progressing every time alien forces are vanquished.", "working": true},
  {"name":"Track & Field","description":"Track & Field is an Olympic-themed sports arcade game that the players compete in a series of events: 100 meter dash, long jump, javelin throw, 110 meter hurdles, hammer throw, and high jump.", "working": true},
  {"name":"Gauntlet","description":"Gauntlet is a fantasy-themed hack and slash arcade game. The players (up to four people can play at once) explore dungeons and fighting monsters from a top-view perspective. Each playerâ€™s character has different strengths and weaknesses. ", "working": true},
  {"name":"Final Fight","description":"Final Fight is a side-scrolling beat them up video game. The game is set in the fictional Metro City, the player controls one of three characters, and they set out to defeat the Mad Gear gang and rescue Haggarâ€™s (former pro wrestler and mayor) young daughter Jessica.", "working": true},
  {"name":"Golden Axe: Revenge of Death Adder","description":"Golden Axe: Revenge of Death Adder is a side-scrolling beatâ€™em up video game. The player characters are Goah the giant, Stern the barbarian, Dora the Kentauride, and Little Trix. The main enemy is Death Adder, multiple players could cooperate to compete wrestling moves on one enemy.", "working": true},
  {"name":"Metal Slug 4","description":"Metal Slug 4 is a run and gun video game. This game is very similar to previous Metal Slug series. In Metal Slug 4, the players have a gun, they have to kill enemies, they have to get to the end of the level.", "working": true},
  {"name":"Tekken 2","description":"Tekken 2 is a fighting game. There are ten playable characters and up to twenty-five fighters. Tekken 2 also introduces various modes, such as Survival mode, Team Battle mode, and Time Attack mode.", "working": true},
  {"name":"Soul Calibur 3","description":"Soul Calibur 3 is a fighting video game. Soul Calibur is the holy sword created to battle the evil sword Soul Edge. Soul Calibur 3 features a full-fledged character creation system and numerous single-player game modes, such as story-based 'Tales of Souls' mode, 'the Chronicles of the Sword' mode, and the endless 'World Competition' mode.", "working": true},
  {"name":"Mortal Kombat","description":"Mortal Kombat is an arcade fighting game. Players battle opponents in one-on-one matches. The fighter that completely drains the opponent's health bar first wins the round. ", "working": true},
  {"name":"Mortal Kombat 2","description":"Mortal Kombat 2 is a fighting game, it is the second game in the Mortal Kombat. It introduces more varied finishing moves and several iconic characters. Matches are divided into rounds, and the first player to win two rounds by fully depleting their opponent's life bar is the winner.", "working": true},
  {"name":"Killer Queen","description":"Killer Queen is a team-based competitive game for up to ten players. The game is designed to be played arcade-style by ten players in two teams of five, each led by a powerful Queen, face off to be the first to bring the giant snail god home, fill their hive with barriers, or execute a triple assassination of the enemy Queen.", "working": true}];
  // temporary solution while waiting on proper database.
  constructor() {
     // this.games = [(data)];
    }

  ngOnInit() {
  }


  loadModal(game: Game): void {
    this.selectedGame = game;
  }



}
