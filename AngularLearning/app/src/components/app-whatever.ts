import {Component} from "@angular/core";

@Component({
    selector: "whatever",
    templateUrl: "app/templates/app-whatever.html"
})

export class AppWhatever {
    clientes: Array<string>;
    dataAtual: Date;
    dateTimeFormat: Boolean;
    cep: string;

    constructor() {
        this.clientes = [];

        this.dataAtual = new Date();
        this.dateTimeFormat = true;

        this.cep = "04534010";
    }

    get customFormat() {
        return this.dateTimeFormat ? "dd/MMM/yyyy HH:mm:ss" : "dd/MM/yyyy";
    }

    mudarFormatoData() {
        this.dateTimeFormat = !this.dateTimeFormat;
    }
}