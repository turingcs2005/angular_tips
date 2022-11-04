import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdDemoComponent } from './md-demo.component';

const routes: Routes = [{ path: '', component: MdDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdDemoRoutingModule { }
