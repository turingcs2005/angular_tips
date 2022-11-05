import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayDemoComponent } from './overlay-demo.component';

describe('OverlayDemoComponent', () => {
  let component: OverlayDemoComponent;
  let fixture: ComponentFixture<OverlayDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
