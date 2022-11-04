import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDemoComponent } from './md-demo.component';

describe('MdDemoComponent', () => {
  let component: MdDemoComponent;
  let fixture: ComponentFixture<MdDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
