import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UiReferenceComponent } from './pages/ui-reference/ui-reference.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ui-reference', component: UiReferenceComponent },
      { path: '', redirectTo: '/landing', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/login' }
];
