import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {SearchPipe} from '../search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: string;

  bookList;
  constructor(private dataService: DataService) { 
    this.bookList = dataService.books;
  }

  ngOnInit(): void {
  }

}
