import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NOTES } from './mock-notes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestService {

  private url = 'http://localhost:8000/notes';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url)
  }

  getNotesNo404<Data>(title: string): Observable<Note> {
    const url2 = `${this.url}/id={title}`;
    return this.http.get<Note[]>(url2)
      .pipe(
        map(notes => notes[0]),
        tap(n => {
          const outcome = n ? `fetched` : `did not find`;
          this.log(`${outcome} note id=${title}`);
        }),
      }
}
