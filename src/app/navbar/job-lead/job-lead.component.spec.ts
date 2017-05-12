import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLeadComponent } from './job-lead.component';

describe('JobLeadComponent', () => {
  let component: JobLeadComponent;
  let fixture: ComponentFixture<JobLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
