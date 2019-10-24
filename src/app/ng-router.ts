import { KioskComponent } from './components/kiosk.component';
import { RegisterComponent } from './register/register.component';
import {Routes }from '@angular/router';

export const appRoute:Routes = [
{
  path: '',
  component:KioskComponent
  },
  {

    path: 'kiosk',
    component: KioskComponent
  },
{
  path: 'user',
  component: RegisterComponent

}];
