import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtBrResumeComponent } from './pt-br-resume.component';

describe('PtBrResumeComponent', () => {
  let component: PtBrResumeComponent;
  let fixture: ComponentFixture<PtBrResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtBrResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtBrResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
