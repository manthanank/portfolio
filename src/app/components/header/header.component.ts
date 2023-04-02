import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  openSidenav() {
    this.SideNavToggle.emit();
  }
}
