import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewClientComponent } from './new-client/new-client.component';
import { HomeComponent } from './home/home.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { NewEquipComponent } from './new-equip/new-equip.component';
import { ViewEquipsComponent } from './view-equips/view-equips.component';
import { NewServComponent } from './new-serv/new-serv.component';
import { ViewServComponent } from './view-serv/view-serv.component';
import { PrintServComponent } from './print-serv/print-serv.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component: HomeComponent},
  {path:'newclient', component: NewClientComponent },
  {path:'editclient/:id', component: NewClientComponent },
  {path:'viewclient', component: ViewClientsComponent },
  {path:'newcontact', component: NewContactComponent },
  {path:'editcontact/:id', component: NewContactComponent },
  {path:'viewcontact', component: ViewContactComponent },
  {path:'newequip', component: NewEquipComponent },
  {path:'editequip/:id', component: NewEquipComponent },
  {path:'viewequips', component: ViewEquipsComponent },
  {path:'newserv',component:NewServComponent},
  {path:'viewserv',component:ViewServComponent},
  {path:'printserv/:id', component:PrintServComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
