import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/projects/project-details/project-details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsesComponent } from './pages/uses/uses.component';
import { WipComponent } from './pages/wip/wip.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: "full" },
  { path: '', component: HomeComponent },
  {
    path: 'projects', component: ProjectsComponent, children: [
      {
        path: 'project-details/:id', component: ProjectDetailsComponent
      }
    ]
  },
  { path: 'blogs', component: BlogsComponent },
  { path: 'uses', component: UsesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wip', component: WipComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
