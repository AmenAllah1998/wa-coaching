import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprogramsComponent } from './pages/myprograms/myprograms.component';
import { ProgramDetailsComponent } from './pages/program-details/program-details.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'programs', component:ProgramsComponent},
  {path:'programs/subscribe', component:SubscribeComponent},
  {path:'myaccount/myprograms', component:MyprogramsComponent},
  {path:'myaccount/myprograms/detail', component:ProgramDetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
