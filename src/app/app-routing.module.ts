import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {IedManagementComponent} from './ide-management/ied-management.component';

const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: 'ied-management', component: IedManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
