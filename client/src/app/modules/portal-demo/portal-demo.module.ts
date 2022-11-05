import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalDemoRoutingModule } from './portal-demo-routing.module';
import { PortalDemoComponent } from './portal-demo.component';
import { SharedModule } from '../shared/shared.module';
import { Tooltip1Component } from './portals/tooltip1/tooltip1.component';


@NgModule({
  declarations: [
    PortalDemoComponent,
    Tooltip1Component
  ],
  imports: [
    CommonModule,
    PortalDemoRoutingModule,
    SharedModule
  ]
})
export class PortalDemoModule { }
