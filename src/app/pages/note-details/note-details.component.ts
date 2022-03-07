import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/detail.model';
import { NotesServiceService } from 'src/app/shared/notes-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @ViewChild('f',{static:false}) newForm:NgForm;
   editMode=false;
   note:Note;
   index;
  constructor(private notesservice:NotesServiceService,private router:Router,private route:ActivatedRoute) { 
  }

  ngOnInit() {
         this.note=new Note("","");
       this.route.params.subscribe((params:Params)=>{
         if(params['id']){
              this.index=+params['id'];
              this.note=this.notesservice.getNote(this.index);
              this.editMode=true;
         }   
         else{
           this.editMode=false;
         }
       });
          
  }

  onSubmit(){
    const note=new Note(this.newForm.value.title,this.newForm.value.body);
  if(this.editMode){
       this.notesservice.updateNote(this.index,note);
  }
  else{
    this.notesservice.addNote(note);
  }
  this.editMode=false;
   this.router.navigate(["/"]);
  
}

cancel(){
  this.router.navigate(["/"]);
}

}
