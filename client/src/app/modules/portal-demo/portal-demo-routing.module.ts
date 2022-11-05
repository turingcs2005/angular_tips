import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalDemoComponent } from './portal-demo.component';

const routes: Routes = [{ path: '', component: PortalDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalDemoRoutingModule { }
