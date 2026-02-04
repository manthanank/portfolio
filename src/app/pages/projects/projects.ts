import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Data } from '../../services/data';
import { Project, ProjectCategory } from '../../models';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects implements OnInit {
  selectedCategory = signal('all');
  projects = signal<Project[]>([]);
  categories = signal<ProjectCategory[]>([]);

  private dataService = inject(Data);

  get filteredProjects(): Project[] {
    const currentCategory = this.selectedCategory();
    const currentProjects = this.projects();

    if (currentCategory === 'all') {
      return currentProjects;
    }
    if (currentCategory === 'featured') {
      return currentProjects.filter(project => project.featured);
    }
    return currentProjects.filter(project => project.category === currentCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((projectsData: { items: Project[]; categories: ProjectCategory[] } | null) => {
      if (projectsData) {
        this.projects.set(projectsData.items || []);
        this.categories.set(projectsData.categories || []);
      }
    });
  }
}
