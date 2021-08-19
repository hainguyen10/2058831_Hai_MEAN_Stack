import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestMainComponent } from './online-test-main.component';

describe('OnlineTestMainComponent', () => {
  let component: OnlineTestMainComponent;
  let fixture: ComponentFixture<OnlineTestMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTestMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
