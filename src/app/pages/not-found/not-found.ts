import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: '404 - Page Not Found | Manthan Ankolekar',
      description: 'The page you are looking for does not exist. Return to the homepage to explore my portfolio.',
    });
    this.seoService.setRobots('noindex, nofollow');
  }
}