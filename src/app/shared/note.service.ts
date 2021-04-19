import {Injectable} from '@angular/core';
// import {moment} from 'moment';
import {NoteModel} from '../models/note.model';


@Injectable()

export class NoteService{
  readonly NOTES: NoteModel[] = [
    {title: 'first note' , body: 'This is my first note' , date: new Date(2020, 5, 20, 5, 6, 6)},
    {title: 'some note' , body: 'This is SOME note,', date: new Date(2020, 8, 27, 17, 6, 6)},
    {title: 'notes galore' , body: 'I love taking notes', date: new Date(2021, 1, 2, 18, 6, 6)},
    {title: 'final note in the series' , body: 'for now. please add more notes', date: new Date(2021, 2, 26, 15, 6, 6)}
  ];

   constructor(){}
  getNotes(): NoteModel[]{

     return this.NOTES;
  }

  currentDate(): object{
     // const date = moment.format('MMMM Do YYYY, h:mm a');
    const date = new Date();
    return  date;
  }

  updateNotesList(note: NoteModel): void{
     note.date = this.currentDate();
     this.NOTES.push(note);
  }
}
