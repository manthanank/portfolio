import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';
import { Data } from '../../services/data';
import { Theme } from '../../services/theme';
import { createMockDataService, createMockThemeService } from '../../testing/mocks';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideRouter([]),
        { provide: Data, useValue: createMockDataService() },
        { provide: Theme, useValue: createMockThemeService() },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
