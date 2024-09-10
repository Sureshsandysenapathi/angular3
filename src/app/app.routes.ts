import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import for routing
import { FormsModule } from '@angular/forms'; // Import FormsModule to handle forms
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path: 'navbar',
    loadComponent: () => import('./navbar/navbar.component').then(c => c.NavbarComponent) // Lazy load the standalone component
  },
  { path: '', redirectTo: '/navbar', pathMatch: 'full' }
];


