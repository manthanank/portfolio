import { inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
import { shareReplay, Observable, BehaviorSubject, catchError, map, of, from, switchMap } from 'rxjs';
import { ProjectCategory, Project, Skill, TimelineItem, UseCategory, UseItem, ContactMethod, SocialLink } from '../models';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { RemoteConfig, getValue, fetchAndActivate } from '@angular/fire/remote-config';
import { Analytics, logEvent } from '@angular/fire/analytics';

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
  private injector = inject(Injector);
  private dataSubject = new BehaviorSubject<PortfolioData | null>(PORTFOLIO_DATA);
  private data$ = this.dataSubject.asObservable().pipe(shareReplay(1));

  private firestore = inject(Firestore);
  private remoteConfig = inject(RemoteConfig);
  private analytics = inject(Analytics);

  // --- Reactive Data Streams (Initialized in Injection Context) ---

  // Personal Info from Firestore
  private personalInfoDoc$ = (docData(doc(this.firestore, 'metadata', 'personal')) as Observable<PortfolioData['personal']>).pipe(
    catchError(() => of(null)),
    shareReplay(1)
  );

  // Firestore Projects Collection
  private firestoreProjects$ = (collectionData(collection(this.firestore, 'projects'), { idField: 'id' }) as Observable<Project[]>).pipe(
    catchError(() => of([])),
    shareReplay(1)
  );

  // Remote Config Settings
  private remoteSettings$ = from(fetchAndActivate(this.remoteConfig)).pipe(
    map(() => runInInjectionContext(this.injector, () => {
      try {
        const typeSpeed = getValue(this.remoteConfig, 'typeSpeed').asNumber();
        const deleteSpeed = getValue(this.remoteConfig, 'deleteSpeed').asNumber();
        const pauseTime = getValue(this.remoteConfig, 'pauseTime').asNumber();

        if (typeSpeed > 0 && deleteSpeed > 0 && pauseTime > 0) {
          return {
            typingAnimation: { typeSpeed, deleteSpeed, pauseTime }
          } as PortfolioData['settings'];
        }
      } catch (e) { }
      return null;
    })),
    catchError(() => of(null)),
    shareReplay(1)
  );

  constructor() { }

  getData(): Observable<PortfolioData | null> {
    return this.data$;
  }

  getPersonalInfo(): Observable<PortfolioData['personal'] | null> {
    return this.personalInfoDoc$.pipe(
      switchMap(fsData => fsData ? of(fsData) : this.data$.pipe(map(data => data?.personal || null)))
    );
  }

  getNavigation(): Observable<PortfolioData['navigation'] | null> {
    return this.data$.pipe(map(data => data?.navigation || null));
  }

  getProjects(): Observable<PortfolioData['projects'] | null> {
    return this.data$.pipe(map(data => data?.projects || null));
  }

  getFirestoreProjects(): Observable<Project[]> {
    return this.firestoreProjects$;
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

  getSettings(): Observable<PortfolioData['settings'] | null> {
    return this.remoteSettings$.pipe(
      switchMap(settings => settings ? of(settings) : this.data$.pipe(map(data => data?.settings || null)))
    );
  }

  logEvent(eventName: string, params?: { [key: string]: any }) {
    runInInjectionContext(this.injector, () => {
      logEvent(this.analytics, eventName, params);
    });
  }
}
