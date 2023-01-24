import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Passenger} from '../models/passenger';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private url = 'http://www.angular.at/api/passenger';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Passenger[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Passenger[]>(this.url, { headers });
  }

  savePassenger(newPassenger: Passenger): Observable<Passenger> {
    const data = JSON.stringify(newPassenger);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.post<Passenger>(this.url, data, { headers });
  }
}
