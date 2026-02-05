import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Skill, TimelineItem } from '../../models';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  toolsSkills: Skill[] = [];
  timeline: TimelineItem[] = [];

  private dataService = inject(Data);
  private seoService = inject(SeoService);

  getStarArray(level: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  ngOnInit(): void {
    // Set SEO meta tags for about page
    this.seoService.updateMetaTags({
      title: 'About Me | Manthan Ankolekar - Full Stack Developer',
      description: 'Learn about my journey as a Full Stack Developer, my technical skills in Angular, Node.js, TypeScript, and my professional experience.',
      keywords: 'About Manthan Ankolekar, Skills, Experience, Angular Developer, Node.js Developer, Full Stack Developer',
    });

    this.dataService.getSkills().subscribe(skills => {
      this.frontendSkills = skills?.frontend || [];
      this.backendSkills = skills?.backend || [];
      this.toolsSkills = skills?.tools || [];
    });

    this.dataService.getTimeline().subscribe(timeline => {
      this.timeline = timeline || [];
    });
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('about_interaction', { item_name: name, item_type: type });
  }
}