import { Component, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Data } from '../../services/data';
import { PortfolioData } from '../../services/data';
import { SocialLink } from '../../models';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AsyncPipe, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // Use signals for reactive state management
  currentRole = signal('');
  personalData = signal<{ name: string; title: string; bio: string } | null>(null);
  contactData = signal<PortfolioData['contact'] | null>(null);
  private roleIndex = signal(0);
  private charIndex = signal(0);
  private isDeleting = signal(false);

  private roles: string[] = [];
  private typeSpeed = 100;
  private deleteSpeed = 50;
  private pauseTime = 1500;
  private typingInterval: number | undefined;

  // Observables for dynamic data
  socialLinks$: Observable<SocialLink[]> = new Observable();

  private dataService = inject(Data);
  private seoService = inject(SeoService);

  ngOnInit() {
    // Set SEO meta tags for home page
    this.seoService.updateMetaTags({
      title: 'Manthan Ankolekar | Full Stack Developer',
      description: 'Full Stack Developer specializing in Angular, Node.js, and modern web technologies. Explore my portfolio, projects, and professional experience.',
      keywords: 'Full Stack Developer, Angular Developer, Node.js, TypeScript, JavaScript, Web Developer, Portfolio',
    });

    this.dataService.getSettings().subscribe(settings => {
      if (settings?.typingAnimation) {
        this.typeSpeed = settings.typingAnimation.typeSpeed;
        this.deleteSpeed = settings.typingAnimation.deleteSpeed;
        this.pauseTime = settings.typingAnimation.pauseTime;
      }
    });

    this.dataService.getPersonalInfo().subscribe((personal: PortfolioData['personal'] | null) => {
      if (personal) {
        this.roles = personal.roles || [];
        this.personalData.set({
          name: personal.name,
          title: personal.title,
          bio: personal.bio
        });
        this.startTypingAnimation();
      }
    });

    this.dataService.getContact().subscribe((contact: PortfolioData['contact'] | null) => {
      if (contact) {
        this.contactData.set(contact);
        // Set up social links observable
        this.socialLinks$ = new Observable(observer => {
          observer.next(contact.socialLinks);
          observer.complete();
        });
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
    const currentText = this.roles[this.roleIndex()];

    if (!this.isDeleting()) {
      // Typing
      this.currentRole.set(currentText.substring(0, this.charIndex() + 1));
      this.charIndex.update(index => index + 1);

      if (this.charIndex() === currentText.length) {
        // Finished typing, pause then start deleting
        this.typingInterval = setTimeout(() => {
          this.isDeleting.set(true);
          this.startTypingAnimation();
        }, this.pauseTime);
        return;
      }

      this.typingInterval = setTimeout(() => {
        this.startTypingAnimation();
      }, this.typeSpeed);
    } else {
      // Deleting
      this.currentRole.set(currentText.substring(0, this.charIndex()));
      this.charIndex.update(index => index - 1);

      if (this.charIndex() < 0) {
        // Finished deleting, move to next role
        this.isDeleting.set(false);
        this.roleIndex.update(index => (index + 1) % this.roles.length);
        this.charIndex.set(0);

        this.typingInterval = setTimeout(() => {
          this.startTypingAnimation();
        }, this.typeSpeed);
        return;
      }

      this.typingInterval = setTimeout(() => {
        this.startTypingAnimation();
      }, this.deleteSpeed);
    }
  }
}