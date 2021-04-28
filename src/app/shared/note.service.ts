import {Injectable} from '@angular/core';
import {NoteModel} from '../models/note.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()

export class NoteService{
  readonly NOTES: NoteModel[] = [
    {noteTitle: 'first note' , noteBody: 'This is my first note' , date: new Date(2020, 5, 20, 5, 6, 6)},
    {noteTitle: 'some note' , noteBody: 'This is SOME note,', date: new Date(2020, 8, 27, 17, 6, 6)},
    {noteTitle: 'notes galore' , noteBody: 'I love taking notes', date: new Date(2021, 1, 2, 18, 6, 6)},
    {noteTitle: 'final note in the series' , noteBody: 'for now. please add more notes', date: new Date(2021, 2, 26, 15, 6, 6)}
  ];

   constructor(private http: HttpClient){}

  getNotes(): Observable<any>{
     return this.http.get<any> ('http://localhost:3000/notes');
       // .pipe(
       //   map(note => note[0]),
       // catchError(this.handleError<any>('getNotes' , []))
       // );
  }

  currentDate(): object{
     // const date = moment.format('MMMM Do YYYY, h:mm a');
    const date = new Date();
    return  date;
  }

  // post request
  saveNote(note): Observable<NoteModel[]>{
     const options = {headers: new HttpHeaders(({'Content-Type': 'application/json'}))};
     return this.http.post<NoteModel[]>('api/notes', note, options)
       .pipe(catchError(this.handleError<NoteModel[]>('saveNote', [])));
  }

  updateNotesList(note: NoteModel): void{
     note.date = this.currentDate();
     this.NOTES.push(note);
  }

// Handle Error
private handleError<T>(operation = 'operation', result?: T){
  return(error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };

}
}
