import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VecmodelService } from './vecmodel.service';

@Component({
  selector: 'app-config',
  templateUrl: './vecmodel.component.html',
  styleUrls: ['./vecmodel.component.css'],
  providers: [VecmodelService],
  styles: ['.error { color: #b30000; }']
})
export class VecmodelComponent {
  choice!: string;
  Model_name!: string;
  Model_tosend!: string;
  
  upper!: string;
  lower!: string;
  attributes: string[] = [];
  truth: any;
  error: any;
  headers: string[] = [];
  Modelnames: any[] = [];
  Modelname: any[] = [];
  DBnames: any[] = [];
  DBname: any[] = [];
  postData: any;
  number: any;
  contents!: [];
  
  constructor(private vecmodelService: VecmodelService, private http: HttpClient) {}

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
  }

  toSend(w1: string, w2: string, arr: string[] = []) {
    this.upper = w1;
    this.lower = w2;
    this.attributes = arr.filter((obj) => {return obj != 'all'})
  }

retrieveModel() {
    let p = this.vecmodelService.getModels();
    console.log(p);
    p.subscribe(res => {this.Modelnames = res;
      console.log(res)});
  }

  initializeModel(Model_name: string) {
    let p = this.vecmodelService.announceModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});    
  }

  setModel(Model_name: string) {
    let p = this.vecmodelService.sendModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)}); 
    }

    retrieveDB() {
      let p = this.vecmodelService.getDBs();
      console.log(p);
      p.subscribe(res => {this.DBnames = res;
        console.log(res)});
    }

    setDB(db_name: string) {
      let p = this.vecmodelService.sendDB(db_name);
      console.log(p);
      p.subscribe(res => {this.postData = res;
        console.log(res)}); 
      }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}

