import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-program-search',
  templateUrl: './program-search.component.html',
  styleUrls: ['./program-search.component.css']
})
export class ProgramSearchComponent implements OnInit {
  
  search = new FormControl('', [Validators.minLength(2)]);

  @Output() searchEvent = new EventEmitter<string>() 
  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      console.log
      if (!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }
    })
  }

}
