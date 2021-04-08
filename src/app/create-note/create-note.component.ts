import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../shared/note.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup;
  title: FormControl =  new FormControl('', [Validators.required]);
  body: FormControl = new FormControl('');

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: this.title,
      body: this.body,
    });
  }

  saveNote(formValues) {
    this.noteService.updateNotesList(formValues);
    this.router.navigate(['/notes']);
  }

  cancel(){
    this.router.navigate(['/notes']);
  }
}
