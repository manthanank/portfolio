import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-notes',
  imports: [RouterLink],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  blog = toSignal(this.dataService.getBlog(), { initialValue: null });
  search = signal('');

  posts = computed(() => {
    const term = this.search().trim().toLowerCase();
    const posts = this.blog()?.posts || [];
    if (!term) return posts;

    return posts.filter((post) =>
      [post.title, post.summary, post.category, ...post.tags].join(' ').toLowerCase().includes(term)
    );
  });

  constructor() {
    this.seoService.updateMetaTags({
      title: 'Notes | Manthan Ankolekar',
      description: 'Short notes on Angular, frontend architecture, accessibility, and portfolio thinking.',
      keywords: 'Angular notes, frontend blog, developer notes, accessibility',
      type: 'article',
      url: 'https://manthanank.web.app/notes',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Manthan Ankolekar Notes',
        url: 'https://manthanank.web.app/notes',
      },
    });
  }
}

