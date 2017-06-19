import { StuffComponent } from './components/stuff/stuff.component';
import { WhoisComponent } from './components/whois/whois.component';
import { FaqComponent } from './components/faq/faq.component';
import { Portlet2Component } from './components/portlet2/portlet2.component';
import { Portlet1Component } from './components/portlet1/portlet1.component';
import { Portlet2Module } from './components/portlet2/portlet2-module';
import { Portlet1Module } from './components/portlet1/portlet1-module';
import { Portlet2RoutingModule } from './components/portlet2/portlet2-routing.module';
import { Portlet1RoutingModule } from './components/portlet1/portlet1-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, Portlet1Component, Portlet2Component, FaqComponent, WhoisComponent, StuffComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
