import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { }

  getCharactersByOffset(offset:number, limit:number){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?&limit='+limit+'&offset='+offset+'&apikey=34f8c538accc8d5f931f49cad49a4d21').map(res => res.json());
  }

  getCharactersByOffsetSearch(offset:number, limit:number, searchTerm:string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith='+searchTerm+'&limit='+limit+'&offset='+offset+'&apikey=34f8c538accc8d5f931f49cad49a4d21').map(res => res.json());
  }

  getCharacterDetails(id:number){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters/'+id+'?apikey=34f8c538accc8d5f931f49cad49a4d21').map(res => res.json());
  }

}
