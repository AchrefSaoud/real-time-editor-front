import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getDocuments(userEmail: string): Observable<any> {
    const url = `${this.apiUrl}/find/${userEmail}`;
    return this.http.get<any>(url);
  }
}
