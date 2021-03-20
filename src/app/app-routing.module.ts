import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularformComponent } from './angularform/angularform.component';
import { HomeComponent } from './home/home.component';
import { ReactformComponent } from './reactform/reactform.component';
import { RegisterComponent } from './register/register.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [

  {
    path:'userform',
    component:UserformComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'angularform',
    component:AngularformComponent
  },
  {
    path:'reactform',
    component:ReactformComponent
  }


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
