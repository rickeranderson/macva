import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

  getCharacters(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=34f8c538accc8d5f931f49cad49a4d21')
        .map(res => res.json());
  }

}
