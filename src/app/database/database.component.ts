import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-config',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
  providers: [DatabaseService],
  styles: ['.error { color: #b30000; }']
})
export class DatabaseComponent {
  choice!: string;
  db_name!: string;
  db_tosend!: string;
  
  upper!: string;
  lower!: string;
  attributes: string[] = [];
  truth: any;
  error: any;
  headers: string[] = [];
  DBnames: any[] = [];
  DBname: any[] = [];
  postData: any;
  number: any;
  contents!: [];
  
  constructor(private databaseService: DatabaseService, private http: HttpClient) {}

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
  }

  toSend(w1: string, w2: string, arr: string[] = []) {
    this.upper = w1;
    this.lower = w2;
    this.attributes = arr.filter((obj) => {return obj != 'all'})
  }

retrieveDB() {
    let p = this.databaseService.getDBs();
    console.log(p);
    p.subscribe(res => {this.DBnames = res;
      console.log(res)});
  }

  initializeDB(db_name: string) {
    let p = this.databaseService.announceDB(db_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});    
  }

  setDB(db_name: string) {
    let p = this.databaseService.sendDB(db_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)}); 
    }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}

