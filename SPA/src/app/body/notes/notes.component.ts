import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    providers: [NotesService]
})
export class NotesComponent implements OnInit {

    public notes: any;

    constructor(private notesService: NotesService) { }

    ngOnInit() {
        this.notesService.getNotes()
            .subscribe(data => this.notes = data)
    }

}