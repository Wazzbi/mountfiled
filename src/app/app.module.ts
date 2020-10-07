import { IntroductionComponent } from './containers/introduction/introduction.component';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { ActionsComponent } from './containers/actions/actions.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionsComponent,
    ContactsComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
