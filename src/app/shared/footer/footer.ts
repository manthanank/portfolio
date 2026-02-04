import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Data } from '../../services/data';
import { SocialLink, ContactMethod } from '../../models';
import { PortfolioData } from '../../services/data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer implements OnInit {
  currentYear = new Date().getFullYear();

  // Observables for dynamic data
  socialLinks$: Observable<SocialLink[]> = new Observable();
  quickLinks$: Observable<PortfolioData['navigation']['menuItems']> = new Observable();
  contactInfo$: Observable<ContactMethod[]> = new Observable();

  private dataService = inject(Data);

  ngOnInit(): void {
    // Load contact data for social links and contact info
    this.dataService.getContact().subscribe(contact => {
      if (contact) {
        this.socialLinks$ = new Observable(observer => {
          observer.next(contact.socialLinks || []);
          observer.complete();
        });

        this.contactInfo$ = new Observable(observer => {
          observer.next(contact.methods || []);
          observer.complete();
        });
      }
    });

    // Load navigation data for quick links
    this.dataService.getNavigation().subscribe(navigation => {
      if (navigation) {
        this.quickLinks$ = new Observable(observer => {
          observer.next(navigation.menuItems || []);
          observer.complete();
        });
      }
    });
  }
}
