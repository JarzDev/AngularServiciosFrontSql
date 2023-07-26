import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlClient;
  }

  getAllClients():Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  getClientById(id: number) :Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }
   updateClient(id: number, client: Client):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, client);
  }

  createClient(client: Client): Observable<void> {
    return this.http.post<void>(this.apiUrl, client);
  }

  delClient(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

