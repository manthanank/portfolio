import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, NgFor, MatProgressSpinnerModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  data: any;
  projects: any;
  isLoading = false;

  constructor(private http: HttpClient, private dataService: DataService, private route: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getProjects().subscribe(data => {
      this.isLoading = false;
      this.projects = data;
    })
  }
  showDetails(item: any) {
    this.route.navigate(['/projects', item.id]);
  }
}

