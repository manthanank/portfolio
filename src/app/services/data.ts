import { Injectable } from '@angular/core';
import { shareReplay, Observable, BehaviorSubject, map, of } from 'rxjs';
import { ProjectCategory, Project, Skill, TimelineItem, UseCategory, UseItem, ContactMethod, SocialLink } from '../models';

export interface WorkProject {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: string;
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    roles: string[];
    resumeUrl?: string;
    calendlyUrl?: string;
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
  workProjects: WorkProject[];
  education: Education[];
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
  hireMe?: {
    headline: string;
    targetRoles: string[];
    availability: string;
    locationPreference: string;
    strengths: string[];
    highlights: Array<{ label: string; value: string }>;
    recruiterSummary?: {
      experience: string;
      stack: string;
      location: string;
      noticePeriod: string;
      preferredRoles: string[];
    };
    testimonials?: Testimonial[];
  };
  now?: {
    intro: string;
    openTo: string[];
    learning: string[];
    building: string[];
    recently: string[];
    updatedAt: string;
  };
  blog?: {
    posts: BlogPost[];
  };
  settings: {
    typingAnimation: {
      typeSpeed: number;
      deleteSpeed: number;
      pauseTime: number;
    };
  };
}

import { PORTFOLIO_DATA } from '../data/portfolio';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private dataSubject = new BehaviorSubject<PortfolioData | null>(PORTFOLIO_DATA);
  private data$ = this.dataSubject.asObservable().pipe(shareReplay(1));

  constructor() { }

  getData(): Observable<PortfolioData | null> {
    return this.data$;
  }

  getPersonalInfo(): Observable<PortfolioData['personal'] | null> {
    return this.data$.pipe(map(data => data?.personal || null));
  }

  getNavigation(): Observable<PortfolioData['navigation'] | null> {
    return this.data$.pipe(map(data => data?.navigation || null));
  }

  getProjects(): Observable<PortfolioData['projects'] | null> {
    return this.data$.pipe(map(data => data?.projects || null));
  }

  getFirestoreProjects(): Observable<Project[]> {
    return of([]);
  }

  getWorkProjects(): Observable<WorkProject[]> {
    return this.data$.pipe(map(data => data?.workProjects || []));
  }

  getEducation(): Observable<Education[]> {
    return this.data$.pipe(map(data => data?.education || []));
  }

  getSkills(): Observable<PortfolioData['skills'] | null> {
    return this.data$.pipe(map(data => data?.skills || null));
  }

  getTimeline(): Observable<PortfolioData['timeline'] | null> {
    return this.data$.pipe(map(data => data?.timeline || null));
  }

  getUses(): Observable<PortfolioData['uses'] | null> {
    return this.data$.pipe(map(data => data?.uses || null));
  }

  getContact(): Observable<PortfolioData['contact'] | null> {
    return this.data$.pipe(map(data => data?.contact || null));
  }

  getHireMe(): Observable<PortfolioData['hireMe'] | null> {
    return this.data$.pipe(map(data => data?.hireMe || null));
  }

  getNow(): Observable<PortfolioData['now'] | null> {
    return this.data$.pipe(map(data => data?.now || null));
  }

  getBlog(): Observable<PortfolioData['blog'] | null> {
    return this.data$.pipe(map(data => data?.blog || null));
  }

  getSettings(): Observable<PortfolioData['settings'] | null> {
    return this.data$.pipe(map(data => data?.settings || null));
  }

  logEvent(eventName: string, params?: { [key: string]: any }) {
    void eventName;
    void params;
  }
}
