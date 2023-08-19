import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'homescreen', component: HomescreenComponent },
  { path: '' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
