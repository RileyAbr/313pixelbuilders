import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTopLogoComponent } from './mobile-top-logo.component';

describe('MobileTopLogoComponent', () => {
  let component: MobileTopLogoComponent;
  let fixture: ComponentFixture<MobileTopLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTopLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTopLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
