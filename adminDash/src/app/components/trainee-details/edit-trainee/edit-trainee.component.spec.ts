import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTraineeComponent } from './edit-trainee.component';

describe('EditTraineeComponent', () => {
  let component: EditTraineeComponent;
  let fixture: ComponentFixture<EditTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTraineeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
