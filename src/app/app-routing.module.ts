import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './pages/personal/personal.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'home',   component: HomeComponent },
  { path: 'personal',   component: PersonalComponent },
  { path: 'professional',   component: ProfessionalComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
