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
  word_1!: string;
  word_2!: string;
  POS!: string;
  SNUM!: string;
  SCASE!: string;
  SADD!: string;
  VTRANS!: string;
  VTENSE!: string;
  VPERS!: string;
  VNUM!: string;
  AGEN!: string;
  ANUM!: string;
  ACASE!: string;
  SPROGEN!: string;
  SPRONUM!: string;
  SPROCASE!: string;
  APROGEN!: string;
  APRONUM!: string;
  APROCASE!: string;
  truth: any;
  error: any;
  headers: string[] = [];
  myData: any[] = [];
  number: any;
  contents!: [];
  postags: {"pos": string, "russ": string}[] = [
    {"pos": "all", "russ": "любая"},
    {"pos": "S", "russ": "существительное"}, 
    {"pos": "V", "russ": "глагол"},
    {"pos": "A", "russ": "прилагательное"},
    {"pos": "ADV", "russ": "наречие"},
    {"pos": "SPRO", "russ": "местоимение-существительное"},
    {"pos": "APRO", "russ": "местоимение-прилагательное"},
    {"pos": "ADV", "russ": "наречие"},
    {"pos": "PR", "russ":"предлог"}
  ];
  cases: {"case": string, "russ": string}[] = [
    {"case":"им", "russ":"именительный"},
    {"case":"род", "russ":"родительный"},
    {"case":"дат", "russ":"дательный"},
    {"case":"вин", "russ":"винительный"},
    {"case":"твор", "russ":"творительный"},
    {"case":"пр", "russ":"предложный"},
    {"case":"парт", "russ":"родительный партитивный"},
    {"case":"местн", "russ":"локативная форма"},
    {"case":"зват", "russ":"звательная форма"},
  ]
  transitions: {"transition": string, "russ": string}[] = [
    {"transition": "all", "russ": "любой"},
    {"transition": "пе", "russ": "переходный"},
    {"transition": "нп", "russ": "непереходный"},
  ];
  tenses: {"tense": string, "russ": string}[] = [
    {"tense": "all", "russ": "любое"},
    {"tense": "наст", "russ": "настоящее"},
    {"tense": "непрош", "russ": "непрошедшее"},
    {"tense": "прош", "russ": "прошедшее"}
  ];
  persons: {"person": string, "russ": string}[] = [
    {"person": "all", "russ": "любое"},
    {"person": "1-л", "russ": "первое"},
    {"person": "2-л", "russ": "второе"},
    {"person": "3-л", "russ": "третье"}
  ];
  nums: {"number": string, "russ": string}[] = [
    {"number": "all", "russ": "любое"},
    {"number": "ед", "russ": "единственное"},
    {"number": "мн", "russ": "множественное"},
  ];
  genders: {"gender": string, "russ": string}[] = [
    {"gender":"all", "russ": "любой"},
    {"gender":"муж", "russ": "мужской"},
    {"gender":"жен", "russ": "женский"},
    {"gender":"сред", "russ": "средний"}
  ];
  addition: {"add": string, "russ": string}[] = [
    {"add": "all", "russ": "нет"},
    {"add": "гео", "russ": "топоним"},
    {"add": "имя", "russ": "антропоним"},
    {"add": "отч", "russ": "отчество"},
    {"add": "устар", "russ": "архаизм"}
  ]
   


  constructor(private concordancerService: ConcordancerService) {}

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
    this.truth = undefined;
  }

  showCollocations() {
    this.concordancerService.getConcordance()
      .subscribe( //подпишемся на getConfig, чтобы получить из него наш массив
        res => {
          this.myData = res; // массив собственной персоной;
          console.log(res);  // на всякий случай выводим его в консоль;
       });
  }

  reactButton(s: any) {
    this.number = s.number;
    this.contents = s.contents;
    //return this.truth;
    //console.log(this.truth);
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
