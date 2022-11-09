import { EventService } from './../../services/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.css']
})
export class EventRequestComponent implements OnInit {

  @Input() event: Event;
  minDate: Date;
  create_event_msg: string;
  public has_error = false;

  eventForm: FormGroup;
  submitted = false;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'title';
  reverse = false;
  events;
  errorMsg;

  isEdit = false;

  constructor(private formBuilder: FormBuilder, private _eventService: EventService) { }

  ngOnInit() {
    this.minDate = new Date();
    this.eventForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', ],
      nbr: ['', ],
      username: ['', ],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.getAllEvents();
  }

  get f() { return this.eventForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.eventForm.invalid) {
      return;
    }
    this.eventForm.value.username = localStorage.getItem('username')
    this.eventForm.value.type = "Request";
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
          console.log(data.content)
          this.events = data.content.filter(row => row.type !== 'Request');
          console.log('data.content')
          console.log(this.events)
          console.log('data.content')
          this.events = this.events.filter(row => row.nbr > 0);
          console.log('data.content')
          console.log(this.events)
          console.log('data.content')
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.loading = false;
          this.isEdit = false;
          // console.log('Events data: ', data);
        },
        error => this.errorMsg = error);
  }

}
