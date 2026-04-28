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

  constructor() {
    this.seoService.updateMetaTags({
      title: 'Hire Me | Manthan Ankolekar - Software Developer',
      description: 'Role targets, availability, strengths, and quick ways to reach me.',
      keywords: 'Hire Angular Developer, Hire Full Stack Developer, Software Developer',
      type: 'profile',
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

