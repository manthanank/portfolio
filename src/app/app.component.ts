import { Component, OnInit } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDark = false;

  constructor(private metaService: Meta) {
  }

  ngOnInit() {
    this.metaService.addTag({ name: 'description', content: "This is my personal portfolio" });
    this.metaService.addTag({ rel: 'canonical', href: 'https://manthanank.web.app' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: 'Portfolio' });
    this.metaService.addTag({ name: 'author', content: 'Manthan Ankolekar' });
    this.metaService.addTag({ name: 'twitter:title', content: 'Manthan Ankolekar' });
    this.metaService.addTag({ name: 'twitter:description', content: 'Check out my Twitter!.' });
    this.metaService.addTag({ name: 'twitter:image', content: 'https://twitter.com/manthan_ank/photo' });
  }
}
