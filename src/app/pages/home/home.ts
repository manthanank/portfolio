import { Component, OnDestroy, signal, inject, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  // --- Reactive Data (Signals) ---
  personalData = toSignal(this.dataService.getPersonalInfo(), { initialValue: null });
  contactData = toSignal(this.dataService.getContact(), { initialValue: null });
  projectsData = toSignal(this.dataService.getProjects(), { initialValue: null });
  settings = toSignal(this.dataService.getSettings(), { initialValue: null });

  // --- Derived State ---
  socialLinks = computed(() => this.contactData()?.socialLinks || []);
  roles = computed(() => this.personalData()?.roles || []);
  featuredProjects = computed(() => (this.projectsData()?.items || []).filter((p) => p.featured).slice(0, 3));
  resumeUrl = computed(() => this.personalData()?.resumeUrl || '');
  calendlyUrl = computed(() => this.personalData()?.calendlyUrl || '');

  // --- Local Animation State ---
  currentRole = signal('');
  private roleIndex = signal(0);
  private charIndex = signal(0);
  private isDeleting = signal(false);
  private typingInterval: any;

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Manthan Ankolekar | Full-Stack Software Engineer',
      description: 'Full-stack software engineer with 3.5+ years of experience in Next.js, Angular, Node.js and Python. Open to full-time roles and freelance projects, remote or on-site.',
      keywords: 'Full-Stack Software Engineer, Next.js Developer, React, Angular Developer, Node.js, Python, Flask, TypeScript, PostgreSQL, Docker, AWS, Portfolio',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Manthan Ankolekar',
          jobTitle: 'Full-Stack Software Engineer',
          description: 'Full-stack software engineer with 3.5+ years of experience in Next.js, Angular, Node.js and Python. Open to full-time roles and freelance projects, remote or on-site.',
          address: { '@type': 'PostalAddress', addressRegion: 'Karnataka', addressCountry: 'IN' },
          knowsAbout: ['Next.js', 'React', 'Angular', 'Node.js', 'Python', 'Flask', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
          url: 'https://manthanank.web.app',
          sameAs: [
            'https://github.com/manthanank',
            'https://www.linkedin.com/in/manthan-ankolekar-597b07a8/',
            'https://x.com/manthan_ank',
            'https://dev.to/manthanank',
            'https://www.npmjs.com/~manthanankolekar',
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Manthan Ankolekar Portfolio',
          url: 'https://manthanank.web.app',
        },
      ],
    });

    // Start animation once roles are loaded
    effect(() => {
      const availableRoles = this.roles();
      if (availableRoles.length > 0 && !this.typingInterval) {
        this.startTypingAnimation();
      }
    });
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('click_interaction', { item_name: name, item_type: type });
  }

  openResume() {
    const url = this.resumeUrl();
    this.logClick('resume_open', 'button');
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }

  openCalendly() {
    const url = this.calendlyUrl();
    this.logClick('schedule_call', 'button');
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTypingAnimation() {
    const rolesList = this.roles();
    if (rolesList.length === 0) return;

    const currentText = rolesList[this.roleIndex()];
    const typeSpeed = this.settings()?.typingAnimation?.typeSpeed || 100;
    const deleteSpeed = this.settings()?.typingAnimation?.deleteSpeed || 50;
    const pauseTime = this.settings()?.typingAnimation?.pauseTime || 1500;

    if (!this.isDeleting()) {
      // Typing
      this.currentRole.set(currentText.substring(0, this.charIndex() + 1));
      this.charIndex.update(index => index + 1);

      if (this.charIndex() === currentText.length) {
        // Finished typing, pause then start deleting
        this.typingInterval = setTimeout(() => {
          this.isDeleting.set(true);
          this.startTypingAnimation();
        }, pauseTime);
        return;
      }

      this.typingInterval = setTimeout(() => {
        this.startTypingAnimation();
      }, typeSpeed);
    } else {
      // Deleting
      this.currentRole.set(currentText.substring(0, this.charIndex()));
      this.charIndex.update(index => index - 1);

      if (this.charIndex() < 0) {
        // Finished deleting, move to next role
        this.isDeleting.set(false);
        this.roleIndex.update(index => (index + 1) % rolesList.length);
        this.charIndex.set(0);

        this.typingInterval = setTimeout(() => {
          this.startTypingAnimation();
        }, typeSpeed);
        return;
      }

      this.typingInterval = setTimeout(() => {
        this.startTypingAnimation();
      }, deleteSpeed);
    }
  }
}
