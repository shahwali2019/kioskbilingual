import { KioskComponent } from './components/kiosk.component';
import { RegisterComponent } from './register/register.component';
import { HelpmenuComponent } from './helpmenu/helpmenu.component';
import { HomeComponent } from './home/home.component';

import {Routes }from '@angular/router';



export const appRoute:Routes = [
{
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HelpmenuComponent
  },
  {
    path: 'h',
    component: HomeComponent
  },
  {

    path: 'kiosk',
    component: KioskComponent
  },
{
  path: 'user',
  component: RegisterComponent

  }];



