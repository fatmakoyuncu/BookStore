import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DataService, IBook } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: IBook;


  bookForm = new FormGroup({
    id: new FormControl('', Validators.required),
    bookName: new FormControl('', Validators.required),
    bookType: new FormControl('', Validators.required),
    bookYear: new FormControl('', Validators.required),
    bookStore: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    desciription: new FormControl('', Validators.required),
    page: new FormControl('', Validators.required),
    image: new FormControl(null, [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    writer: new FormControl('', Validators.required)
  });

  constructor(private matDialog: MatDialog,private dataService: DataService) { }

  // constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.bookForm.getRawValue();
    this.matDialog.open(DialogComponent, dialogConfig);

    console.log(dialogConfig.data)
  }

  // getValue() {

  //   this.book = this.bookForm.getRawValue();


  //   this.dataService.books.push(this.book);

  //   console.log(this.dataService.books)

  // }


}
