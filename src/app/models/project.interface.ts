export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
  /**
   * Optional: richer write-up for a case study page.
   * Keep optional so existing content continues to work.
   */
  caseStudy?: {
    problem?: string;
    whatIOwned?: string[];
    approach?: string[];
    results?: Array<{ label: string; value: string }>;
    role?: string[];
    highlights?: string[];
    metrics?: Array<{ label: string; value: string; detail?: string }>;
    architecture?: string[];
    decisions?: Array<{ title: string; description: string }>;
    links?: Array<{ label: string; url: string }>;
    gallery?: Array<{ src: string; alt: string }>;
  };
}

export interface ProjectCategory {
  id: string;
  name: string;
}
