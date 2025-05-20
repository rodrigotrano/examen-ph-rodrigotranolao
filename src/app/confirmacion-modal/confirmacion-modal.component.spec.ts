import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmacionModalComponent } from './confirmacion-modal.component';

describe('ConfirmacionModalComponent', () => {
  let component: ConfirmacionModalComponent;
  let fixture: ComponentFixture<ConfirmacionModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmacionModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
