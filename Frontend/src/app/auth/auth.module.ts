import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path:'auth', component: AuthComponent,
  children:[
    {path:'login', component:LoginPageComponent},
    {path:'register', component:RegisterPageComponent}
  ]}
 
]
@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
