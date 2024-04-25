import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  id: any;
  data: any;
  goBacktoprojects: boolean = true;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.dataService.getProjectsById(id).subscribe((data: any) => {
        this.data = data;
        // console.log(data);
      });
    });
  }
}