import { Injectable } from '@angular/core';
import { Equips } from '../interfaces/equips';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipsService {

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlEquips;
  }
  
  getAllEquips():Observable<Equips[]> {
    return this.http.get<Equips[]>(this.apiUrl);
  }
  getEquipsById(id: number) :Observable<Equips> {
    return this.http.get<Equips>(`${this.apiUrl}/${id}`);
  }
   updateEquips(id: number, equips: Equips):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, equips);
  }

  createEquips(equips: Equips): Observable<any> {
    return this.http.post<Equips>(this.apiUrl, equips);
  }

  delEquips(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
