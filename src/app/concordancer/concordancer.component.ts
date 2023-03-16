import { Component } from '@angular/core';
import { ConcordancerService } from './concordancer.service';

@Component({
  selector: 'app-config',
  templateUrl: './concordancer.component.html',
  //styleUrls: ['./concordancer.component.css'],
  providers: [ ConcordancerService ],
  styles: ['.error { color: #b30000; }']
})
export class ConcordancerComponent {
  choice!: string;
  word_1!: string;
  word_2!: string;
  POS!: string;
  NUM!: string;
  CASE!: string;
  SADD!: string;
  VTRANS!: string;
  VTENSE!: string;
  VPERS!: string;
  GEN!: string;
  
  upper!: string;
  lower!: string;
  attributes: string[] = [];
  truth: any;
  error: any;
  headers: string[] = [];
  myData: any[] = [];
  postData: any;
  number: any;
  contents!: [];
  postags: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "любая"},
    {"short": "S", "russ": "существительное"}, 
    {"short": "V", "russ": "глагол"},
    {"short": "A", "russ": "прилагательное"},
    {"short": "ADV", "russ": "наречие"},
    {"short": "SPRO", "russ": "местоимение-существительное"},
    {"short": "APRO", "russ": "местоимение-прилагательное"},
    {"short": "ADV", "russ": "наречие"},
    {"short": "PR", "russ":"предлог"}
  ];
  cases: {"short": string, "russ": string}[] = [
    {"short":"им", "russ":"именительный"},
    {"short":"род", "russ":"родительный"},
    {"short":"дат", "russ":"дательный"},
    {"short":"вин", "russ":"винительный"},
    {"short":"твор", "russ":"творительный"},
    {"short":"пр", "russ":"предложный"},
    {"short":"парт", "russ":"родительный партитивный"},
    {"short":"местн", "russ":"локативная форма"},
    {"short":"зват", "russ":"звательная форма"},
  ]
  transitions: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "любой"},
    {"short": "пе", "russ": "переходный"},
    {"short": "нп", "russ": "непереходный"},
  ];
  tenses: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "любое"},
    {"short": "наст", "russ": "настоящее"},
    {"short": "непрош", "russ": "непрошедшее"},
    {"short": "прош", "russ": "прошедшее"}
  ];
  persons: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "любое"},
    {"short": "1-л", "russ": "первое"},
    {"short": "2-л", "russ": "второе"},
    {"short": "3-л", "russ": "третье"}
  ];
  nums: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "любое"},
    {"short": "ед", "russ": "единственное"},
    {"short": "мн", "russ": "множественное"},
  ];
  genders: {"short": string, "russ": string}[] = [
    {"short":"all", "russ": "любой"},
    {"short":"муж", "russ": "мужской"},
    {"short":"жен", "russ": "женский"},
    {"short":"сред", "russ": "средний"}
  ];
  addition: {"short": string, "russ": string}[] = [
    {"short": "all", "russ": "нет"},
    {"short": "гео", "russ": "топоним"},
    {"short": "имя", "russ": "антропоним"},
    {"short": "отч", "russ": "отчество"},
    {"short": "устар", "russ": "архаизм"}
  ];
  


  constructor(private concordancerService: ConcordancerService) {}

  fullConcord() {
    this.word_1 = 'aaa';
    this.word_2 = 'яяя';

  }

  clearConcord() {
    this.word_1 = '';
    this.word_2 = '';
  }

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
    this.truth = undefined;
  }

  clearPOS() {
    this.NUM = 'all';
    this.CASE = 'all';
    this.SADD = 'all';
    this.VTRANS = 'all';
    this.VTENSE = 'all';
    this.VPERS = 'all';
    this.GEN = 'all';
  }

  showConcordance() { //Оказывается, при методе POST backend возвращает обратно данные, и отдельный get не нужен! 
    this.concordancerService.getConcordance() //Поэтому оставлю только submit.
      .subscribe( //подпишемся на getConfig, чтобы получить из него наш массив
        res => {
          this.myData = res; // массив собственной персоной;
          console.log(res);  // на всякий случай выводим его в консоль;
       });
  }

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
  }

  toSend(w1: string, w2: string, arr: string[] = []) {
    this.upper = w1;
    this.lower = w2;
    this.attributes = arr.filter((obj) => {return obj != 'all'})
  }

  submit(upper: string, lower: string, graminfo: any) {
    let p = this.concordancerService.postData(upper, lower, graminfo);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});

  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
