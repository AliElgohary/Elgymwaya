import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersDetailsComponent } from './trainers-details.component';

describe('TrainersDetailsComponent', () => {
  let component: TrainersDetailsComponent;
  let fixture: ComponentFixture<TrainersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
