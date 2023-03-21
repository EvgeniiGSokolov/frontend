import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class VecmodelService {
  databaseUrl = 'http://127.0.0.1:5000/create_database';


  constructor(private http: HttpClient) { }

  getModels() {
    return this.http.get<[]>('http://127.0.0.1:5000/get_models', {responseType: 'json'});
  }

  announceModel(Model_name: string) {
    const body = {"Model_name": Model_name};
    console.log(body);
    let r = this.http.post<{}>('http://127.0.0.1:5000/gensim_model', body);
    console.log(r);
    return r;
  }

  sendModel(Model_name: string) {
    const body = {"Model_name": Model_name};
    console.log(body);
    let r = this.http.post<{}>('http://127.0.0.1:5000/set_model', body);
    console.log(r);
    return r;
  }

  getDBs() {
    return this.http.get<[]>('http://127.0.0.1:5000/choose_database', {responseType: 'json'});
  }

  sendDB(db_name: string) {
    const body = {"db_name": db_name};
    console.log(body);
    let r = this.http.post<{}>('http://127.0.0.1:5000/set_database', body);
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
