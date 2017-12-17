import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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

const appRoutes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'about', component: AboutComponent},
   {path: 'admission', component: AdmissionsComponent},
   {path: 'faculty', component: FacultyComponent},
   {path: 'programs', component: ProgramsComponent},
   {path: 'services', component: ServicesComponent}
];



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
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
