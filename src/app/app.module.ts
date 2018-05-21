import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {CustomMaterialModule} from './custommodules/custom-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { TabNavbarComponent } from './components/tab-navbar/tab-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    SearchComponent,
    TabNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomMaterialModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
