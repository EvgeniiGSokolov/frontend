import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SimsearchService } from './simsearch.service';

@Component({
  selector: 'app-config',
  templateUrl: './simsearch.component.html',
  styleUrls: ['./simsearch.component.css'],
  providers: [SimsearchService],
  styles: ['.error { color: #b30000; }']
})
export class SimsearchComponent {
  choice!: string;
  word!: string;
  Model_name!: string;
  Model_tosend!: string;
  POS!: string;
  STRICT!: string;

  lexeme!: string;
  attribute!: string;
  truth!: string;
  error: any;
  headers: string[] = [];
  Modelnames: any[] = [];
  Modelname: any[] = [];
  DBnames: any[] = [];
  DBname: any[] = [];
  postData: any;
  header!: string;
  number: any;
  contents!: [];
  postags: {"short": string, "russ": string}[] = [
    {"short": "S", "russ": "существительное"}, 
    {"short": "V", "russ": "глагол"},
    {"short": "A", "russ": "прилагательное"},
    {"short": "ADV", "russ": "наречие"},
    {"short": "SPRO", "russ": "местоимение-существительное"},
    {"short": "APRO", "russ": "местоимение-прилагательное"},
    {"short": "PR", "russ":"предлог"}
  ];
  truthcond: {"eng":string,"rus":string}[] = [
    {"eng":"yes","rus":"да"},
    {"eng":"no","rus":"нет"}
  ]
 
  constructor(private simsearchService: SimsearchService, private http: HttpClient) {}

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
  }

  clearPOS() {
    this.POS = '';
  }
  toSend(w: string, pos: string, strict: string) {
    this.lexeme = w;
    this.attribute = pos;
    this.truth = strict; 
  }

  submit(lexeme: string, graminfo: string, strict: string) {
    let p = this.simsearchService.postData(lexeme, graminfo, strict);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});
  }

retrieveModel() {
    let p = this.simsearchService.getModels();
    console.log(p);
    p.subscribe(res => {this.Modelnames = res;
      console.log(res)});
  }

  initializeModel(Model_name: string) {
    let p = this.simsearchService.announceModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});    
  }

  setModel(Model_name: string) {
    let p = this.simsearchService.sendModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)}); 
    }

    retrieveDB() {
      let p = this.simsearchService.getDBs();
      console.log(p);
      p.subscribe(res => {this.DBnames = res;
        console.log(res)});
    }

    setDB(db_name: string) {
      let p = this.simsearchService.sendDB(db_name);
      console.log(p);
      p.subscribe(res => {this.postData = res;
        console.log(res)}); 
      }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}

