import { Component, inject, signal, computed } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Theme } from '../../services/theme';
import { Data } from '../../services/data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(document:keydown.escape)': 'onEscapeKey($event)'
  }
})
export class Header {
  private themeService = inject(Theme);
  private router = inject(Router);
  private dataService = inject(Data);

  // Use signals for state management
  isMenuOpen = signal(false);
  scrollProgress = signal(0);
  isScrolled = signal(false);

  // Signals derived from services
  isDarkMode = this.themeService.isDark;
  
  navigation = toSignal(this.dataService.getNavigation().pipe(
    map(nav => nav?.menuItems || [])
  ), { initialValue: [] });

  personalData = toSignal(this.dataService.getPersonalInfo().pipe(
    map(personal => personal ? { name: personal.name, title: personal.title } : null)
  ), { initialValue: null });

  firstName = computed(() => {
    const name = this.personalData()?.name;
    return name ? name.split(' ')[0] : 'Manthan';
  });

  constructor() {
    // Close mobile menu on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  onWindowScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    this.scrollProgress.set(scrolled);
    this.isScrolled.set(winScroll > 20);
  }

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
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMenuOpen() ? 'hidden' : 'auto';
    }
  }
}
