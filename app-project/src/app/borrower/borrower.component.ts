import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { BookData } from '../get-comp/BookData';
import { DataService } from '../data.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  displayedColumns: string[] = ['borrower_id','from_date','to_date','return_date','isbn'];
  bookSource: MatTableDataSource<BookData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  users: BookData[]=[];
  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.data.getBorrowedBooks().subscribe(data => {
      this.bookSource = new MatTableDataSource<BookData>(data);
      this.bookSource.sort = this.sort;
      this.bookSource.paginator = this.paginator;
   });
  }

}
