import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientsComponent } from './pages/BackOffice/dashboard-clients/dashboard-clients.component';
import { DashboardHomeComponent } from './pages/BackOffice/dashboard-home/dashboard-home.component';
import { DashboardProgramsComponent } from './pages/BackOffice/dashboard-programs/dashboard-programs.component';
import { DashboardStatisticsComponent } from './pages/BackOffice/dashboard-statistics/dashboard-statistics.component';
import { DashboardSubscriptionsComponent } from './pages/BackOffice/dashboard-subscriptions/dashboard-subscriptions.component';
import { DashboardComponent } from './pages/BackOffice/dashboard/dashboard.component';
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
  {path:'signup', component:SignupComponent},
  /* Dashboard */
  {path:'dashboard', component:DashboardComponent
  ,children:[
    {
      path:'clients',
      component:DashboardClientsComponent
    },
    {
      path:'programs',
      component:DashboardProgramsComponent
    },
    {
      path:'subscriptions',
      component:DashboardSubscriptionsComponent
    },
    {
      path:'Statistics',
      component:DashboardStatisticsComponent
    },
    {
      path:'',
      component:DashboardHomeComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
