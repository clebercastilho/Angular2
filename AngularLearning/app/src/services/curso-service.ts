import {Injectable} from "@angular/core";
import {Curso} from "../models/curso";

@Injectable()
export class CursoService {

    private listaCursos: Curso[] = [
        new Curso(1, "Angular 2"),
        new Curso(2, "Javascript"),
        new Curso(3, "C#"),
        new Curso(4, "Java") 
    ];

    listarTodos() {
        return this.listaCursos;
    }

}