import { EventService } from './../../services/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events-manage',
  templateUrl: './events-manage.component.html',
  styleUrls: ['./events-manage.component.css']
})
export class EventsManageComponent implements OnInit {

  @Input() event: Event;
  minDate: Date;
  create_event_msg: string;
  public has_error = false;

  eventForm: FormGroup;
  submitted = false;
  eventTypes;
  errorMsg;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'title';
  reverse = false;

  isEdit = false;
  constructor(private formBuilder: FormBuilder, private _eventService: EventService) { }

  ngOnInit() {
    this.minDate = new Date();
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', ],
      nbr: ['', ],
    });
    this.getAllEvents();
  }
  selectEvent(event) {
    this.isEdit = true;
    console.log('is edit', event);
  }

  getPage(page: number) {
    this.loading = false;
    this.currentPage = page;
    this.getAllEvents();
  }
  sort(key: string) {
    this.loading = true;
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllEvents();
  }

  get f() { return this.eventForm.controls; }

  getAllEvents() {
    this._eventService.getAllEventsTypes(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.eventTypes = data.content;
          //this.events = Array.from(this.events.reduce((m, t) => m.set(t.eventType, t), new Map()).values());
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.loading = false;
          this.isEdit = false;
          // console.log('Events data: ', data);
        },
        error => this.errorMsg = error);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }

    this._eventService.createEvent(this.eventForm.value).subscribe(res => {
      this.has_error = false;
      this.create_event_msg = 'Event succesfully Created';
      this.eventForm.reset();
      this.submitted = false;
    }, error => {
      this.has_error = true;
      this.create_event_msg = error.error.message;
    });
  }


}
