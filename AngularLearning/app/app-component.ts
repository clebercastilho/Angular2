import {Component} from "angular2/core";
import {CepPipe} from "./cep-pipe";

@Component({
    selector: "meu-app",
    templateUrl: "app/templates/app-component.html",
    pipes: [CepPipe]
})

export class AppComponent {
    titulo: string;
    clientes: Array<string>;
    dataAtual: Date;
    dateTimeFormat: Boolean;
    cep: string;

    constructor() {
        this.titulo = "Listagem de clientes";
        this.clientes = [];

        this.dataAtual = new Date();
        this.dateTimeFormat = true;

        this.cep = "04534010";
    }

    get customFormat(){
        return this.dateTimeFormat ? "dd/MMM/yyyy HH:mm:ss" : "dd/MM/yyyy";
    }

    mudarFormatoData() {
        this.dateTimeFormat = !this.dateTimeFormat;
    }
}