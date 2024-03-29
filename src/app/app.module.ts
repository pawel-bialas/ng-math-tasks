//CoreStuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//MyModules
import {MaterialModule} from "./material/material.module";
import {ROUTES} from "./routing/routes";

//Components
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AboutComponent } from './views/about/about.component';
import { RegisterComponent } from './views/register/register.component';
import { BasicTaskComponent } from './views/basic-task/basic-task.component';
import { TaskWindowComponent } from './views/basic-task/task-window/task-window.component';
import { TaskSetupComponent } from './views/basic-task/task-setup/task-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    BasicTaskComponent,
    TaskWindowComponent,
    TaskSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
