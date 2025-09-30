import {Routes} from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {LoginComponent} from "../views/login/login.component";
import {AboutComponent} from "../views/about/about.component";
import {RegisterComponent} from "../views/register/register.component";
import {TaskSetupComponent} from "../views/basic-task/task-setup/task-setup.component";
import {TaskWindowComponent} from "../views/basic-task/task-window/task-window.component";



export const ROUTES: Routes = [
  {path: '', component: TaskSetupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'solution', component: TaskWindowComponent},
  {path: 'register', component: RegisterComponent}
];
