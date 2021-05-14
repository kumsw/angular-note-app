import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../shared/note.service';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {NoteModel} from '../models/note.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup;
  noteTitle: FormControl = new FormControl('', [Validators.required]);
  noteBody: FormControl = new FormControl('');
  noteTags: FormArray = new FormArray([]);
  date: FormControl = new FormControl((new Date()).toISOString().substring(0, 10), [Validators.required]);
  noteUuid: FormControl = new FormControl(uuidv4());

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteUuid: this.noteUuid,
      noteTitle: this.noteTitle,
      noteBody: this.noteBody,
      noteTags: this.noteTags,
      date: this.date,
    });
  }

  // Note Tag functionality
  addTag(tagList): void {
    if ((tagList || '').trim()) {
      this.noteTags.push(new FormControl(tagList));
      const tagInput = document.querySelector('#tagInput')as HTMLInputElement;
      tagInput.value = '';
    }
  }

  removeTag(index: number): void {
    this.noteTags.removeAt(index);
  }

  // Save note to DB
  saveNote(formValues): void {

    this.noteService.saveNote(formValues).subscribe();
    this.router.navigate(['/notes']);
  }

  cancel() {
    this.router.navigate(['/notes']);
  }
}
