import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { SearchPipe } from './search.pipe';


const appRoutes: Routes= [
  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'add-book', component:AddBookComponent},
  {path: 'book-detail/:id', component:BookDetailComponent},
  {path: '**', component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent,
    BookDetailComponent,
    NotFoundComponent,
    DialogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
