import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skill, TimelineItem } from '../../models';
import { Data } from '../../services/data';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About implements OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  toolsSkills: Skill[] = [];
  timeline: TimelineItem[] = [];

  private dataService = inject(Data);

  getStarArray(level: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  ngOnInit(): void {
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
