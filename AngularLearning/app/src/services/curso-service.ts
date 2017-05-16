import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Headers, Http} from '@angular/http';

import {ConfigService} from "./config-service";
import {Curso} from "../models/curso";

@Injectable()
export class CursoService {

    public url: string;
    public cursos: Curso[];

    constructor(private http: Http, private configService: ConfigService) {
        this.url = "http://localhost:58774/api/curso";
        this.cursos = [];
    }

    listar() {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    public handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public parsing(data: any): Curso[] {
        this.cursos = [];
        for(let d of data) {
            if(d.Ativo) {
                var c = new Curso(d.ID, d.Descricao);
                this.cursos.push(c);
            }
        }

        return this.cursos;
    }
}
