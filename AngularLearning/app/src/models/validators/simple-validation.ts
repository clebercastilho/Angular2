import {Control} from "angular2/common";

export class SimpleRequiredValidator {
    static validate(control: Control): boolean {
        return (control.value != "");
    }
}