import { Component, OnInit, Input } from '@angular/core';
import { Book} from '../../models/books';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
@Input('book') book:Book;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeBook(book: Book) {
    const response = confirm('¿De verdad quieres borrar el libro guardado?');
    if (response) {
      this.dataService.removeBook(book);
    }
  }
}
