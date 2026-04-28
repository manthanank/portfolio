import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { Data } from './services/data';
import { Theme } from './services/theme';
import { SeoService } from './services/seo';
import { createMockDataService, createMockThemeService, createMockSeoService } from './testing/mocks';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: Theme, useValue: createMockThemeService() },
        { provide: SeoService, useValue: createMockSeoService() },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render skip link', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="#main-content"]')?.textContent).toContain('Skip to content');
  });
});
