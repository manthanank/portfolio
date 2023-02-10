import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesComponent } from './uses.component';

describe('UsesComponent', () => {
  let component: UsesComponent;
  let fixture: ComponentFixture<UsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
