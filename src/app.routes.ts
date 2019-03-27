import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SpecificPageComponent } from './pages/specific-page/specific-page.component';

const routes: Routes =  [
    {path: '', component: LoginPageComponent},
    {path: 'home-page', component: HomePageComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'specific-page', component: SpecificPageComponent},
];

export const routing = RouterModule.forRoot(routes);
