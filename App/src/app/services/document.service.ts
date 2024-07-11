import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


export interface DocumentEntity {
  id: string;
  name: string;
  code: string;
  content: string;
  users: DocumentUser[];
}

export interface DocumentUser {
  userId: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'http://localhost:8080/api/documents/';
  private documentAddedSubject = new Subject<void>();

  constructor(private http: HttpClient) { }

  addDocument(userEmail: string, documentName: string): Observable<any> {
    const url = `${this.apiUrl}add/${userEmail}/${documentName}`;
    return this.http.post(url, {});
  }

  addDocumentToUser(userEmail: string, documentcode: string): Observable<any> {
    const url = `${this.apiUrl}addusertodocument/${userEmail}/${documentcode}`;
    return this.http.post(url, {});
  }

  getDocumentAddedObservable(): Observable<void> {
    return this.documentAddedSubject.asObservable();
  }

  notifyDocumentAdded(): void {
    this.documentAddedSubject.next();
  }
}
