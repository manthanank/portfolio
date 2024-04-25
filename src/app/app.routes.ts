import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { WipComponent } from './pages/wip/wip.component';
import { UsesComponent } from './pages/uses/uses.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { EducationComponent } from './pages/education/education.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: "full" },
    { path: '', component: HomeComponent },
    {
        path: 'projects', component: ProjectsComponent
    },
    {
        path: 'projects/:id', component: ProjectDetailsComponent
    },
    { path: 'uses', component: UsesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'wip', component: WipComponent },
    { path: '**', component: ErrorComponent }
];
