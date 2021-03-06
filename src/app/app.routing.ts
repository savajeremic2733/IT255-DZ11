import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { AddGameComponent } from './addgame/addgame.component';
import { AddClothingComponent } from './addclothing/addclothing.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'addgame', component: AddGameComponent},
  { path: 'addclothing', component: AddClothingComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
