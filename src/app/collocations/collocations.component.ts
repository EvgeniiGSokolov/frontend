import { Component } from '@angular/core';
import { CollocationsService } from './collocations.service';

@Component({
  selector: 'app-config',
  templateUrl: './collocations.component.html',
  styleUrls: ['./collocations.component.css'],
  providers: [ CollocationsService ],
  styles: ['.error { color: #b30000; }']
})
export class CollocationsComponent {
  choice!: string;
  word_1!: string;
  word_2!: string;
  distance!: string;
  dist_word!: string;
  POS!: string; POS_2!: string;
  NUM!: string; NUM_2!: string;
  CASE!: string; CASE_2!: string;
  SADD!: string; SADD_2!: string;
  VTRANS!: string; VTRANS_2!: string;
  VTENSE!: string; VTENSE_2!: string;
  VPERS!: string; VPERS_2!: string;
  GEN!: string; GEN_2!: string;
  
  left_word!: string;
  right_word!: string;
  gram_1: string[] = [];
  gram_2: string[] = [];
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

  constructor(private collocationsService: CollocationsService) {}

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
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

  toSend(w1: string, w2: string, dist: string, arr_1: string[] = [], arr_2: string[] = []) {
    this.left_word = w1;
    this.right_word = w2;
    this.dist_word = dist;
    this.gram_1 = arr_1.filter((obj) => {return obj != 'all'});
    this.gram_2 = arr_2.filter((obj) => {return obj != 'all'});
  }  

  submitCollocations(first: string, second: string, word_dist: string, gram_one: any, gram_two: any) {
    let p = this.collocationsService.postData(first, second, word_dist, gram_one, gram_two);
    console.log(p);
    p.subscribe(res => {this.postData = res;
      console.log(res)});

  }

  showCollocations() {
    this.collocationsService.getCollocations()
      .subscribe( //подпишемся на getConfig, чтобы получить из него наш массив
        res => {
          this.myData = res; // массив собственной персоной;
          console.log(res);  // на всякий случай выводим его в консоль;
       });
  }


  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
