import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstImg: string = "../assets/img/pixeled-photos/DB-2.jpg"
  imgArray: any[] = [
    {id: 2, src: "../assets/img/pixeled-photos/KQ.jpg"}
  ]

  hoursArray: any[] = [
    {date: 'M-F', startTime: '5pm', endTime: '12pm'},
    {date: 'Sat', startTime: '12am', endTime: '12pm'},
    {date: 'Sun', startTime: '12am', endTime: '6pm'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
