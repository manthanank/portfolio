import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  data: any;
  projects: any;
  isLoading = false;
  
  constructor(private http: HttpClient, private dataService: DataService, private route: Router){}

  ngOnInit(){
    this.isLoading = true;
    this.dataService.getProjects().subscribe(data => {
      this.isLoading = false;
      this.projects = data;
    })
  }
  showDetails(item: any) {
    this.route.navigate(['project-details', item._id]);
  }
}
