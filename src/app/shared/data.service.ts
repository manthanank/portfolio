import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any>{
    return this.http.get<any>(BACKEND_URL + '/blogs');
  }
  getProjects(): Observable<any>{
    return this.http.get<any>(BACKEND_URL + '/projects');
  }
  getProjectsById(id: any): Observable<any>{
    return this.http.get<any>(BACKEND_URL + '/projects/' + id);
  }

  goBacktoprojects = new BehaviorSubject(false);

}
