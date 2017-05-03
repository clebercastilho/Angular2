import {Injectable} from "angular2/core";
import {Aluno} from "../models/aluno";

@Injectable()
export class AlunoService {

    private listaAlunos: Aluno[] = [
        new Aluno("Fulano", 'fulano@email.com', 99, "C#"),
        new Aluno("Ciclano", 'ciclano@email.com', 99, "C#")
    ];

    listar() {
        return this.listaAlunos;
    }

    cadastrar(aluno: Aluno) {
        this.listaAlunos.push(aluno);
    }

    remover(id: number) {
        this.listaAlunos.splice(id, 1);
    }

}