import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen = false;
  roles;
  isAdmin = false;
  isRh = false;
  isHse = false;
  isEmploye = false;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit() {
    this._sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
    this.roles = localStorage.getItem('role');
    if(this.roles == 'ROLE_ADMIN'){
      this.isAdmin = true;
      this.isRh = false;
      this.isHse = false;
      this.isEmploye = false;
    }
    else if(this.roles == 'ROLE_USER'){
      this.isAdmin = false;
      this.isRh = false;
      this.isHse = false;
      this.isEmploye = true;
    }
    else if(this.roles == 'ROLE_RH'){
      this.isAdmin = false;
      this.isRh = true;
      this.isHse = false;
      this.isEmploye = false;
    }
    else{
      this.isAdmin = false;
      this.isRh = false;
      this.isHse = true;
      this.isEmploye = false;
    }
  }

}
