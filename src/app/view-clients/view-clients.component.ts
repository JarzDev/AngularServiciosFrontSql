import { Component } from '@angular/core';
import { Client } from '../interfaces/client';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent {
  cliente:Client[] = [];

  constructor( private clientService: ClientService) {

    this.clientService.getAllClients().subscribe( (data:Client[]) => {
      this.cliente = data;
      console.log(data);
    });
}
}
