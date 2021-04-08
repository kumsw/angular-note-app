import {Injectable} from '@angular/core';

@Injectable()

export class NoteService{
  readonly NOTES = [
    {title: 'first note' , body: 'This is my first note' , date: new Date(2020,5,20,5,6,6)},
    {title: 'some note' , body: 'This is SOME note,', date: new Date(2020,8,27, 17,6,6)},
    {title: 'notes galore' , body: 'I love taking notes', date: new Date(2021,1,2, 18,6,6)},
    {title: 'final note in the series' , body: 'for now. please add more notes', date: new Date(2021,2, 26, 15,6,6)}
  ];


  getNotes(){
    // this will eventually come from a DB
    return this.NOTES;
  }

  currentDate(): object{
    const date = new Date();
    return  date;
  }

  updateNotesList(note: {title: string, body: string, date: any}): void{
    note.date = this.currentDate();
    this.NOTES.push(note);
  }
}
