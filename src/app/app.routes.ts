import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component'; // Example project component
import { HomeComponent } from './home/home.component'; 
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: ProjectComponent },
  { path: 'about', component: AboutUsComponent },
  // other routes.../about
];
