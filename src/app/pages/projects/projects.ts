import { Component, signal, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Data, WorkProject } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  // --- Reactive Data (Signals) ---
  projectsData = toSignal(this.dataService.getProjects(), { initialValue: null });
  workProjects = toSignal(this.dataService.getWorkProjects(), { initialValue: [] as WorkProject[] });
  selectedCategory = signal('all');

  // --- Derived State ---
  categories = computed(() => this.projectsData()?.categories || []);
  allProjects = computed(() => this.projectsData()?.items || []);

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const projects = this.allProjects();

    if (category === 'all') return projects;
    if (category === 'featured') return projects.filter(p => p.featured);
    return projects.filter(p => p.category === category);
  });

  constructor() {
    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Projects | Manthan Ankolekar - Software Developer',
      description: 'Explore my portfolio of web development projects including Angular applications, Node.js backends, and full-stack solutions.',
      keywords: 'Projects, Portfolio, Angular Projects, Node.js Projects, Web Applications, Full Stack Projects, GitHub',
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.dataService.logEvent('project_category_select', { category });
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('project_interaction', { item_name: name, item_type: type });
  }
}
