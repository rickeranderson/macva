import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    publicKey: string = '34f8c538accc8d5f931f49cad49a4d21';

    constructor(public http: Http) {
    }

    getCharactersByOffset(offset: number, limit: number, order: string) {
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?orderBy=' + order + '&limit=' + limit + '&offset=' + offset + '&apikey=' + this.publicKey).map(res => res.json());
    }

    getCharactersByOffsetSearch(offset: number, limit: number, searchTerm: string, order: string) {
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + searchTerm + '&orderBy=' + order + '&limit=' + limit + '&offset=' + offset + '&apikey=' + this.publicKey).map(res => res.json());
    }

    getCharacterDetails(id: number) {
        return this.http.get('https://gateway.marvel.com:443/v1/public/characters/' + id + '?apikey=' + this.publicKey).map(res => res.json());
    }

    getCover(uri: string) {
        return this.http.get(uri + '?apikey=' + this.publicKey).map(res => res.json());
    }

}
