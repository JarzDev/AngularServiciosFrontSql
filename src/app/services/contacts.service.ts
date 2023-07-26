import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/contacts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlContacts;
  }

  getAllContacts():Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.apiUrl);
  }
  getContactsById(id: number) :Observable<Contacts> {
    return this.http.get<Contacts>(`${this.apiUrl}/${id}`);
  }
   updateContacts(id: number, contacts: Contacts):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, contacts);
  }

  createContacts(contacts: Contacts): Observable<any> {
    return this.http.post<Contacts>(this.apiUrl, contacts);
  }

  delContacts(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
