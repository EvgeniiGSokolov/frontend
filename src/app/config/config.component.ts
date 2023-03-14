import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ ConfigService ],
  styles: ['.error { color: #b30000; }']
})
export class ConfigComponent {
  error: any;
  headers: string[] = [];
  myData: any[] = [];

  constructor(private configService: ConfigService) {}

  clear() {
    this.myData = [];
    this.error = undefined;
    this.headers = [];
  }

  showConfig() {
    this.configService.getConfig()
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
