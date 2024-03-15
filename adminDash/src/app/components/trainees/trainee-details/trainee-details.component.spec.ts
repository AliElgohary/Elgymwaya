import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeDetailsComponent } from './trainee-details.component';

describe('TraineeDetailsComponent', () => {
  let component: TraineeDetailsComponent;
  let fixture: ComponentFixture<TraineeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraineeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraineeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
