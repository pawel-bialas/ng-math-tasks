import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSetupComponent } from './task-setup.component';

describe('TaskSetupComponent', () => {
  let component: TaskSetupComponent;
  let fixture: ComponentFixture<TaskSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
