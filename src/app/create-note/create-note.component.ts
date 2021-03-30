import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from "../shared/note.service";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit() {
    let title = new FormControl(this.noteService.NOTES[0].title);
    let body = new FormControl(this.noteService.NOTES[0].body)
    this.noteForm = new FormGroup({
      title: title,
      body: body
    })
  }

  saveNote(formValues) {
    this.noteService.updateNotesList(formValues)
    this.router.navigate(['/notes'])
  }

  cancel(){
    this.router.navigate(['/notes'])
  }
}
