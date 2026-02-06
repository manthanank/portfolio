import { Component, signal, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-uses',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './uses.html',
  styleUrl: './uses.css',
})
export class Uses {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  // --- Reactive Data (Signals) ---
  usesData = toSignal(this.dataService.getUses(), { initialValue: null });
  selectedCategory = signal('all');

  // --- Derived State ---
  categories = computed(() => this.usesData()?.categories || []);
  allItems = computed(() => this.usesData()?.items || []);

  filteredUses = computed(() => {
    const category = this.selectedCategory();
    const items = this.allItems();
    if (category === 'all') return items;
    return items.filter(item => item.category === category);
  });

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Uses | Manthan Ankolekar - Tools & Setup',
      description: 'Discover the tools, software, and hardware I use for web development, including IDEs, design tools, and productivity apps.',
      keywords: 'Developer Tools, Software Stack, Development Setup, VS Code, Angular CLI, Node.js Tools',
    });
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  getCountByCategory(category: string): number {
    return this.allItems().filter(use => use.category === category).length;
  }

  openLink(url: string): void {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}