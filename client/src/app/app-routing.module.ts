import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsLoginComponent } from './auth/components/cs-login/cs-login.component';
const routes: Routes = [
  {path:'', component : CsLoginComponent}
  // {path:'dashboard', loadChildren:'app/modules/main/main.module#MainModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
