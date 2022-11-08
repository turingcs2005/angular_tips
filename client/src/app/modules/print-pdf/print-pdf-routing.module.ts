import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintPdfComponent } from './print-pdf.component';

const routes: Routes = [{ path: '', component: PrintPdfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintPdfRoutingModule { }
