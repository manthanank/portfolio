import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-hire-me',
  imports: [RouterLink],
  templateUrl: './hire-me.html',
  styleUrl: './hire-me.css',
})
export class HireMe {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  personal = toSignal(this.dataService.getPersonalInfo(), { initialValue: null });
  hireMe = toSignal(this.dataService.getHireMe(), { initialValue: null });

  resumeUrl = computed(() => this.personal()?.resumeUrl || '');
  calendlyUrl = computed(() => this.personal()?.calendlyUrl || '');
  recruiterSummary = computed(() => this.hireMe()?.recruiterSummary || null);
  testimonials = computed(() => this.hireMe()?.testimonials || []);

  constructor() {
    this.seoService.updateMetaTags({
      title: 'Hire Me | Manthan Ankolekar - Software Developer',
      description: 'Role targets, availability, strengths, and quick ways to reach me.',
      keywords: 'Hire Angular Developer, Hire Full Stack Developer, Software Developer',
      type: 'profile',
      url: 'https://manthanank.web.app/hire-me',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Manthan Ankolekar',
        jobTitle: 'Software Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Open to opportunities',
        },
        url: 'https://manthanank.web.app/hire-me',
      },
    });
  }

  openResume() {
    const url = this.resumeUrl();
    this.dataService.logEvent('hire_me_resume_open');
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }

  openCalendly() {
    const url = this.calendlyUrl();
    this.dataService.logEvent('hire_me_schedule_call');
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }
}

