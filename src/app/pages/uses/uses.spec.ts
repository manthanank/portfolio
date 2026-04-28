import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Uses } from './uses';
import { Data } from '../../services/data';
import { SeoService } from '../../services/seo';
import { createMockDataService, createMockSeoService } from '../../testing/mocks';

describe('Uses', () => {
  let component: Uses;
  let fixture: ComponentFixture<Uses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uses],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: SeoService, useValue: createMockSeoService() },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
