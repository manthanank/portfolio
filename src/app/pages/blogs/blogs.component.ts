import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  data: any;
  blogs: any;
  isLoading = false;

  constructor(private http: HttpClient, private dataService: DataService){}

  ngOnInit(){
    this.isLoading = true;
    this.dataService.getBlogs().subscribe(data => {
      this.isLoading = false;
      this.blogs = data;
    })
  }
}
