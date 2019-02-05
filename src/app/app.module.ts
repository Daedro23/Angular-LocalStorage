import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { BooksAddComponent } from './components/books-add/books-add.component';
import { BooksListComponent } from './components/books-list/books-list.component';

 //MaterialDesing
import { MyMaterialComponents } from './Material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BooksAddComponent,
    BooksListComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialComponents
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
