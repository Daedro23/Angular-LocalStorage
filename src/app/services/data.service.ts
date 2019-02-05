import { Injectable } from '@angular/core';

import {Book} from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  books: Book[];

  constructor() { 
    this.books = [];

  }

  getBooks() {
    if (localStorage.getItem('books') === null) {
      return this.books;
    } else {
      this.books = JSON.parse(localStorage.getItem('books'));
      return this.books;

    }
    
  }

  addBooks(book: Book){
    this.books.push(book);
    let books: Book[] = [];
    if (localStorage.getItem('books') === null) {
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem('books'));
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
    
  }

  removeBook(book: Book) {
    for(let i = 0; i < this.books.length; i++) {
        if(book == this.books[i]){
          this.books.splice(i, 1);
        localStorage.setItem('books', JSON.stringify(this.books));
      }
    }
  }
}
