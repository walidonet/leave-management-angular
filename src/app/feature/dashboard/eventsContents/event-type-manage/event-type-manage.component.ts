import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-type-manage',
  templateUrl: './event-type-manage.component.html',
  styleUrls: ['./event-type-manage.component.css']
})
export class EventTypeManageComponent implements OnInit {

  leaveType_req_msg: string;
  public has_error = false;

  leaveTypeForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _eventService: EventService) { }

  ngOnInit() {
    this.initLeaveTypeForm();
  }

  initLeaveTypeForm() {
    this.leaveTypeForm = this.formBuilder.group({
      groupName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get f() { return this.leaveTypeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.leaveTypeForm.invalid) {
      return;
    }
    // console.log("success ", this.leaveTypeForm.value);

    this._eventService.createEventType(this.leaveTypeForm.value).subscribe(res => {
      this.has_error = false;
      this.leaveType_req_msg = 'Leave Type Successfully Created';
      this.leaveTypeForm.reset();
      this.submitted = false;
    }, error => {
      this.has_error = true;
      this.leaveType_req_msg = error.error.message;
    });
  }

}
