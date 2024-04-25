import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ RouterModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onToggleClose() {
    this.closeSideNav.emit();
  }
}