import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterPayLoad } from '../../interfaces/register-interface';
import { RegisterService } from '../../services/register-service';

@Component({
  selector: 'app-register-form-modal',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './register-form-modal.html',
  styles: ``,
})
export class RegisterFormModal {

  registerService = inject( RegisterService )

  activedRegister = input.required<boolean>();
  disableRegister = output<void>();
  fadeOut: boolean = false;
  invalid: boolean = false;

  userRegisterForm: FormGroup;
  name: FormControl;
  lastname_p: FormControl;
  lastname_m: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(){
    this.name = new FormControl('', [Validators.required]);
    this.lastname_p = new FormControl('', [Validators.required]);
    this.lastname_m = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);

    this.userRegisterForm = new FormGroup({
      name: this.name,
      lastname_p: this.lastname_p,
      lastname_m: this.lastname_m,
      email: this.email,
      password: this.password
    })

  }

  emitDisable(): void {
    this.fadeOut = true;
    setTimeout(() => {
      this.fadeOut = false;
      this.disableRegister.emit()
    },500)
  }

  handleSubmit(): void {
    if (this.userRegisterForm.invalid) {
      this.invalid = true;
      return;
    }
    const formData: RegisterPayLoad = {
      nombre: this.userRegisterForm.value.name,
      email: this.userRegisterForm.value.email,
      password: this.userRegisterForm.value.password,
      rol: 'comun',
      apellidoP: this.userRegisterForm.value.lastname_p,
      apellidoM: this.userRegisterForm.value.lastname_m,
    }
    this.registerService.registerUser(formData)
    this.emitDisable()
  }

}
