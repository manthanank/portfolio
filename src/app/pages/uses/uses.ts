import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { Data } from '../../services/data';
import { UseItem, UseCategory } from '../../models';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-uses',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './uses.html',
  styleUrls: ['./uses.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Uses implements OnInit {
  selectedCategory = signal('all');
  categories = signal<UseCategory[]>([]);
  uses = signal<UseItem[]>([]);

  private dataService = inject(Data);
  private seoService = inject(SeoService);

  get filteredUses(): UseItem[] {
    const currentCategory = this.selectedCategory();
    const currentUses = this.uses();

    if (currentCategory === 'all') {
      return currentUses;
    }
    return currentUses.filter(use => use.category === currentCategory);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }

  trackByUse(index: number, use: UseItem): string {
    return use.id;
  }

  openLink(url: string): void {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  getCountByCategory(category: string): number {
    return this.uses().filter(use => use.category === category).length;
  }

  ngOnInit(): void {
    // Set SEO meta tags for uses page
    this.seoService.updateMetaTags({
      title: 'Uses | Manthan Ankolekar - Tools & Setup',
      description: 'Discover the tools, software, and hardware I use for web development, including IDEs, design tools, and productivity apps.',
      keywords: 'Developer Tools, Software Stack, Development Setup, VS Code, Angular CLI, Node.js Tools',
    });

    this.dataService.getUses().subscribe((usesData: { categories: UseCategory[]; items: UseItem[] } | null) => {
      if (usesData) {
        this.categories.set(usesData.categories || []);
        this.uses.set(usesData.items || []);
      }
    });
  }
}
