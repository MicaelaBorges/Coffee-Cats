import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note'

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    providers: [NotesService]
})
export class NotesComponent implements OnInit {

    notes: Note[] = [];

    constructor(private notesService: NotesService) { }

    ngOnInit() {
        this.getNotes();
    }

    getNotes(): void {
        this.notesService.getNotes()
            .subscribe(notes => this.notes = notes)
    }
}