import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import {NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, NgModel} from '@angular/forms';

import { equalTo } from './validator';

const EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualToValidator),
  multi: true
};

@Directive({
  selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
  providers: [EQUAL_TO_VALIDATOR]
})
export class EqualToValidator implements Validator, OnInit {
  @Input() equalTo: NgModel;

  private validator: ValidatorFn;

  ngOnInit(): void {
    this.validator = equalTo(this.equalTo.control);
  }

  validate(c: AbstractControl): Record<string, any> {
    return this.validator(c);
  }
}
