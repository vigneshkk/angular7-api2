import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BookData } from './get-comp/BookData';

@Injectable({
  providedIn: 'root'
})



export class DataService {
  constructor(private http: HttpClient) { }
  getBooks() {
    return this.http.get<BookData[]>('http://127.0.0.1:8000/books/');
  }
  putBooks(formg: FormGroup){
    return this.http.post('http://127.0.0.1:8000/books/', formg.value).toPromise();
  }
}
