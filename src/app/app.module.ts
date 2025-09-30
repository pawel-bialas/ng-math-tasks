//CoreStuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//MyModules
import {MaterialModule} from "./material/material.module";

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    BasicTaskComponent,
    TaskWindowComponent,
    TaskSetupComponent
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
