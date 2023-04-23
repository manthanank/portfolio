import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isDark = false;

  constructor(private metaService:Meta){
  }

  ngOnInit() {
    this.metaService.addTag( { name:'description',content:"This is my personal portfolio"},{ name: 'robots', content: 'index,follow' });
  }

  toggle() {
    this.isDark
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }
}
