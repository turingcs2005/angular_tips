import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayDemoRoutingModule } from './overlay-demo-routing.module';
import { OverlayDemoComponent } from './overlay-demo.component';
import { Tooltip1Component } from './portals/tooltip1/tooltip1.component';
import { SharedModule } from '../shared/shared.module';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

@NgModule({
  declarations: [
    OverlayDemoComponent,
    Tooltip1Component
  ],
  imports: [
    CommonModule,
    OverlayDemoRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class OverlayDemoModule { }
