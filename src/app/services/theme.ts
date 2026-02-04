import { Injectable, signal, computed, effect } from '@angular/core';
import { ThemeType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly THEME_KEY = 'portfolio-theme';

  // Signals for state management
  private themeSignal = signal<ThemeType>('system');
  private isDarkSignal = signal<boolean>(false);

  // Public readonly signals
  public theme = this.themeSignal.asReadonly();
  public isDark = this.isDarkSignal.asReadonly();

  // Computed signal for derived state
  public isDarkMode = computed(() => this.isDarkSignal());

  constructor() {
    this.initTheme();

    // Effect to handle theme changes
    effect(() => {
      const theme = this.themeSignal();
      this.updateTheme(theme);
    });
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY) as ThemeType;
    const theme = savedTheme || 'system';

    this.themeSignal.set(theme);

    // Listen for system theme changes
    if (typeof window !== 'undefined' && window.matchMedia) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          if (this.themeSignal() === 'system') {
            this.isDarkSignal.set(e.matches);
            this.applyTheme(e.matches);
          }
        });
    }
  }

  setTheme(theme: ThemeType): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this.themeSignal.set(theme);
  }

  toggleTheme(): void {
    const currentTheme = this.themeSignal();
    const isDark = this.isDarkSignal();

    if (currentTheme === 'system') {
      // If system, toggle to opposite of current system preference
      this.setTheme(isDark ? 'light' : 'dark');
    } else {
      // If manual theme, toggle to opposite
      this.setTheme(currentTheme === 'light' ? 'dark' : 'light');
    }
  }

  private updateTheme(theme: ThemeType): void {
    let isDark = false;

    if (theme === 'system') {
      isDark = this.getSystemTheme();
    } else {
      isDark = theme === 'dark';
    }

    this.isDarkSignal.set(isDark);
    this.applyTheme(isDark);
  }

  private getSystemTheme(): boolean {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  private applyTheme(isDark: boolean): void {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  getCurrentTheme(): ThemeType {
    return this.themeSignal();
  }

  getCurrentIsDark(): boolean {
    return this.isDarkSignal();
  }
}
