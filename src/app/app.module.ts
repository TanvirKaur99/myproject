import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AngularformComponent } from './angularform/angularform.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ReactformComponent } from './reactform/reactform.component';
import {MatIconModule} from '@angular/material/icon';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgelseifComponent } from './ngelseif/ngelseif.component';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    RegisterComponent,
    HomeComponent,
    AngularformComponent,
    ReactformComponent,
    DemodirectivesComponent,
    NgifelseComponent,
    NgelseifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
