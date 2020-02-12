import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsondatatableComponent } from './jsondatatable/jsondatatable.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  { path:'', component: JsondatatableComponent },
  { path:'', component: LoginformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
