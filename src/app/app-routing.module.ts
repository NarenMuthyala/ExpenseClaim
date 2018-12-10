import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EClaimComponent } from './e-claim/e-claim.component';
import { SuccessComponent } from './success/success.component'

const routes: Routes = [
  {path: '', redirectTo: 'eclaim', pathMatch: 'full'},
  {path: 'eclaim', component: EClaimComponent},
  {path: 'claimsuccess', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
