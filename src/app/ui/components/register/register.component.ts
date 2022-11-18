/*import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base/base.component';
import { User } from 'src/app/entities/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, spinner: NgxSpinnerService) { super(spinner) }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName:["",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      lastName:["",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      username:["",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      emailAddress:["",[
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      password:["",[
        Validators.required,
        
      ]],
      paswordConfirm:["",[
        Validators.required,
        
      ]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let password = group.get("password").value;
        let passwordConfirm = group.get("passwordConfirm").value;
        return password === passwordConfirm ? null : { notSame: true };
      }
    }
    )
  }

  get component(){
    return this.form.controls;
  }

  submitted: boolean = false
  onSubmit(data:User){
    this.submitted = true

    var f = this.form;
    var c = this.component;
    var d = this.form.hasError("notSame")

    if (this.form.invalid)
      return;
  }

}*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/common/models/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
