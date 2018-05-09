import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExamComponent } from './pipe-exam.component';

describe('PipeExamComponent', () => {
  let component: PipeExamComponent;
  let fixture: ComponentFixture<PipeExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
