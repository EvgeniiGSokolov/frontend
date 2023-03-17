import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ConcordancerService {
  concordancerUrl = 'http://127.0.0.1:5000/make_concordance';


  constructor(private http: HttpClient) { }

  //getConcordance() {
  //  return this.http.get<[]>(this.concordancerUrl, {responseType: 'json'}) //Поскольку получаю я массив, я и указываю в get [], массив
  //    .pipe(
  //      retry(3), // retry a failed request up to 3 times
  //      catchError(this.handleError) // then handle the error
  //    );
  //}

  postData(upper: string, lower: string, graminfo: any) {
    const body = {"upper": upper, "lower": lower, "graminfo": graminfo};
    console.log(body);
    let r = this.http.post<{}>('http://127.0.0.1:5000/make_concordance', body);
    console.log(r);
    return r;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
