import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { DataService } from '../../app/data.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent implements OnInit {
  book: FormGroup;
  constructor(private data: DataService,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<FormcompComponent>) { }
  onSubmit(){
    if(this.book.valid){
    this.data.putBooks(this.book);
    this.dialogRef.close();
    }else{
      console.log(this.book.valid);
    }
  }

  ngOnInit(): void {
    this.book = this.formBuilder.group({
      isbn: ['',Validators.compose( [Validators.required, Validators.maxLength(4)])],
      book_name : ['', [Validators.required , Validators.minLength(2)]],
      author : ['', [Validators.required]],
      no_of_actual_copies : ['', [Validators.required , Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]],
      no_of_cuurent_copies : ['', [Validators.required , Validators.pattern("^[0-9]*$"),Validators.maxLength(2)]]
    });
  }
}
 