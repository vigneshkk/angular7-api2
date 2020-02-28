import { Component ,OnInit , ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource} from '@angular/material/table';
import { BookData } from './BookData';
import { MatDialog } from '@angular/material/dialog';
import { FormcompComponent } from '../formcomp/formcomp.component';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-get-comp',
  templateUrl: './get-comp.component.html',
  styleUrls: ['./get-comp.component.css']
})

export class GetCompComponent implements OnInit {
  displayedColumns: string[] = ['isbn', 'book_name', 'author', 'no_of_actual_copies','no_of_cuurent_copies'];
  dataSource: MatTableDataSource<BookData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  users: BookData[]=[];
  constructor(private data: DataService,public dialog: MatDialog) { }
  getBook(): void{
    this.data.getBooks().subscribe(data => {
       this.dataSource = new MatTableDataSource<BookData>(data);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.getBook();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(FormcompComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(dialogRef.componentInstance.book.valid){
      this.dataSource.data.push(dialogRef.componentInstance.book.value);
      this.dataSource.filter = "";
      }
    })
  }

}
