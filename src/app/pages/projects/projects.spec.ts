import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Projects } from './projects';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';
import { createMockDataService, createMockSeoService } from '../../testing/mocks';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: SeoService, useValue: createMockSeoService() },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
