import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data, Education } from '../../services/data';
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
  education = toSignal(this.dataService.getEducation(), { initialValue: [] as Education[] });

  // --- Derived State ---
  skillGroups = computed(() => this.skills()?.groups || []);

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'About Me | Manthan Ankolekar - Full-Stack Software Engineer',
      description: 'Full-stack software engineer with 3.5+ years of experience in Next.js, Angular, Node.js and Python. Skills, work history and education. Open to full-time roles and freelance projects, remote or on-site.',
      keywords: 'About Manthan Ankolekar, Skills, Experience, Full-Stack Software Engineer, Next.js Developer, Angular Developer, Node.js Developer, Python Developer',
    });
  }

  getStarArray(level: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('about_interaction', { item_name: name, item_type: type });
  }
}