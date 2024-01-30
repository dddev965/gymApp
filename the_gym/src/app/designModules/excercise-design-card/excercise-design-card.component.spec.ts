import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseDesignCardComponent } from './excercise-design-card.component';

describe('ExcerciseDesignCardComponent', () => {
  let component: ExcerciseDesignCardComponent;
  let fixture: ComponentFixture<ExcerciseDesignCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcerciseDesignCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcerciseDesignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
