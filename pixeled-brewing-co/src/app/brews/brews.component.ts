import { Component, OnInit } from '@angular/core';
import { Brew } from '../brews/brews.module';

import brewData from '../brews.json';

@Component({
  selector: 'app-brews',
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.scss']
})
export class BrewsComponent implements OnInit {

  public showModal = false;
  selectedBrew: Brew;
  
  brews: Brew[] = brewData;

  constructor() { 

  }

  ngOnInit() {
    
  }


  loadModal(brew: Brew): void {
    this.selectedBrew = brew;
  }

}
