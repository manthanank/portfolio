import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-note',
  imports: [RouterLink],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note {
  private route = inject(ActivatedRoute);
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') || '')), { initialValue: '' });
  blog = toSignal(this.dataService.getBlog(), { initialValue: null });

  post = computed(() => (this.blog()?.posts || []).find((item) => item.slug === this.slug()) || null);

  constructor() {
    effect(() => {
      const post = this.post();
      if (!post) return;

      this.seoService.updateMetaTags({
        title: `${post.title} | Notes - Manthan Ankolekar`,
        description: post.summary,
        keywords: post.tags.join(', '),
        type: 'article',
        url: `https://manthanank.web.app/notes/${post.slug}`,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.summary,
          datePublished: post.publishedAt,
          author: {
            '@type': 'Person',
            name: 'Manthan Ankolekar',
          },
          url: `https://manthanank.web.app/notes/${post.slug}`,
        },
      });
    });
  }
}

