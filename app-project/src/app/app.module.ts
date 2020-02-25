import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCompComponent } from './get-comp/get-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { FormcompComponent } from './formcomp/formcomp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';

const appRoutes: Routes = [
  { path: 'component', component: GetCompComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    GetCompComponent,
    FormcompComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CdkTableModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,  
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
