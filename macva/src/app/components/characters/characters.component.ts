import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

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
  searchTerm:string = '';
  tempSearchTerm:string = '';
  detailEnabled:boolean = false;


  showGetPrev(){
    if(this.offset == 0){
      return false;
    }
    return true;
  }

  search(){
    console.log(this.searchTerm);
    this.selectedID = 0;
    this.detailEnabled = false;
    this.searchTerm = this.tempSearchTerm;
    this.offset = 0;
    this.getCharacters(this.offset);
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

  isDetailEnabled(){
    return this.detailEnabled;
  }

  getCharacters(offset) {
    this.isLoading = true;
    this.characters = [];
    if(this.searchTerm.length == 0){
      this.dataService.getCharactersByOffset(offset, this.limit).subscribe((chars) => {
        this.tempCharacters = chars.data.results;
        console.log(chars.data);
        this.characters = [];
        this.return = chars.data.count
        for (let i = 0; i < this.tempCharacters.length; i++) {
          this.characters.push({
            name: this.tempCharacters[i].name,
            id: this.tempCharacters[i].id,
            thumbnailPath: this.tempCharacters[i].thumbnail.path,
            thumbnailExt: this.tempCharacters[i].thumbnail.extension
          });
        }
        this.isLoading = false;
      });
    } else {
      this.dataService.getCharactersByOffsetSearch(offset, this.limit, this.searchTerm).subscribe((chars) => {
        this.tempCharacters = chars.data.results;
        console.log(chars.data);
        this.characters = [];
        this.return = chars.data.count
        for (let i = 0; i < this.tempCharacters.length; i++) {
          this.characters.push({
            name: this.tempCharacters[i].name,
            id: this.tempCharacters[i].id,
            thumbnailPath: this.tempCharacters[i].thumbnail.path,
            thumbnailExt: this.tempCharacters[i].thumbnail.extension
          });
        }
        this.isLoading = false;
      });
    }

  }

  constructor(private dataService:DataService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_view_comfy_black_48px.svg'));
  }

  ngOnInit() {
   this.getCharacters(this.offset);
  }

  getNextCharacters(){
    this.cleanSearch();
    this.offset = this.offset + this.limit;
    this.getCharacters(this.offset);
  }

  getPrevCharacters(){
    this.cleanSearch();
    this.offset = this.offset - this.limit;
    this.getCharacters(this.offset);
  }

  cleanSearch(){
    if(this.tempSearchTerm.length > 0 && this.searchTerm.length == 0){
      this.tempSearchTerm= '';
    }
  }


  //Character Detail Functions

  selectedID:number = 0;
  selectedCharacter:any;

  selectCharacter(id:number){
    this.isLoading = true;
    this.selectedID = id;
    this.getDetails();
  }

  getDetails(){
    this.dataService.getCharacterDetails(this.selectedID).subscribe((chars) => {
      this.selectedCharacter = chars.data.results[0];
      if(this.selectedCharacter.description.length == 0){
        this.selectedCharacter.description = 'No description available';
      }
      console.log(this.selectedCharacter);
      this.isLoading = false;
      this.detailEnabled = true;
    });
  }

  goToMoreDetails(){
    window.location.href = this.selectedCharacter.urls[1].url;
  }

  backToGrid(){
    this.detailEnabled = false;
  }

}



interface Character{
  name:string,
  id:number,
  thumbnailPath:string,
  thumbnailExt:string
}