import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Home } from './home';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';
import { createMockDataService, createMockSeoService } from '../../testing/mocks';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: SeoService, useValue: createMockSeoService() },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
