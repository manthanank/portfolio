import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{

  id: any;
  data: any;
  goBacktoprojects: boolean = true;

  constructor(private dataService: DataService,  private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.activatedroute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.dataService.getProjectsById(id).subscribe((data) => {
        this.data = data;
      });
    });
  }
}
