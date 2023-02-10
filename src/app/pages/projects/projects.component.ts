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
  
  constructor(private http: HttpClient, private dataService: DataService, private router: Router){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
    });

    this.dataService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }
  showDetails(item: any) {
    this.router.navigate(['projects', item._id]);
  }
}
