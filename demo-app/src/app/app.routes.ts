import { Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form-component/login-form-component';
import { RegisterComponent } from './register-component/register-component';
import { AboutComponent } from './about-component/about-component';
import { ContactsComponent } from './contacts-component/contacts-component';
import { HomeComponent } from './home-component/home-component';
import { ProfileComponent } from './profile/profile-component/profile-component';


export const routes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', component: HomeComponent},

];
