import { Injectable } from '@angular/core';
import { Note } from './detail.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  routeschanged=new Subject<void>();
  Notes:Note[]=[];
  constructor() { }

  addNote(note:Note){
    this.Notes.push(note);
  }

  getAllNotes(){
    return this.Notes;
  }
  getNote(id:number){
    return this.Notes[id];
  }
  updateNote(index:number,note:Note){
      this.Notes[index]=note;
  }
  deleteNote(index:number){
    this.Notes.splice(index,1);
  }
}
