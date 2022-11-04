import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdDemoRoutingModule } from './md-demo-routing.module';
import { MdDemoComponent } from './md-demo.component';

import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    MdDemoComponent
  ],
  imports: [
    CommonModule,
    MdDemoRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class MdDemoModule { }
