import { StuffComponent } from './components/stuff/stuff.component';
import { WhoisComponent } from './components/whois/whois.component';
import { FaqComponent } from './components/faq/faq.component';
import { AppComponent } from './app.component';
import { Portlet2Component } from './components/portlet2/portlet2.component';
import { Portlet1Component } from './components/portlet1/portlet1.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'portlet1', component: Portlet1Component, children: [
      {path: 'faq', component: FaqComponent},
      {path: 'whois', component: WhoisComponent},
      {path: 'stuff', component: StuffComponent}
    ], outlet: 'portlet1'},
    {path: 'portlet2', component: Portlet2Component, children: [
      {path: 'faq', component: FaqComponent},
      {path: 'whois', component: WhoisComponent},
      {path: 'stuff', component: StuffComponent}
    ], outlet: 'portlet2'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
