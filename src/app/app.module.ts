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

import {MatChipsModule} from '@angular/material/chips';
import {NoteTagComponent} from './note-tag/note-tag.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotesListComponent,
    CreateNoteComponent,
    NoteTagComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
