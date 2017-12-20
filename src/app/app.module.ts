import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ProgramsComponent } from './programs/programs.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from './api.config';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdmissionsComponent,
    FacultyComponent,
    ProgramsComponent,
    ServicesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [LoginService,
    AuthGuard,
    AuthenticationService,
    UserService,
    { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
