import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../shared/note.service';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {NoteModel} from '../models/note.model';
@Component({
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup;
  title: FormControl =  new FormControl('', [Validators.required]);
  body: FormControl = new FormControl('');
  tags: FormArray = new FormArray([]);

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      title: this.title,
      body: this.body,
      tags: this.tags,
    });
   }
 // tags = this.noteForm.get('tags') as FormArray,

  addTag(event): void{
    console.log(this.tags.controls);
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()){
      this.tags.push(new FormControl(value));
    }
    if (input) {
      input.value = '';
    }
    console.log(this.tags.controls);
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
   }

  saveNote(formValues: NoteModel) {
    this.noteService.updateNotesList(formValues);
    this.router.navigate(['/notes']);
  }

  cancel(){
    this.router.navigate(['/notes']);
  }
}
