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
  noteTitle: FormControl =  new FormControl('', [Validators.required]);
  noteBody: FormControl = new FormControl('');
  noteTags: FormArray = new FormArray([]);

  constructor(private noteService: NoteService, private router: Router) {
  }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      noteTitle: this.noteTitle,
      noteBody: this.noteBody,
      noteTags: this.noteTags,
    });
   }
 // tags = this.noteForm.get('tags') as FormArray,

  addTag(tagList: string): void{
    if ((tagList || '').trim()){
      this.noteTags.push(new FormControl(tagList));
    }
    console.log(this.noteTags);
  }

  removeTag(index: number): void {
    this.noteTags.removeAt(index);
   }

  saveNote(formValues: NoteModel): void{
    this.noteService.saveNote(formValues).subscribe();
    this.router.navigate(['/notes']);
  }

  cancel(){
    this.router.navigate(['/notes']);
  }
}
