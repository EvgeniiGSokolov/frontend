import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Donatus Minor';
  DBnames: string[] = [];
  DBname!: string;
  postData: any;

  constructor(private http: HttpClient) {}

  retrieveDB() {
    let p = this.getDBs();
    console.log(p);
    p.subscribe(res => {this.DBnames = res;
      console.log(res)});
  }

  setDB(db_name: string) {
    let p = this.sendDB(db_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)}); 
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
}
