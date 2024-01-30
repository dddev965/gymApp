import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymExcerciseComponent } from './gym-excercise.component';

describe('GymExcerciseComponent', () => {
  let component: GymExcerciseComponent;
  let fixture: ComponentFixture<GymExcerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymExcerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymExcerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
