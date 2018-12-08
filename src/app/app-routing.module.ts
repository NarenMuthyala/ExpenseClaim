import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EClaimComponent } from './e-claim/e-claim.component';

const routes: Routes = [
  {path: '', redirectTo: 'eclaim', pathMatch: 'full'},
  {path: 'eclaim', component: EClaimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
