import { Component } from '@angular/core';
import { ConcordancerService } from './concordancer.service';

@Component({
  selector: 'app-config',
  templateUrl: './concordancer.component.html',
  providers: [ ConcordancerService ],
  styles: ['.error { color: #b30000; }']
})
export class ConcordancerComponent {
  word_1: any;
  word_2: any;
  grammar: any;
  truth: any;
  error: any;
  headers: string[] = [];
  myData: any[] = [];
  S: any; V: any; A: any; ADV: any; PR: any;
  SPRO: any; APRO: any; ADVPRO: any;


  constructor(private concordancerService: ConcordancerService) {}

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
  }

  showCollocations() {
    this.concordancerService.getConcordance()
      .subscribe( //подпишемся на getConfig, чтобы получить из него наш массив
        res => {
          this.myData = res; // массив собственной персоной;
          console.log(res);  // на всякий случай выводим его в консоль;
       });
  }

  reactButton() {
    this.truth = true;
    return this.truth;
    console.log(this.truth);
  }

  getType(val: any): string {
    return val instanceof Date ? 'date' : Array.isArray(val) ? 'array' : typeof val;
  }
}
