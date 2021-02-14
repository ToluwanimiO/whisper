import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:  EmailValidatorDirective,
    multi:true
  }]
})
export class EmailValidatorDirective implements Validator{

  constructor() { }
  validate(control:AbstractControl):{[key:string]:Boolean | null}{
    var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(control.value){
      if(!email.test(control.value)){
        return {email_error:true};
      }
      return null;
    }
    return {email_error:false}
  }

}
