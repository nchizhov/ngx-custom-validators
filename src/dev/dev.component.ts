import { Component, OnInit } from '@angular/core';
import {Validators, UntypedFormControl, UntypedFormGroup, UntypedFormBuilder} from '@angular/forms';

import { CustomValidators } from '../app/custom-forms.module';

@Component({
  selector: 'app-dev',
  templateUrl: 'dev.component.html',
  styleUrls: ['dev.component.scss']
})
export class DevComponent implements OnInit {
  public form: UntypedFormGroup;
  public num = 5;
  public arrayLengthTest: string[] = ['ok'];
  public dateTest = { year: 2017, month: 10, day: 12 };
  public objProperty = { id: 1 };

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    const password: UntypedFormControl = new UntypedFormControl('', Validators.required);
    const certainPassword: UntypedFormControl = new UntypedFormControl('', CustomValidators.notEqualTo(password));

    this.form = this.fb.group({
        password: password,
        certainPassword: certainPassword
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
