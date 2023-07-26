import { Injectable } from '@angular/core';
import { Servs } from '../interfaces/servs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServsService {

  public apiUrl: string;
  constructor( private http: HttpClient) { 
    this.apiUrl = environment.apiUrlServs;
  }

  
  getAllServs():Observable<Servs[]> {
    return this.http.get<Servs[]>(this.apiUrl);
  }
  getServsById(id: number) :Observable<any> {
    return this.http.get<Servs>(`${this.apiUrl}/${id}`);
  }
   updateServs(id: number, servs: Servs):Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, servs);
  }

  createServs(servs: Servs): Observable<void> {
    return this.http.post<void>(this.apiUrl, servs);
  }

  delServs(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
