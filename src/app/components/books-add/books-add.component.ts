import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/books';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {
    name: string;
    editorial: string;
    autor: string;
    edition: string;
  @Output() bookAdded = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  addBook(){
    this.bookAdded.emit({
      name: this.name,
      editorial: this.editorial,
      autor: this.autor,
      edition: this.edition
      
    });
    this.name = '',
    this.editorial = '',
    this.autor = '',
    this.edition = '';
  }

}
