import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { CrearPage } from '../crear/crear.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },

  {path: 'crear', 
    component: CrearPage
  },

  {path: 'home', 
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
