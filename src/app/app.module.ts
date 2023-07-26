import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { NewEquipComponent } from './new-equip/new-equip.component';
import { ViewEquipsComponent } from './view-equips/view-equips.component';
import { NewServComponent } from './new-serv/new-serv.component';
import { ViewServComponent } from './view-serv/view-serv.component';
import { PrintServComponent } from './print-serv/print-serv.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserComponent,
    NewClientComponent,
    ViewClientsComponent,
    NewContactComponent,
    ViewContactComponent,
    NewEquipComponent,
    ViewEquipsComponent,
    NewServComponent,
    ViewServComponent,
    PrintServComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
