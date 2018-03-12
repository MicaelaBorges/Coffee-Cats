import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { TestService } from '../test.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  notes: Note[]=[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getNotes();
  }
  getNotes(): void {
    this.testService.getNotes()
      .subscribe(notes =>this.notes = notes.slice(1, 5));
  }
}
