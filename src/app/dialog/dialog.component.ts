import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { DataService, IBook } from '../data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  addBook: IBook;


  constructor(private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) { }


  ngOnInit(): void {
  }

  close(){
    this.dialogRef.closeAll();
  }

  add(){

    this.dataService.books.push(this.data)  
    console.log(this.dataService.books) 
    this.dialogRef.closeAll();

  }

}
