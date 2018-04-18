import { Injectable } from '@angular/core';
import { Note } from './note'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class NotesService {

    private url='http://localhost:8000/notes'; // URL to web api

    constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.url)
    }
}