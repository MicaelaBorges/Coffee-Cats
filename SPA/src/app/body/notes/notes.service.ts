import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {
    notes = []

    url='http://localhost:8000/';
    
    constructor(private http: HttpClient) { }

    getNotes() {
        return this.http.get(this.url + 'notes');
    }
}