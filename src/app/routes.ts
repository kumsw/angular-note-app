import {Routes} from '@angular/router';
import {NotesListComponent} from "./notes-list/notes-list.component";
import {CreateNoteComponent} from "./create-note/create-note.component";

export const appRoutes: Routes =[
  {path: 'notes', component:NotesListComponent},
  {path: 'notes/create', component: CreateNoteComponent},
  {path: '', redirectTo: '/notes', pathMatch: 'full'}
]
