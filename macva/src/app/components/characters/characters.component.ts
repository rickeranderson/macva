import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters:Characters[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.characters = [
      {name: 'fred'},
      {name: 'bob'}
    ]
    this.dataService.getCharacters().subscribe((chars) => {
      console.log(chars);
    });
  }

}

interface Characters{
  name:string
}
