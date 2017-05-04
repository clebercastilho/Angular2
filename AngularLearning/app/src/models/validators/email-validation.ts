﻿import { FormControl } from '@angular/forms';

export class EmailValidator {

    private static EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    static validate(control: FormControl): { [key: string]: boolean } {
        if (EmailValidator.EMAIL_REGEX.test(control.value))
            return null;

        return { 'email': true };
    }
}