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
      title: 'Hire Me | Manthan Ankolekar - Full-Stack Software Engineer',
      description: 'Full-stack software engineer (Next.js, Angular, Node.js, Python). Open to full-time roles and freelance projects, remote or on-site. Role targets, strengths and ways to reach me.',
      keywords: 'Hire Full-Stack Software Engineer, Hire Next.js Developer, Hire Angular Developer, Freelance Developer, Node.js, Python',
      type: 'profile',
      url: 'https://manthanank.web.app/hire-me',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Manthan Ankolekar',
        jobTitle: 'Full-Stack Software Engineer',
        description: 'Open to full-time roles and freelance projects, remote or on-site.',
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

