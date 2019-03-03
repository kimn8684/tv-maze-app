import { Component } from '@angular/core';
import { ITvMaze } from './itv-maze';
import { TvmazeService } from './tvmaze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-maze-app';
  currentProgram: ITvMaze;

  constructor(private tvmazeService: TvmazeService) { }


  doSearch(searchValue){
    const userInput = searchValue.trim();
    this.tvmazeService.getTvMaze(userInput).subscribe(data => this.currentProgram = data);

  }


}
