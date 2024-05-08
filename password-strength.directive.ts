import { Directive, HostListener, output, } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
  exportAs: 'strengthValue'
})
export class PasswordStrengthDirective {

  strengthValue!:number;

  constructor(){}

  @HostListener('input',['$event'])
  output(event:InputEvent){
    
    const e = event.target as HTMLInputElement;
    const value = e.value;
    this.strengthValue = this.passwordStrengthChecker(value)
    console.log(this.strengthValue);
  }

  passwordStrengthChecker(pw:string):number{
    if(!pw)return 0;
    else if(pw.length<6) return 1;
    else if(pw.length<8) return 2;
    return 3;
  }

}
