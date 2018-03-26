import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigServiceService {

  configUrl : string = 'assets/json/config.json';
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<Config>(this.configUrl);
  }

  getAllDataWithHeaders() : Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
        this.configUrl, { observe: 'response' });
  }
}
