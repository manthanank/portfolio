import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { shareReplay, Observable, BehaviorSubject, catchError, map, of } from 'rxjs';
import { ProjectCategory, Project, Skill, TimelineItem, UseCategory, UseItem, ContactMethod, SocialLink } from '../models';

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    roles: string[];
  };
  navigation: {
    menuItems: Array<{
      path: string;
      label: string;
      icon: string;
    }>;
  };
  projects: {
    categories: ProjectCategory[];
    items: Project[];
  };
  skills: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
  };
  timeline: TimelineItem[];
  uses: {
    categories: UseCategory[];
    items: UseItem[];
  };
  contact: {
    methods: ContactMethod[];
    socialLinks: SocialLink[];
  };
  settings: {
    typingAnimation: {
      typeSpeed: number;
      deleteSpeed: number;
      pauseTime: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  private dataUrl = '/data/portfolio-data.json';
  private dataSubject = new BehaviorSubject<PortfolioData | null>(null);
  private data$ = this.dataSubject.asObservable().pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<PortfolioData>(this.dataUrl).pipe(
      catchError(error => {

        return of(null);
      })
    ).subscribe({
      next: (data) => {

        this.dataSubject.next(data);
      },
      error: (error) => {

        this.dataSubject.next(null);
      }
    });
  }

  getData(): Observable<PortfolioData | null> {
    return this.data$;
  }

  getPersonalInfo(): Observable<PortfolioData['personal'] | null> {
    return this.data$.pipe(
      map(data => data?.personal || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getNavigation(): Observable<PortfolioData['navigation'] | null> {
    return this.data$.pipe(
      map(data => data?.navigation || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getProjects(): Observable<PortfolioData['projects'] | null> {
    return this.data$.pipe(
      map(data => data?.projects || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getSkills(): Observable<PortfolioData['skills'] | null> {
    return this.data$.pipe(
      map(data => data?.skills || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getTimeline(): Observable<PortfolioData['timeline'] | null> {
    return this.data$.pipe(
      map(data => data?.timeline || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getUses(): Observable<PortfolioData['uses'] | null> {
    return this.data$.pipe(
      map(data => data?.uses || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getContact(): Observable<PortfolioData['contact'] | null> {
    return this.data$.pipe(
      map(data => data?.contact || null),
      catchError(error => {

        return of(null);
      })
    );
  }

  getSettings(): Observable<PortfolioData['settings'] | null> {
    return this.data$.pipe(
      map(data => data?.settings || null),
      catchError(error => {

        return of(null);
      })
    );
  }
}
