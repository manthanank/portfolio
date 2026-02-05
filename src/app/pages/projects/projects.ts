import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Data } from '../../services/data';
import { Project, ProjectCategory } from '../../models';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  selectedCategory = signal('all');
  projects = signal<Project[]>([]);
  categories = signal<ProjectCategory[]>([]);

  private dataService = inject(Data);
  private seoService = inject(SeoService);

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
    this.dataService.logEvent('project_category_select', { category });
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('project_interaction', { item_name: name, item_type: type });
  }

  ngOnInit(): void {
    // Set SEO meta tags for projects page
    this.seoService.updateMetaTags({
      title: 'Projects | Manthan Ankolekar - Full Stack Developer',
      description: 'Explore my portfolio of web development projects including Angular applications, Node.js backends, and full-stack solutions.',
      keywords: 'Projects, Portfolio, Angular Projects, Node.js Projects, Web Applications, Full Stack Projects, GitHub',
    });

    this.dataService.getProjects().subscribe((projectsData: { items: Project[]; categories: ProjectCategory[] } | null) => {
      if (projectsData) {
        this.projects.set(projectsData.items || []);
        this.categories.set(projectsData.categories || []);
      }
    });
  }
}