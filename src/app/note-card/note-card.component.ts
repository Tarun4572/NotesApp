import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../shared/detail.model';
import { NotesServiceService } from '../shared/notes-service.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note:Note;
  @Input() id:number;
 
  constructor(private notesservice:NotesServiceService) { }

  ngOnInit(): void {
  }
  
  delete(){
    this.notesservice.deleteNote(this.id);
  }

}
