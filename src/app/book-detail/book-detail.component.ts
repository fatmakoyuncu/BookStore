import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  selectedBook;
  constructor(private route: ActivatedRoute, private dataService:DataService) { 
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.selectedBook = this.dataService.books.find(i => i.id === id);

    console.log(this.selectedBook)
  }

  delete(){
    if(confirm('Silmek istediğinize emin misiniz?') == true)
    {
      for(let i = 0; i<this.dataService.books.length; i++){
        if(this.selectedBook == this.dataService.books[i])
        {
          this.dataService.books.splice(i,1);
        }
      }
    }
  }

}
