import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {catchError} from "rxjs/operators";

interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigServiceService {

  configUrl: string = 'assets/json/config.json';
  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'})
  };

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
      }
      // return an ErrorObservable with a user-facing error message
      return new ErrorObservable(
          'Something bad happened; please try again later.');
  }

  postRecord (configData: Config): Observable<any> {
    return this.http.post<any>(this.configUrl, configData, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }

  deleteHero (id: number): Observable<{}> {
    const url = `${this.configUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, this.httpOptions)
        .pipe(
            catchError(this.handleError)
        );
  }

  

  getData() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
    );
  }

  getAllDataWithHeaders(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
        this.configUrl, { observe: 'response' });
  }
}
