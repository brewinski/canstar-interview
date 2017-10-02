import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercardWidgetComponent } from './usercard-widget.component';

describe('UsercardWidgetComponent', () => {
  let component: UsercardWidgetComponent;
  let fixture: ComponentFixture<UsercardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
