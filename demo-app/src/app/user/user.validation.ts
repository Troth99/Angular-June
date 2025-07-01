import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export interface User {
    email: string,
    password: string,
}


export const emailValidators = [Validators.required, Validators.email]
export const passwordValidators = [Validators.required, Validators.minLength(4)];
