import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() SideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  openSidenav() {
    this.SideNavToggle.emit();
  }
}