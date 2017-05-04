import {Component} from "@angular/core";

@Component({
    selector: "meu-app",
    templateUrl: "app/templates/app-component.html"
})

export class AppComponent {

    titulo: string;

    constructor() {
        this.titulo = "Base page - Whatever";
    }
}