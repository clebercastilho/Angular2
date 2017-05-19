import {Component} from "@angular/core";

@Component({
    selector: "meu-app",
    templateUrl: "app/templates/app-component.html"
})

export class AppComponent {

    titulo: string;
    subtitulo: string;

    constructor() {
        this.titulo = "Angular 2";
        this.subtitulo = "Simples sistema para estudo de funcionalidades do angular 2.";
    }
}