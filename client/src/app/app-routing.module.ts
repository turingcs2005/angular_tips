import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'md-demo', loadChildren: () => import('./modules/md-demo/md-demo.module').then(m => m.MdDemoModule) },
  { path: 'overlay-demo', loadChildren: () => import('./modules/overlay-demo/overlay-demo.module').then(m => m.OverlayDemoModule) },
  { path: 'portal-demo', loadChildren: () => import('./modules/portal-demo/portal-demo.module').then(m => m.PortalDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
