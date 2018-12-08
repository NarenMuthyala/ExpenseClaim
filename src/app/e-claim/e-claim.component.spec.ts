import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EClaimComponent } from './e-claim.component';

describe('EClaimComponent', () => {
  let component: EClaimComponent;
  let fixture: ComponentFixture<EClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
