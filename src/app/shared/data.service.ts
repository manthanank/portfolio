import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://backend-app-8ev9.onrender.com/api'

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any>{
    return this.http.get<any>(this.url + '/blogs');
  }
  getProjects(): Observable<any>{
    return this.http.get<any>(this.url + '/projects');
  }
  getProjectsById(id: any): Observable<any>{
    return this.http.get<any>(this.url + '/projects/' + id);
  }

  goBacktoprojects = new BehaviorSubject(false);

}
