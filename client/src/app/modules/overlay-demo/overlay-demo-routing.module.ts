import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayDemoComponent } from './overlay-demo.component';

const routes: Routes = [{ path: '', component: OverlayDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayDemoRoutingModule { }
