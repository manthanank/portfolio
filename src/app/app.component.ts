import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  metaService = inject(Meta);

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
