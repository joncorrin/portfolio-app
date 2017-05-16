import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLeadFormComponent } from './job-lead-form.component';

describe('JobLeadFormComponent', () => {
  let component: JobLeadFormComponent;
  let fixture: ComponentFixture<JobLeadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobLeadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLeadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
