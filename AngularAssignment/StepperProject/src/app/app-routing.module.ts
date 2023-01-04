import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

const routes: Routes = [
  { path: 'register-component', component:RegisterComponentComponent },
  { path: 'login-component', component:LoginComponentComponent },
  { path: 'home-component', component:HomeComponentComponent },
  { path: 'about-component', component:AboutComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
