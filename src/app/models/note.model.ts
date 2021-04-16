import {Tag} from './tag.model';
export interface NoteModel{
  title: string;
  body: string;
  date: any;
  tags ?: Array<Tag>;
}
