import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//custom pipes
import {CepPipe} from "./pipes/cep-pipe";

//main component
import {AppForm} from "./components/app-form";
import {AppComponent} from "./components/app-component";
import {AppWhatever} from './components/app-whatever';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppForm, AppComponent, AppWhatever, CepPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }