import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tooltip1Component } from './tooltip1.component';

describe('Tooltip1Component', () => {
  let component: Tooltip1Component;
  let fixture: ComponentFixture<Tooltip1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tooltip1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tooltip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
