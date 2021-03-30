import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import {appRoutes} from "./routes";
import { CreateNoteComponent } from './create-note/create-note.component';
import {NoteService} from "./shared/note.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotesListComponent,
    CreateNoteComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
