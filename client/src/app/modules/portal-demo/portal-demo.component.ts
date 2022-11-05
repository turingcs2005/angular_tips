import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Tooltip1Component } from './portals/tooltip1/tooltip1.component';

@Component({
  selector: 'app-portal-demo',
  templateUrl: './portal-demo.component.html',
  styleUrls: ['./portal-demo.component.scss']
})
export class PortalDemoComponent implements OnInit, AfterViewInit {

  componentPortal: ComponentPortal<Tooltip1Component>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(Tooltip1Component);
  }

}
