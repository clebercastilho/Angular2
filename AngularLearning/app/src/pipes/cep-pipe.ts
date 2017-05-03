import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "cepFilter"
})

export class CepPipe implements PipeTransform {
    transform(value: string): string {
        return value.substr(0,5) + "-" + value.substr(5,3);
    }
}