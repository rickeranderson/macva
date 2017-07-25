import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    characters: Character[];
    tempCharacters: any[];
    offset: number = 0;
    limit: number = 20;
    return: number = 0;
    isLoading: boolean = true;
    searchTerm: string = '';
    tempSearchTerm: string = '';
    detailEnabled: boolean = false;
    orderBy: string = 'name';

    /** Set search term and make request */
    search() {
        console.log(this.searchTerm);
        this.selectedID = 0;
        this.detailEnabled = false;
        this.searchTerm = this.tempSearchTerm;
        this.offset = 0;
        this.getCharacters(this.offset);
    }

    /** Hide prev if at begining */
    showGetPrev() {
        if (this.offset == 0) {
            return false;
        }
        return true;
    }

    /** Hide next if no more results */
    showGetNext() {
        if (this.return < this.limit) {
            return false;
        }
        return true;
    }

    /** To show or not to show spinny wheel thing*/
    getIsLoading() {
        return this.isLoading;
    }

    /** Checking to determine current view */
    isDetailEnabled() {
        return this.detailEnabled;
    }

    /** Make request to data service to retrieve data */
    getCharacters(offset) {
        this.isLoading = true;
        this.characters = [];
        if (this.searchTerm.length == 0) {
            this.dataService.getCharactersByOffset(offset, this.limit, this.orderBy).subscribe((chars) => {
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
            this.dataService.getCharactersByOffsetSearch(offset, this.limit, this.searchTerm, this.orderBy).subscribe((chars) => {
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

    constructor(private dataService: DataService, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'thumbs-up',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_view_comfy_black_48px.svg'));
    }

    /** Where first data is called */
    ngOnInit() {
        this.getCharacters(this.offset);
    }

    /** Go to next characters */
    getNextCharacters() {
        this.cleanSearch();
        this.offset = this.offset + this.limit;
        this.getCharacters(this.offset);
    }

    /** Go to previous characters */
    getPrevCharacters() {
        this.cleanSearch();
        this.offset = this.offset - this.limit;
        this.getCharacters(this.offset);
    }

    /** Remove search terms if not submitted */
    cleanSearch() {
        if (this.tempSearchTerm.length > 0 && this.searchTerm.length == 0) {
            this.tempSearchTerm = '';
        }
    }

    //////////////////////////////
    //Character Detail Functions//
    //////////////////////////////
    selectedID: number = 0;
    selectedCharacter: any;
    numComics: number = 0;
    numStories: number = 0;
    numEvents: number = 0;
    numSeries: number = 0;

    /** Set id and grab details*/
    selectCharacter(id: number) {
        this.isLoading = true;
        this.selectedID = id;
        this.getDetails();
    }

    /** Calls data service to retrieve data from character with id */
    getDetails() {
        this.dataService.getCharacterDetails(this.selectedID).subscribe((chars) => {
            this.selectedCharacter = chars.data.results[0];
            if (this.selectedCharacter.description.length == 0) {
                this.selectedCharacter.description = 'No description available';
            }
            this.numComics = this.selectedCharacter.comics.items.length;
            this.numStories = this.selectedCharacter.stories.items.length;
            this.numEvents = this.selectedCharacter.events.items.length;
            this.numSeries = this.selectedCharacter.series.items.length;

            console.log(this.selectedCharacter);
            this.isLoading = false;
            this.detailEnabled = true;
        });
    }

    /** Check number of comics returned */
    checkComics() {
        if (this.numComics == 0) {
            return true;
        }
        return false;
    }

    /** Check number of stories returned */
    checkStories() {
        if (this.numStories == 0) {
            return true;
        }
        return false;
    }

    /** Check number of events returned */
    checkEvents() {
        if (this.numEvents == 0) {
            return true;
        }
        return false;
    }

    /** Check number of series returned */
    checkSeries() {
        if (this.numSeries == 0) {
            return true;
        }
        return false;
    }

    /** Navigate to character wiki */
    goToMoreDetails() {
        window.location.href = this.selectedCharacter.urls[1].url;
    }

    /** Change view back to grid */
    backToGrid() {
        this.detailEnabled = false;
    }

}

/** Definition of character for grid view */
interface Character {
    name: string,
    id: number,
    thumbnailPath: string,
    thumbnailExt: string
}