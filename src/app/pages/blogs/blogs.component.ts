import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataService } from '../../shared/services/data.service';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgIf, NgFor, MatProgressSpinnerModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent implements OnInit {

  data: any;
  blogs: any;
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getBlogs().subscribe(data => {
      this.isLoading = false;
      this.blogs = data;
    })
  }
}
