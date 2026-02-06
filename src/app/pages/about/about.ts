import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  // --- Reactive Data (Signals) ---
  skills = toSignal(this.dataService.getSkills(), { initialValue: null });
  timeline = toSignal(this.dataService.getTimeline(), { initialValue: [] });

  // --- Derived State ---
  frontendSkills = computed(() => this.skills()?.frontend || []);
  backendSkills = computed(() => this.skills()?.backend || []);
  toolsSkills = computed(() => this.skills()?.tools || []);

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'About Me | Manthan Ankolekar - Full Stack Developer',
      description: 'Learn about my journey as a Full Stack Developer, my technical skills in Angular, Node.js, TypeScript, and my professional experience.',
      keywords: 'About Manthan Ankolekar, Skills, Experience, Angular Developer, Node.js Developer, Full Stack Developer',
    });
  }

  getStarArray(level: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('about_interaction', { item_name: name, item_type: type });
  }
}