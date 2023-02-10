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
  constructor(private http: HttpClient, private dataService: DataService){}

  ngOnInit(){
    this.dataService.getBlogs().subscribe(data => {
      this.blogs = data;
    })
  }
}
