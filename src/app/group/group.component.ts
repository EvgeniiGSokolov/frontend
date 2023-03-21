import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GroupService } from './group.service';

@Component({
  selector: 'app-config',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupService],
  styles: ['.error { color: #b30000; }']
})
export class GroupComponent {
  choice!: string;
  word!: string;
  Model_name!: string;
  Model_tosend!: string;
  POS!: string;
  SIMILARITY!: string;
  STRICT!: string;

  lexeme!: string;
  group!: string;
  attribute!: string;
  truth!: string;
  sim!: string;
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
  grouptype: {"type":string,"rus":string}[] = [
    {"type":"lsg","rus":"лексико-семантическая"},
    {"type":"lst","rus":"лексико-тематическая"}
  ];
  measures: {"score":string,"rus":string}[] = [
    {"score":"high","rus":"высокая"},
    {"score":"medium","rus":"средняя"},
    {"score":"low","rus":"низкая"}
  ]
 
  constructor(private groupService: GroupService, private http: HttpClient) {}

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
  }

  clearPOS() {
    this.POS = '';
  }
  toSend(w: string, pos: string, strict: string, sim: string) {
    this.lexeme = w;
    this.attribute = pos;
    this.group = strict; 
    this.sim = sim;
  }

  submit(lexeme: string, graminfo: string, group: string, similarity: string) {
    let p = this.groupService.postData(lexeme, graminfo, group,similarity);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});
  }

retrieveModel() {
    let p = this.groupService.getModels();
    console.log(p);
    p.subscribe(res => {this.Modelnames = res;
      console.log(res)});
  }

  initializeModel(Model_name: string) {
    let p = this.groupService.announceModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});    
  }

  setModel(Model_name: string) {
    let p = this.groupService.sendModel(Model_name);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)}); 
    }

    retrieveDB() {
      let p = this.groupService.getDBs();
      console.log(p);
      p.subscribe(res => {this.DBnames = res;
        console.log(res)});
    }

    setDB(db_name: string) {
      let p = this.groupService.sendDB(db_name);
      console.log(p);
      p.subscribe(res => {this.postData = res;
        console.log(res)}); 
      }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}

