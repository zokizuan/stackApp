import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChildComponent } from './display-child.component';

describe('DisplayChildComponent', () => {
  let component: DisplayChildComponent;
  let fixture: ComponentFixture<DisplayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
