import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //url da api
  private url: string = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  select(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + '/list');
  }


  register(obj: Client): Observable<Client> {
    return this.http.post<Client>(this.url + '/register', obj);

  }
  update(obj: Client): Observable<Client> {
    return this.http.put<Client>(this.url + '/edit', obj);

  }


}
