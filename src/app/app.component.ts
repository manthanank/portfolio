import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isDark = false;

  ngOnInit() {}

  toggle() {
    this.isDark
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }
}
