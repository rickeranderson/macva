import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:Character[];
  tempCharacters:any[];
  offset:number = 0;
  limit:number = 20;
  return:number = 0;
  isLoading:boolean = true;

  showGetPrev(){
    if(this.offset == 0){
      return false;
    }
    return true;
  }

  showGetNext(){
    if(this.return < this.limit){
      return false;
    }
    return true;
  }

  getIsLoading(){
    return this.isLoading;
  }

  getCharacters(offset){
    this.isLoading = true;
    this.characters = [];
    this.dataService.getCharactersByOffset(offset, this.limit).subscribe((chars) => {
      this.tempCharacters = chars.data.results;
      console.log(chars.data);
      this.characters = [];
      this.return = chars.data.count
      for(let i=0; i < this.tempCharacters.length; i++){
        this.characters.push({name:this.tempCharacters[i].name, id:this.tempCharacters[i].id})
      }
      this.isLoading = false;
    });

  }

  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.getCharacters(this.offset);
  }

  getNextCharacters(){
    this.offset = this.offset + this.limit;
    this.getCharacters(this.offset);
  }

  getPrevCharacters(){
    this.offset = this.offset - this.limit;
    this.getCharacters(this.offset);
  }

}

interface Character{
  name:string,
  id:number
}