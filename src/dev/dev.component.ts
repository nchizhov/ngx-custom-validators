import { Component, OnInit } from '@angular/core';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

import { CustomValidators } from '../app/custom-forms.module';

@Component({
  selector: 'app-dev',
  templateUrl: 'dev.component.html',
  styleUrls: ['dev.component.scss']
})
export class DevComponent implements OnInit {
  public form: FormGroup;
  public num = 5;
  public arrayLengthTest: string[] = ['ok'];
  public dateTest = { year: 2017, month: 10, day: 12 };
  public objProperty = { id: 1 };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const password: FormControl = new FormControl('', Validators.required);
    const certainPassword: FormControl = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = this.fb.group({
        password: password,
        certainPassword: certainPassword
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
