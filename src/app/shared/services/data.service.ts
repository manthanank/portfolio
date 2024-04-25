import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private blogs: any[] = [
    { id: 1, title: 'Building a Simple Email Sending API with Express and Node.js', link: 'https://dev.to/manthanank/building-a-simple-email-sending-api-with-express-and-nodejs-eln' },
    { id: 2, title: 'Simplifying Image Uploads and Deletion with Node.js and Cloudinary', link: 'https://dev.to/manthanank/simplifying-image-uploads-and-deletion-with-nodejs-and-cloudinary-e6p' },
  ];

  private projects: any[] = [
    { id: 1, name: 'Covid19 Tracker App', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi blanditiis nisi reprehenderit quibusdam eos veritatis commodi? Autem aliquid maxime officiis quam blanditiis, ipsa est velit? Eum quo veniam rem.', previewurl: '', codeurl: '' },
    { id: 2, name: 'Food Store App', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi blanditiis nisi reprehenderit quibusdam eos veritatis commodi? Autem aliquid maxime officiis quam blanditiis, ipsa est velit? Eum quo veniam rem.', previewurl: '', codeurl: '' },
    { id: 3, name: 'Upload Post App', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi blanditiis nisi reprehenderit quibusdam eos veritatis commodi? Autem aliquid maxime officiis quam blanditiis, ipsa est velit? Eum quo veniam rem.', previewurl: '', codeurl: '' },
  ];

  goBacktoprojects = new BehaviorSubject(false);

  constructor() { }

  getBlogs(): Observable<any[]> {
    return new Observable(observer => {
      observer.next(this.blogs);
      observer.complete();
    });
  }

  getProjects(): Observable<any[]> {
    return new Observable(observer => {
      observer.next(this.projects);
      observer.complete();
    });
  }

  getProjectsById(id: any): Observable<any> {
    const project = this.projects.find(p => p.id == id);
  
    if (project) {
      return new Observable(observer => {
        observer.next(project);
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        observer.error('Project not found');
      });
    }
  }
}
