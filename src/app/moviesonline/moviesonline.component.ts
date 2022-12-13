import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import {Observable, of} from "rxjs";
import {Movie} from "./movie";
import {catchError, map, tap} from "rxjs/operators";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import {IMovieParam, IMovieResults} from "../model/movie-results";

@Component({
  selector: 'app-movies',
  templateUrl: './moviesonline.component.html',
  styleUrls: ['./moviesonline.component.css']
})
export class MoviesonlineComponent implements OnInit {
  formName: string = "";
  formYear: string = "";
  private log(s: string) {

  }

     public movieResults: IMovieResults[] = [];
    public movies: Movie[] = [];

  constructor(

      private httpService: HttpService,
    private httpClient: HttpClient,
    private router: Router
  ) {


  }


  ngOnInit(): void {
  }


  searchMoviesTwo() {
    debugger;
    let param: IMovieParam = {
      name: this.formName,
      year: this.formYear
    }
    this.httpService.searchMovieTwo(param)
  .subscribe(data => {
      this.movieResults = data.results;
      console.log(this.movieResults);
    } );
  }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }




}


