import {Component, OnInit} from '@angular/core';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit  {
  notes: any;
  sortBy: string;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = [...this.noteService.getNotes()];
  }

  public onSortClicked(direction: string): void {
    if (direction === 'dateDesc') {
      this.notes.sort(sortNotesDesc);
    } else {
      this.notes.sort(sortNotesAsc);
    }
  }

}

function sortNotesDesc(n1: any, n2: any) {
  if (n1.date > n2.date){
    return -1;
  } else if (n1.date === n2.date) {
    return 0;
  } else {
    return 1;
  }

}

function sortNotesAsc(n1: any, n2: any) {
    if (n1.date < n2.date) {
      return 1;
    } else if (n1.date === n2.date) {
      return 0;
    } else {
      return -1;
    }
  }

