import { Component } from '@angular/core';
// import { Event } from '@angular/router';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  events: Event[] = [
    new Event('Event Name', new Date(2023, 7, 21), 'Breda', 'Sunday', 50, 'Birthday', 'ImagePath', )
  ];

  constructor(){

  }
  ngOninit(){

  }
}


