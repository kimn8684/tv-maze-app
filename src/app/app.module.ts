import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvProgramsComponent } from './tv-programs/tv-programs.component';
import { TvmazeService } from './tvmaze.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgramSearchComponent } from './program-search/program-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule,
  MatInputModule } from '@angular/material'; 

@NgModule({
  declarations: [
    AppComponent,
    TvProgramsComponent,
    ProgramSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],

  providers: [ TvmazeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
