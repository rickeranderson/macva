import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule
} from '@angular/material';
import { CharactersComponent } from './components/characters/characters.component';
import { DataService } from './services/data.service';

@NgModule({
    declarations: [
        AppComponent,
        CharactersComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdTableModule,
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
