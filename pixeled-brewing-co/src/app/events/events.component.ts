import { Component, OnInit } from '@angular/core';
import {Event} from '../events/events.module';

import eventData from '../events.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public showModal = false;
  selectedEvent: Event;

  event : Event[] = eventData;

  constructor() {

  }

  ngOnInit() {
  }

  loadModal(event: Event): void {
    this.selectedEvent = event;
  }

}