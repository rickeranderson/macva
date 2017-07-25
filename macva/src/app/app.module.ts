import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    MdGridListModule,
    MdListModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdTabsModule
} from '@angular/material';
import {CharactersComponent} from './components/characters/characters.component';
import {DataService} from './services/data.service';
import {DetailComponent} from './components/detail/detail.component';

const appRoutes: Routes = [
    {path: '', component: CharactersComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        CharactersComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdTableModule,
        HttpModule,
        MdGridListModule,
        MdListModule,
        MdProgressSpinnerModule,
        MdCardModule,
        MdInputModule,
        MdIconModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MdTabsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
