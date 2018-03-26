import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigServiceService {

  configUrl : string = 'assets/json/config.json';
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get(this.configUrl);
  }

}
