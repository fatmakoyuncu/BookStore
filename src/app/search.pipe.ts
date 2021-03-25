import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './data.service';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(books: IBook[], searchText: string): IBook[] {

    if(!books || ! searchText){
      return books;
    }

    return books.filter(book => book.bookName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }



  // transform(items: any, searchText: any): any[] {
  //   if (!items) return [];
  //   if (!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //     return it.toLowerCase().includes(searchText);
  //   });
  // }

}
