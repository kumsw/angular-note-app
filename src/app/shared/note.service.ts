import {Injectable} from "@angular/core";

@Injectable()

export class NoteService{
  readonly NOTES = [
    {title: 'first note' , body:'This is my first note'},
    {title: 'some note' , body:'This is SOME not,'},
    {title: 'notes galore' , body:'I love taking notes'},
    {title: 'this is the final note in the series' , body:'for now. please add more notes'}
  ]

  getNotes(){
    return this.NOTES
  }
  updateNotesList(note: {title: string, body: string}){
    this.NOTES.push(note)
  }
}
