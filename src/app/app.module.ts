import { StuffComponent } from './components/stuff/stuff.component';
import { WhoisComponent } from './components/whois/whois.component';
import { FaqComponent } from './components/faq/faq.component';
import { Portlet2Component } from './components/portlet2/portlet2.component';
import { Portlet1Component } from './components/portlet1/portlet1.component';
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
