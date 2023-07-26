import { Component } from '@angular/core';
import { Contacts } from '../interfaces/contacts';
import { ContactsService } from '../services/contacts.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  contact:Contacts[] = [];

  constructor(private contactSrv: ContactsService) {
    this.contactSrv.getAllContacts().subscribe((data: Contacts[]) => {
      this.contact = data;
      console.log(data);
    }
    );
   }

}
