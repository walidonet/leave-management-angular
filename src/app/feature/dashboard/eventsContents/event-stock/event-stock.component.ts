import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-stock',
  templateUrl: './event-stock.component.html',
  styleUrls: ['./event-stock.component.css']
})
export class EventStockComponent implements OnInit {

  events;
  errorMsg;
  users : string[] = ['employé1','employé2','employé3']

  private sub: any;
  private id: number;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'title';
  reverse = false;

  isEdit = false;

  constructor(private _eventService: EventService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.isEdit = false;
    this.getAllEvents();
  }
  selectEvent(event) {
    this.isEdit = true;
    console.log('is edit', event);
  }

  getPage(page: number) {
    this.loading = true;
    this.currentPage = page;
    this.getAllEvents();
  }
  sort(key: string) {
    this.loading = true;
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllEvents();
  }

  getAllEvents() {
    this._eventService.getAllEvents(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.events = data.content;
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.loading = false;
          this.isEdit = false;
          // console.log('Events data: ', data);
        },
        error => this.errorMsg = error);
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

}
