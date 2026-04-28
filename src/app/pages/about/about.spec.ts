import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { About } from './about';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';
import { createMockDataService, createMockSeoService } from '../../testing/mocks';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: SeoService, useValue: createMockSeoService() },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
