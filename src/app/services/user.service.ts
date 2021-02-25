import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://delta-58a57-default-rtdb.firebaseio.com/';
  }

  getUser(where?: string): Observable<any> {
    where = (where) ? '?' + where : '';
    return this.http.get(`${this.apiUrl}users.json/${where}`)
        .pipe(map(res =>  res), catchError(err => throwError(err)));
  }

  getDescriptionList(): Observable<any> {
    return this.http.get(`${this.apiUrl}descriptions.json/`)
        .pipe(map(res =>  res), catchError(err => throwError(err)));
  }

  getMenuList(): Observable<any> {
    return this.http.get(`${this.apiUrl}menu.json/`)
        .pipe(map(res =>  res), catchError(err => throwError(err)));
  }
}
