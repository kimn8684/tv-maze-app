import { Component, OnInit, Input } from '@angular/core';
import { ITvMaze } from '../itv-maze'
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'app-tv-programs',
  templateUrl: './tv-programs.component.html',
  styleUrls: ['./tv-programs.component.css']
})
export class TvProgramsComponent implements OnInit {
  @Input() maze: ITvMaze

  constructor(private tvmazeService: TvmazeService) { }

  ngOnInit() {
    
  }

}
