import {Component, Input} from '@angular/core';

import {Tag} from '../models/tag.model';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-note-tag',
  templateUrl: 'note-tag.component.html',
  styleUrls: ['note-tag.component.css'],
})

export class NoteTagComponent {

  @Input() public tags: Tag[];

  selectable = true;
  removable = true;

  getTags(): Tag[] {
    console.log(this.tags);
    const tags = this.tags;
    return tags;
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
      console.log(this.tags);
    }
    if (input) {
      input.value = '';
    }
  }

  remove(tags: Tag): void {
    const index = this.tags.indexOf(tags);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
