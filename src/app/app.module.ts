import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprogramsComponent } from './pages/myprograms/myprograms.component';
import { ProgramListItemComponent } from './components/program-list-item/program-list-item.component';
import { ProgramDetailsComponent } from './pages/program-details/program-details.component';
import { PlanListItemComponent } from './components/plan-list-item/plan-list-item.component';
import { SignupComponent } from './pages/signup/signup.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoverComponent } from './components/cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProgramCardComponent,
    ProgramsComponent,
    BannerComponent,
    SubscribeComponent,
    LoginComponent,
    MyprogramsComponent,
    ProgramListItemComponent,
    ProgramDetailsComponent,
    PlanListItemComponent,
    SignupComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
