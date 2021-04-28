import {Tag} from './tag.model';
export interface NoteModel{
  noteTitle: string;
  noteTags ?: Array<Tag>;
  noteBody: string;
  date: any;
}
