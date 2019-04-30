import { Component, OnInit } from '@angular/core';
import {Event} from '../events/events.module';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  event : Event[] = [
    {name : "Killer Queen Mondays",
      descr : "Play the Arcade game Killer Queen for free every Monday!",
      date : "Every Monday",
      privacy : false}
  ];
  constructor() { }

  ngOnInit() {
  }

}
