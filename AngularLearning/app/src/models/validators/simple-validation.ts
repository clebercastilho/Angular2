import { FormControl } from '@angular/forms';

export class SimpleRequiredValidator {
    static validate(control: FormControl): boolean {
        return (control.value != "");
    }
}