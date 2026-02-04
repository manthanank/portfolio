import { Component, HostListener, inject, OnDestroy, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription, filter, Observable } from 'rxjs';
import { Theme } from '../../services/theme';
import { Data } from '../../services/data';
import { PortfolioData } from '../../services/data';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header implements OnInit, OnDestroy {
  // Use signals for local component state
  isMenuOpen = signal(false);
  navigation$ = new Observable<PortfolioData['navigation'] | null>();
  personalData = signal<{ name: string; title: string } | null>(null);

  private routerSubscription?: Subscription;
  private themeService = inject(Theme);
  private router = inject(Router);
  private dataService = inject(Data);

  // Expose theme signal for template
  isDarkMode = this.themeService.isDark;

  ngOnInit() {
    // Load navigation data
    this.navigation$ = this.dataService.getNavigation();

    // Load personal data
    this.dataService.getPersonalInfo().subscribe((personal: PortfolioData['personal'] | null) => {
      if (personal) {

        this.personalData.set({
          name: personal.name,
          title: personal.title
        });
      }
    });

    // Close mobile menu on route change
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
    // Restore body scroll on component destroy
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: Event) {
    if (this.isMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.isMenuOpen.update(open => !open);
    this.updateBodyScroll();
  }

  closeMobileMenu() {
    this.isMenuOpen.set(false);
    this.updateBodyScroll();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private updateBodyScroll() {
    // Prevent body scroll when menu is open on mobile
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
