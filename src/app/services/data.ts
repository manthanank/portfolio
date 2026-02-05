import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { shareReplay, Observable, BehaviorSubject, catchError, map, of, from, switchMap } from 'rxjs';
import { ProjectCategory, Project, Skill, TimelineItem, UseCategory, UseItem, ContactMethod, SocialLink } from '../models';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { RemoteConfig, getValue, fetchAndActivate } from '@angular/fire/remote-config';
import { Analytics, logEvent } from '@angular/fire/analytics';

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

  private firestore = inject(Firestore);
  private remoteConfig = inject(RemoteConfig);
  private analytics = inject(Analytics);

  constructor(private http: HttpClient) {
    this.loadData();
    this.initRemoteConfig();
  }

  private async initRemoteConfig() {
    try {
      await fetchAndActivate(this.remoteConfig);
    } catch (error) {
      console.error('Remote Config fetch failed', error);
    }
  }

  private loadData(): void {
    this.http.get<PortfolioData>(this.dataUrl).pipe(
      catchError(error => {
        console.error('Error loading local data', error);
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
    const personalDoc = doc(this.firestore, 'metadata', 'personal');
    return (docData(personalDoc) as Observable<PortfolioData['personal']>).pipe(
      catchError(() => of(null)),
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
    const projectsCol = collection(this.firestore, 'projects');
    return collectionData(projectsCol, { idField: 'id' }) as Observable<Project[]>;
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
    try {
      const typeSpeed = getValue(this.remoteConfig, 'typeSpeed').asNumber();
      const deleteSpeed = getValue(this.remoteConfig, 'deleteSpeed').asNumber();
      const pauseTime = getValue(this.remoteConfig, 'pauseTime').asNumber();

      if (typeSpeed > 0 && deleteSpeed > 0 && pauseTime > 0) {
        return of({
          typingAnimation: {
            typeSpeed,
            deleteSpeed,
            pauseTime
          }
        });
      }
    } catch (e) {
      // Remote config might not be initialized or keys missing
    }

    return this.data$.pipe(map(data => data?.settings || null));
  }

  logEvent(eventName: string, params?: { [key: string]: any }) {
    logEvent(this.analytics, eventName, params);
  }
}
