import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:PasswordDirective,
    multi:true
  }]
})

export class PasswordDirective implements Validator{
  @Input() passwordType:string;
  constructor() { }
  validate(control:AbstractControl):{[key:string]:boolean}{
    let type = this.passwordType
    if(type == control.value){
      console.log(type,"matched")
      console.log(control,"matched")
      return {match:false};
    }
    else{
      console.log(type)
      console.log(control)
      return{match:true}
    } 
  }
}
