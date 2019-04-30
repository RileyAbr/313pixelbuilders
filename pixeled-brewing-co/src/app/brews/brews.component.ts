import { Component, OnInit } from '@angular/core';
import {Brew} from '../brews/brews.module';

@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.scss']
})
export class BrewsComponent implements OnInit {

  brews : Brew[] = [
    {name : "Galactic Implication",
      type :"New England IPA",
      tap : true,
      volume : 4.8},
      {name : "Jon Luck Pickard",
      type :"English Strong Bitter",
      tap : true,
      volume : 5.0},
      {name : "I am Brut",
      type :"Brut IPA",
      tap : true,
      volume : 5.6},
      {name : "UpgrayeDD",
      type :"Double IPA",
      tap : true,
      volume : 6.8},
      {name : "Jumpman",
      type :"Brown Ale",
      tap : true,
      volume : 4.6},
      {name : "Tecmo Super Beer",
      type :"Blonde Ale",
      tap : true,
      volume : 5.5},
      {name : "Coin-Op",
      type :"Creme Ale",
      tap : true,
      volume : 5.7},
      {name : "HDS Stout",
      type :"Irish Stout",
      tap : true,
      volume : 4.2}
  ];
  //A temporary Solution to the database issue. We can use this to test our work for now
  
  constructor() { }

  ngOnInit() {
  }

}
