import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uses } from './uses';

describe('Uses', () => {
  let component: Uses;
  let fixture: ComponentFixture<Uses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uses]
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
