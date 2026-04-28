import { signal } from '@angular/core';
import { of } from 'rxjs';
import { PORTFOLIO_DATA } from '../data/portfolio';

export function createMockSeoService() {
  return {
    updateMetaTags: () => undefined,
    resetToDefaults: () => undefined,
    setRobots: () => undefined,
    updateCanonicalUrl: () => undefined,
    updateStructuredData: () => undefined,
  };
}

export function createMockThemeService() {
  const isDark = signal(false).asReadonly();
  return {
    isDark,
    toggleTheme: () => undefined,
  };
}

export function createMockDataService() {
  return {
    getPersonalInfo: () => of(PORTFOLIO_DATA.personal),
    getContact: () => of(PORTFOLIO_DATA.contact),
    getNavigation: () => of(PORTFOLIO_DATA.navigation),
    getProjects: () => of(PORTFOLIO_DATA.projects),
    getWorkProjects: () => of(PORTFOLIO_DATA.workProjects),
    getEducation: () => of(PORTFOLIO_DATA.education),
    getSkills: () => of(PORTFOLIO_DATA.skills),
    getTimeline: () => of(PORTFOLIO_DATA.timeline),
    getUses: () => of(PORTFOLIO_DATA.uses),
    getSettings: () => of(PORTFOLIO_DATA.settings),
    getHireMe: () => of(PORTFOLIO_DATA.hireMe ?? null),
    getNow: () => of(PORTFOLIO_DATA.now ?? null),
    getBlog: () => of(PORTFOLIO_DATA.blog ?? null),
    logEvent: () => undefined,
  };
}

