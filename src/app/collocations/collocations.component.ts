import { Component } from '@angular/core';
import { CollocationsService } from './collocations.service';

@Component({
  selector: 'app-config',
  templateUrl: './collocations.component.html',
  providers: [ CollocationsService ],
  styles: ['.error { color: #b30000; }']
})
export class CollocationsComponent {
  error: any;
  headers: string[] = [];
  myData: any[] = [];

  constructor(private collocationsService: CollocationsService) {}

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
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
