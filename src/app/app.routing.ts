import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProgramsComponent } from './programs/programs.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { CreativeWritingComponent } from './creative-writing/creative-writing.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'admission', component: AdmissionsComponent },
    { path: 'faculty', component: FacultyComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'courses', component: ProgramsComponent },
    { path: 'creative-writing', component: CreativeWritingComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);

 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: '', component: HomeComponent, pathMatch: 'full'},
