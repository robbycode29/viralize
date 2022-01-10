import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ThreemodelComponent } from './threemodel/threemodel.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './dashboard/loginpage/loginpage.component';
import { LoginComponent } from './dashboard/loginpage/login/login.component';
import { SignupComponent } from './dashboard/loginpage/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ThreemodelComponent,
    ContactComponent,
    FooterComponent,
    LegalComponent,
    DashboardComponent,
    LoginpageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
