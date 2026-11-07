import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'projects',pathMatch:'full'},
    {path:'projects',loadComponent:()=> import('./pages/projects/projects').then(m=>m.Projects)},
    {path:'experience',loadComponent:()=> import('./pages/experience/experience').then(m=>m.Experience)},
    {path:'certifications',loadComponent:()=> import('./pages/certifications/certifications').then(m=>m.Certifications)},
    {path:'tech-stack',loadComponent:()=> import('./pages/tech-stack/tech-stack').then(m=>m.TechStack)},
    
  
];
