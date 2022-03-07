import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/detail.model';
import { NotesServiceService } from 'src/app/shared/notes-service.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes:Note[]=[];
  constructor(private notesservice:NotesServiceService) { }

  ngOnInit(): void {
        this.notes=this.notesservice.getAllNotes();

  }
  

}
