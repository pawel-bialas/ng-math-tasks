import {Routes} from '@angular/router';
import {HomeComponent} from "../views/home/home.component";
import {LoginComponent} from "../views/login/login.component";
import {AboutComponent} from "../views/about/about.component";



export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
];