import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';

@Component({
  selector: 'app-project',
  imports: [RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  private route = inject(ActivatedRoute);
  private dataService = inject(Data);
  private seoService = inject(SeoService);

  slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') || '')),
    { initialValue: '' }
  );

  projectsData = toSignal(this.dataService.getProjects(), { initialValue: null });

  project = computed(() => {
    const slug = this.slug();
    const items = this.projectsData()?.items || [];
    return items.find((p) => p.slug === slug) || null;
  });

  constructor() {
    // Update SEO when project changes
    effect(() => {
      const p = this.project();
      if (!p) return;
      this.seoService.updateMetaTags({
        title: `${p.title} | Case Study - Manthan Ankolekar`,
        description: p.fullDescription || p.description,
        keywords: `Case Study, ${p.technologies.join(', ')}`,
        url: `https://manthanank.web.app/projects/${p.slug}`,
        type: 'article',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: p.title,
          description: p.fullDescription || p.description,
          url: `https://manthanank.web.app/projects/${p.slug}`,
          creator: {
            '@type': 'Person',
            name: 'Manthan Ankolekar',
          },
          keywords: p.technologies.join(', '),
        },
      });
    });
  }

  logClick(name: string, type: string) {
    this.dataService.logEvent('project_case_study_interaction', { item_name: name, item_type: type });
  }
}

