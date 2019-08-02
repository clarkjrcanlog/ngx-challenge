import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChallengeComponent } from './task-challenge.component';

describe('TaskChallengeComponent', () => {
  let component: TaskChallengeComponent;
  let fixture: ComponentFixture<TaskChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
