import {Injectable} from '@angular/core';
import {NoteModel} from '../models/note.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()

export class NoteService {
  constructor(private http: HttpClient) {
  }

  // get all request
  getNotes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/notes');
    // .pipe(
    //   map(note => note[0]),
    // catchError(this.handleError<any>('getNotes' , []))
    // );
  }

  // post request
  saveNote(note): Observable<any> {
    const options = {headers: new HttpHeaders(({'Content-Type': 'application/json'}))};
    return this.http.post<any>('http://localhost:3000/notes', note, options)
      .pipe(catchError(this.handleError<any>('saveNote', {})));
  }

  // delete request
  deleteNote(){
  }


// handle Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
