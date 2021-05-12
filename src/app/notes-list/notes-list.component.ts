import {Component, OnInit} from '@angular/core';
import {NoteService} from '../shared/note.service';
import {NoteModel} from '../models/note.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes$: Observable<NoteModel[]>;
  sortBy: string;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes$ = notes.data;
      console.log(this.notes$);
    });
  }


// tags *ngFor="let tag of note.tags">{{tag}}
  onSortClicked(): void{
    this.notes$ = this.notes$.pipe(map((data) => {
      data.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      });
      return data;
    }));
  }
}

//   public onSortClicked(direction: string): void {
//     if (direction === 'dateDesc') {
//       this.notes.sort(sortNotesDesc);
//     } else {
//       this.notes.sort(sortNotesAsc);
//     }
//   }
//
// }
//
// function sortNotesDesc(n1: any, n2: any) {
//   if (n1.date > n2.date){
//     return -1;
//   } else if (n1.date === n2.date) {
//     return 0;
//   } else {
//     return 1;
//   }
//
// }
// // create toggle switch so the button label changes on click
// function sortNotesAsc(n1: any, n2: any) {
//     if (n1.date < n2.date) {
//       return 1;
//     } else if (n1.date === n2.date) {
//       return 0;
//     } else {
//       return -1;
//     }
//   }


