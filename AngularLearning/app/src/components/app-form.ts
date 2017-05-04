import {Component} from "@angular/core";

import {Curso} from "../models/curso";
import {Aluno} from "../models/aluno";

import {SimpleRequiredValidator} from "../models/validators/simple-validation";
import {EmailValidator} from "../models/validators/email-validation";

import {CursoService} from "../services/curso-service";
import {AlunoService} from "../services/aluno-service";

@Component({
    selector: "meu-form",
    templateUrl: "app/templates/app-form.html",
    providers: [CursoService, AlunoService]
})

export class AppForm {

    sucesso: boolean = false;
    alunos: Aluno[];
    cursos: Curso[];
    aluno: Aluno;

    constructor(private cursoService: CursoService, private alunoService: AlunoService) {
        this.cursos = cursoService.listar();
        this.alunos = alunoService.listar();
        this.aluno = new Aluno();
    }

    enviar(): void {
        this.alunoService.cadastrar(this.aluno);
        this.sucesso = true;
        this.timeout(3000);

        this.alunos = this.alunoService.listar();
        this.aluno = new Aluno();
    }

    excluir(id: number) {
        this.alunoService.remover(id);
        this.alunos = this.alunoService.listar();
    }

    timeout(id: number) {
        setTimeout(() => {
            this.sucesso = false;
        }, id);
    }

    debug(): string {
        return JSON.stringify(this.aluno);
    }

}