import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  constructor(public dataService : DataService) { }

  ngOnInit() {
    this.books = this.dataService.getBooks();
  }

  addBook(book: Book) {
    this.dataService.addBooks(book);
  }

}
