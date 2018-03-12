import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  notes: Note[];
   
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getNotes();
  }
  
  getNotes(): void {
    this.testService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
}
