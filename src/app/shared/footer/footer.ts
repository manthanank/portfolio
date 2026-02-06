import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private dataService = inject(Data);
  
  currentYear = new Date().getFullYear();

  // Signals for dynamic data
  socialLinks = toSignal(this.dataService.getContact().pipe(
    map(contact => contact?.socialLinks || [])
  ), { initialValue: [] });

  quickLinks = toSignal(this.dataService.getNavigation().pipe(
    map(nav => nav?.menuItems || [])
  ), { initialValue: [] });

  contactInfo = toSignal(this.dataService.getContact().pipe(
    map(contact => contact?.methods || [])
  ), { initialValue: [] });

  personalInfo = toSignal(this.dataService.getPersonalInfo(), { initialValue: null });
}