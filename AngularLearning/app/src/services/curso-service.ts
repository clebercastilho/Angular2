import {Injectable} from "@angular/core";
import {Headers, Http} from '@angular/http';
import "rxjs/add/operator/toPromise";

import {Curso} from "../models/curso";

@Injectable()
export class CursoService {

    private url: string;

    constructor(private http: Http) {
        this.url = "http://localhost:58774/api/curso";
    }

    listar(): Promise<Curso[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Curso[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu um erro: ', error);
        return Promise.reject(error.messase || error);
    }
}