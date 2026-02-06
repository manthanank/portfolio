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
  settings = toSignal(this.dataService.getSettings(), { initialValue: null });

  // --- Derived State ---
  socialLinks = computed(() => this.contactData()?.socialLinks || []);
  roles = computed(() => this.personalData()?.roles || []);

  // --- Local Animation State ---
  currentRole = signal('');
  private roleIndex = signal(0);
  private charIndex = signal(0);
  private isDeleting = signal(false);
  private typingInterval: any;

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Manthan Ankolekar | Full Stack Developer',
      description: 'Full Stack Developer specializing in Angular, Node.js, and modern web technologies. Explore my portfolio, projects, and professional experience.',
      keywords: 'Full Stack Developer, Angular Developer, Node.js, TypeScript, JavaScript, Web Developer, Portfolio',
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
