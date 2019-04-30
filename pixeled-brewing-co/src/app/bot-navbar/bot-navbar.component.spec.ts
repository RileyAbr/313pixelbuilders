import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotNavbarComponent } from './bot-navbar.component';

describe('BotNavbarComponent', () => {
  let component: BotNavbarComponent;
  let fixture: ComponentFixture<BotNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
