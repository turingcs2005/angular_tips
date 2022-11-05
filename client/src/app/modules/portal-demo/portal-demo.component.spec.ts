import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDemoComponent } from './portal-demo.component';

describe('PortalDemoComponent', () => {
  let component: PortalDemoComponent;
  let fixture: ComponentFixture<PortalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
