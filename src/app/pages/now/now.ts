import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-now',
  imports: [RouterLink],
  templateUrl: './now.html',
  styleUrl: './now.css',
})
export class Now {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  now = toSignal(this.dataService.getNow(), { initialValue: null });
  updatedAt = computed(() => this.now()?.updatedAt || '');

  constructor() {
    this.seoService.updateMetaTags({
      title: 'Now | Manthan Ankolekar',
      description: 'A short snapshot of what I’m focused on right now.',
      keywords: 'Now page, updates, focus, learning',
      type: 'article',
    });
  }
}

