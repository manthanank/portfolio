import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  twitterHandle?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);

  private readonly defaultConfig: SeoConfig = {
    title: 'Manthan Ankolekar | Full Stack Developer',
    description: 'Full Stack Developer specializing in Angular, Node.js, and modern web technologies. Explore my portfolio, projects, and professional experience.',
    keywords: 'Full Stack Developer, Angular Developer, Node.js, TypeScript, JavaScript, Web Developer, Frontend Developer, Backend Developer, Portfolio',
    image: '/assets/og-image.png',
    type: 'website',
    author: 'Manthan Ankolekar',
    twitterHandle: '@mantaborobot'
  };

  private readonly baseUrl = 'https://manthanank.web.app';

  constructor() {
    // Listen for route changes to update canonical URL
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateCanonicalUrl(event.urlAfterRedirects);
    });
  }

  /**
   * Update all SEO meta tags for a page
   */
  updateMetaTags(config: Partial<SeoConfig>): void {
    const mergedConfig = { ...this.defaultConfig, ...config };

    // Set page title
    this.title.setTitle(mergedConfig.title);

    // Basic meta tags
    this.updateTag('description', mergedConfig.description);
    if (mergedConfig.keywords) {
      this.updateTag('keywords', mergedConfig.keywords);
    }
    if (mergedConfig.author) {
      this.updateTag('author', mergedConfig.author);
    }

    // Open Graph tags (Facebook, LinkedIn, etc.)
    this.updateTag('og:title', mergedConfig.title, 'property');
    this.updateTag('og:description', mergedConfig.description, 'property');
    this.updateTag('og:type', mergedConfig.type || 'website', 'property');
    this.updateTag('og:site_name', 'Manthan Ankolekar Portfolio', 'property');
    
    if (mergedConfig.image) {
      const imageUrl = mergedConfig.image.startsWith('http') 
        ? mergedConfig.image 
        : `${this.baseUrl}${mergedConfig.image}`;
      this.updateTag('og:image', imageUrl, 'property');
      this.updateTag('og:image:alt', mergedConfig.title, 'property');
    }

    if (mergedConfig.url) {
      this.updateTag('og:url', mergedConfig.url, 'property');
    }

    // Twitter Card tags
    this.updateTag('twitter:card', 'summary_large_image');
    this.updateTag('twitter:title', mergedConfig.title);
    this.updateTag('twitter:description', mergedConfig.description);
    
    if (mergedConfig.image) {
      const imageUrl = mergedConfig.image.startsWith('http') 
        ? mergedConfig.image 
        : `${this.baseUrl}${mergedConfig.image}`;
      this.updateTag('twitter:image', imageUrl);
    }
    
    if (mergedConfig.twitterHandle) {
      this.updateTag('twitter:creator', mergedConfig.twitterHandle);
      this.updateTag('twitter:site', mergedConfig.twitterHandle);
    }
  }

  /**
   * Update canonical URL
   */
  updateCanonicalUrl(path: string): void {
    const url = `${this.baseUrl}${path}`;
    this.updateTag('og:url', url, 'property');
    
    // Update or create canonical link element
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Set robots meta tag
   */
  setRobots(content: string): void {
    this.updateTag('robots', content);
  }

  /**
   * Helper to update or add a meta tag
   */
  private updateTag(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
    const selector = attribute === 'property' ? `property="${name}"` : `name="${name}"`;
    
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attribute]: name, content });
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  /**
   * Reset to default meta tags
   */
  resetToDefaults(): void {
    this.updateMetaTags(this.defaultConfig);
  }
}
