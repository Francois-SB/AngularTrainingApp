import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTrainingsComponent } from './cu-trainings.component';

describe('CuTrainingsComponent', () => {
  let component: CuTrainingsComponent;
  let fixture: ComponentFixture<CuTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
