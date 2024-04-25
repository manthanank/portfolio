import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private metaService: Meta) {
  }

  ngOnInit() {
    this.metaService.addTag({ name: 'description', content: "This is my personal portfolio" });
    this.metaService.addTag({ rel: 'canonical', href: 'https://manthanank.web.app' });
    this.metaService.addTag({ name: 'robots', content: 'index,follow' });
    this.metaService.addTag({ property: 'og:title', content: 'Portfolio' });
    this.metaService.addTag({ name: 'author', content: 'Manthan Ankolekar' });
    this.metaService.addTag({ name: 'twitter:title', content: 'Manthan Ankolekar' });
    this.metaService.addTag({ name: 'twitter:description', content: 'Check out my Twitter!.' });
    this.metaService.addTag({ name: 'twitter:image', content: 'https://twitter.com/manthan_ank/photo' });
  }
}
