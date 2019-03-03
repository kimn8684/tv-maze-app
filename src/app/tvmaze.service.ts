import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ITvMaze } from './itv-maze';

interface ITvMazeData {
    name: string;
    genres: string[];
    status: string;
    officialSite: string;
    
    schedule: {
      time: string;
      days: string[];
    };

    network: {
      name: string;
    };

    image: {
      medium: string;
      original: string;
    };
    
    summary: string;
  }


@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient: HttpClient) { }

  getTvMaze(name: string){
    return this.httpClient
      .get<ITvMazeData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data => this.transformToITvMaze(data)))
  }

  private transformToITvMaze(data: ITvMazeData): ITvMaze {
      return {
        name: data.name,
        genres: data.genres,
        status: data.status,
        days: data.schedule.days,
        time: data.schedule.time,
        provider: data.network.name,
        officialSite: data.officialSite,
        image: data.image.medium,
        description: data.summary,
      };
    };
  }
