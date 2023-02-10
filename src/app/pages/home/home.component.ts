import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
    })
  }
}
