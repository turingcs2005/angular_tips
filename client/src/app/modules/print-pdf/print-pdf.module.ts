import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintPdfRoutingModule } from './print-pdf-routing.module';
import { PrintPdfComponent } from './print-pdf.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrintPdfComponent
  ],
  imports: [
    CommonModule,
    PrintPdfRoutingModule,
    SharedModule
  ]
})
export class PrintPdfModule { }
