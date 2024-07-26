import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DynamicServicesRouteComponent } from './components/dynamic-services-route/dynamic-services-route.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'services',
    title: 'Services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: 'signup',
    title: 'Signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'services/:id',
    title: 'Services',
    component: DynamicServicesRouteComponent,
  },
  {
    path: '**',
    title: 'Not Found',
    component: PageNotFoundComponent,
  },
];
