import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnChanges  {
  notes: any;
  @Input() sortBy: string;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(){
    this.sortBy === 'dateDesc' ? this.notes.slice().sort(sortNotesDesc) : this.notes.slice().sort(sortNotesAsc);
  }

}

function sortNotesDesc(n1: any, n2: any) {
  if (n1.date < n2.date) {
    console.log(n1.date);
    return 0;
  } else if (n1.date === n2.date) {
    return 1;
  } else {
    return -1;
  }
}

function sortNotesAsc(n1: any, n2: any) {
    if (n1.date > n2.date) {
      return 1;
    } else if (n1.date === n2.date) {
      return 0;
    } else {
      return -1;
    }
  }

